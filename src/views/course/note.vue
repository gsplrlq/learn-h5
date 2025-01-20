<template>
  <div class="question-answer">
    <div v-if="course.hasStudy" class="mb-4">
      <van-button type="primary" @click="question()">添加笔记</van-button>
    </div>

    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in noteList" :key="item.id">
        <template #icon>
          <van-image
            class="mr-2"
            :src="item.userAvatar"
            width="32"
            height="32"
            round
          />
        </template>
        <template #title>
          <div>{{ item.userName }}</div>
          <div class="line-clamp-3">{{ item.content }}</div>
          <div class="text-gray-500">{{ item.createTime }}</div>
        </template>
      </van-cell>
    </van-list>

    <van-dialog
      v-model:show="showDialog"
      title="笔记"
      show-cancel-button
      @confirm="submitQuestion"
    >
      <van-field v-model="content" placeholder="请输入问题内容" />
    </van-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getLessonNote, getLessonNoteCreate } from "@/api/lesson"; // Adjust the import according to your project structure
import { showToast } from "vant";

export default defineComponent({
  name: "NoteList",
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const loading = ref(false);
    const finished = ref(false);
    const noteList = ref<any[]>([]);
    const showDialog = ref(false);
    const content = ref("");

    const onLoad = async () => {
      loading.value = true;
      try {
        const data = await getLessonNote({
          courseId: props.course.id,
          page: {
            current: 1,
            size: -1
          }
        });
        finished.value = true;
        noteList.value = [...data.records];
      } catch (error) {
        showToast("加载失败");
      } finally {
        loading.value = false;
      }
    };

    const question = () => {
      showDialog.value = true;
    };

    const submitQuestion = async () => {
      if (!content.value.trim()) {
        showToast("笔记内容不能为空");
        return;
      }
      if (content.value.trim().length > 200) {
        showToast("笔记内容不能超过200个字符");
        return;
      }

      try {
        await getLessonNoteCreate({
          courseId: props.course.id,
          content: content.value
        });
        showToast("提交成功");
        showDialog.value = false;
        content.value = "";
        onLoad();
      } catch (error) {
        showToast("提交失败");
      }
    };

    return {
      loading,
      finished,
      noteList,
      showDialog,
      content,
      onLoad,
      question,
      submitQuestion
    };
  }
});
</script>

<style scoped>
.question-answer {
  padding: 16px;
}
</style>
