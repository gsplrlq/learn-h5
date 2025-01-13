<template>
  <van-dropdown-menu>
    <van-dropdown-item
      v-model="direction"
      :options="directionOptions"
      @change="onDirectionChange"
    />
    <van-dropdown-item v-model="category" :options="filteredCategoryOptions" />
  </van-dropdown-menu>
  <div class="course-list">
    <div class="course-section">
      <van-row gutter="20">
        <van-col v-for="course in courses" :key="course.id" span="24">
          <course-card :course="course" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import CourseCard from "@/components/course/index.vue";
import { getHomeCourse } from "@/api/home";

const courses = ref([]);
const direction = ref("");
const category = ref("");
const directionOptions = ref([
  { text: "全部", value: "" },
  { text: "Frontend", value: "frontend" },
  { text: "Backend", value: "backend" },
  { text: "Mobile", value: "mobile" }
]);
const categoryOptions = ref([
  { text: "全部", value: "" },
  { text: "Web Development", value: "web" },
  { text: "Data Science", value: "data" },
  { text: "Machine Learning", value: "ml" }
]);

const filteredCategoryOptions = ref(categoryOptions.value);

defineOptions({
  name: "Course"
});

const onDirectionChange = (value: string) => {
  console.log("Direction changed to:", value);
};

onMounted(() => {
  getHomeCourse().then(data => {
    courses.value = data;
  });
});
</script>

<style scoped>
.my-swipe {
  height: 200px;
}
.course-list {
  margin-top: 20px;
}
</style>
