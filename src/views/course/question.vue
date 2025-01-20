<template>
  <div class="question-answer">
    <div v-if="course.hasStudy" class="mb-4">
      <van-button type="primary" @click="question()">我要提问</van-button>
    </div>

    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in qaList" :key="item.id">
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
          <div v-if="item.answers && item.answers.length" class="answers">
            <h3 class="font-semibold">回答 /</h3>
            <div
              v-for="reply in item.answers"
              :key="reply.id"
              class="reply-item text-sm"
            >
              <div class="reply-user">{{ reply.userName }}：</div>
              <div class="reply-content line-clamp-2">{{ reply.content }}</div>
            </div>
          </div>
        </template>
        <template #right-icon>
          <van-button
            v-if="course.hasStudy"
            type="primary"
            size="small"
            @click="reply(item.id)"
            >回复</van-button
          >
        </template>
      </van-cell>
    </van-list>

    <van-dialog
      v-model:show="showQuestionDialog"
      title="提问"
      show-cancel-button
      @confirm="submitQuestion"
    >
      <van-field v-model="questionContent" placeholder="请输入问题内容" />
    </van-dialog>
    <van-dialog
      v-model:show="showReplyDialog"
      title="回复"
      show-cancel-button
      @confirm="submitReply"
    >
      <van-field v-model="replyContent" placeholder="请输入回复内容" />
    </van-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getLessonQa, getLessonQaCreate } from "@/api/lesson"; // Adjust the import according to your project structure
import { showToast } from "vant";

export default defineComponent({
  name: "QuestionAnswer",
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const loading = ref(false);
    const finished = ref(false);
    const qaList = ref([]);
    const showReplyDialog = ref(false);
    const replyContent = ref("");
    const showQuestionDialog = ref(false);
    const questionContent = ref("");
    const currentQuestionId = ref<number | null>(null);

    const onLoad = async () => {
      loading.value = true;
      try {
        const data = await getLessonQa({
          courseId: props.course.id,
          page: {
            current: 1,
            size: -1
          }
        });
        finished.value = true;
        qaList.value = [...data.records];
      } catch (error) {
        showToast("加载失败");
      } finally {
        loading.value = false;
      }
    };

    const question = () => {
      showQuestionDialog.value = true;
    };

    const submitQuestion = async () => {
      if (!questionContent.value.trim()) {
        showToast("提问内容不能为空");
        return;
      }
      if (questionContent.value.trim().length > 200) {
        showToast("提问内容不能超过200个字符");
        return;
      }

      try {
        await getLessonQaCreate({
          courseId: props.course.id,
          type: "question",
          content: questionContent.value
        });
        showToast("提问成功");
        showQuestionDialog.value = false;
        questionContent.value = "";
        onLoad();
      } catch (error) {
        showToast("提问失败");
      }
    };

    const reply = (id: number) => {
      currentQuestionId.value = id;
      showReplyDialog.value = true;
    };

    const submitReply = async () => {
      if (!replyContent.value.trim()) {
        showToast("回复内容不能为空");
        return;
      }
      if (replyContent.value.trim().length > 200) {
        showToast("回复内容不能超过200个字符");
        return;
      }

      try {
        await getLessonQaCreate({
          courseId: props.course.id,
          type: "answer",
          content: replyContent.value,
          pid: currentQuestionId.value
        });
        showToast("回复成功");
        showReplyDialog.value = false;
        replyContent.value = "";
        onLoad();
      } catch (error) {
        showToast("回复失败");
      }
    };

    return {
      loading,
      finished,
      qaList,
      showReplyDialog,
      replyContent,
      showQuestionDialog,
      questionContent,
      onLoad,
      reply,
      submitReply,
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
