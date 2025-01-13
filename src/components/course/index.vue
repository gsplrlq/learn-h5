<template>
  <van-card
    v-if="course.courseType !== 1"
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
  methods: {
    goToCourse(courseId: string) {
      // Implement navigation logic here
      console.log(`Navigating to course with ID: ${courseId}`);
    }
  }
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
