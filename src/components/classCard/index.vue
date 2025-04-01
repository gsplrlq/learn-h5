<template>
  <van-card
    style="background-color: white"
    class="mb-2"
    :title="classItem.name"
    @click="goToCourse(classItem.courseId)"
  >
    <template #thumb>
      <img
        src="@/assets/images/class_bg.png"
        style="transform: scale(0.7) translate(-10px, -10px)"
      />
    </template>
    <template #tags>
      <div style="color: gray">班主任：{{ classItem.teacherName }}</div>
      <div style="color: gray">人数：{{ classItem.classSize }}</div>
      <div style="color: gray">课程：{{ classItem.courseName }}</div>
    </template>
  </van-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Card, Tag } from "vant";
import { useRouter } from "vue-router";

interface Class {
  classSize: number;
  courseId: string;
  courseName: string;
  name: string;
  sourceType: number;
  teacherName: string | null;
  workLevel: string | null;
  workType: string | null;
}
export default defineComponent({
  name: "classCard",
  components: {
    "van-card": Card
  },
  props: {
    classItem: {
      type: Object as PropType<Class>,
      required: true,
      default: () => ({
        imgUrl: "",
        title: "",
        classDesc: "",
        price: "",
        tags: [],
        id: ""
      })
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    goToCourse(courseId: string) {
      // Implement navigation logic here
      this.router.push({ path: `/course/${courseId}` });
    }
  }
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
