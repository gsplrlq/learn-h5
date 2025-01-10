<template>
  <div class="note-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="note in notes" :key="note.id" :label="note.content">
        <template #title>
          <div class="flex justify-between">
            <span>{{ note.courseName }}</span>
            <span style="min-width: 150px">{{ note.createTime }}</span>
          </div>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Cell, List } from "vant";
import { getCourseNote } from "@/api/user";

export default defineComponent({
  name: "NoteList",
  components: {
    "van-cell": Cell,
    "van-list": List
  },
  setup() {
    const notes = ref<
      Array<{
        id: number;
        courseName: string;
        content: string;
        createTime: string;
      }>
    >([]);
    const loading = ref(false);
    const finished = ref(false);
    const page = ref(1);

    const onLoad = () => {
      loading.value = true;
      const params = {
        page: {
          size: 10,
          current: page.value
        }
      };
      getCourseNote(params).then(data => {
        notes.value = notes.value.concat(data.records);
        loading.value = false;
        page.value++;
        if (data.records.length < 10) {
          finished.value = true;
        }
      });
    };

    return {
      notes,
      loading,
      finished,
      onLoad
    };
  }
});
</script>

<style scoped>
.note-list {
  padding: 16px;
}
</style>
