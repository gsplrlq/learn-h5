<template>
  <van-card
    v-if="course.courseType !== 1"
    style="background-color: white"
    class="mb-2"
    :title="course.title"
    :desc="course.courseDesc"
    :price="course.price"
    @click="goToCourse(course.id)"
  >
    <template #thumb>
      <img :src="course.imgUrl" style="height: 90px" />
    </template>
    <template #tags>
      <van-tag type="danger" class="mr-4">付费</van-tag>
      <van-icon name="friends-o" color="gray" />
      <span style="color: gray">{{ course.studyCount }}</span>
    </template>
  </van-card>
  <van-card
    v-else
    style="background-color: white"
    class="mb-2"
    :thumb="course.imgUrl"
    :title="course.title"
    :desc="course.courseDesc"
    @click="goToCourse(course.id)"
  >
    <template #thumb>
      <img :src="course.imgUrl" style="height: 90px" />
    </template>
    <template #tags>
      <van-tag type="success" class="mr-4">免费</van-tag>
      <van-icon name="friends-o" color="gray" />
      <span style="color: gray">{{ course.studyCount }}</span>
    </template>
  </van-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Card, Tag } from "vant";
import { useRouter } from "vue-router";

interface Course {
  imgUrl: string;
  title: string;
  courseDesc: string;
  price: string;
  id: string;
  courseType: number;
  studyCount: number;
}

export default defineComponent({
  name: "CourseCard",
  components: {
    "van-card": Card,
    "van-tag": Tag
  },
  props: {
    course: {
      type: Object as PropType<Course>,
      required: true,
      default: () => ({
        imgUrl: "",
        title: "",
        courseDesc: "",
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
