<template>
  <van-swipe class="my-swipe" autoplay="3000">
    <van-swipe-item v-for="(item, index) in swipe" :key="index">
      <a :href="item.link" target="_blank">
        <img :src="item.imageUrl" :alt="item.title" />
      </a>
    </van-swipe-item>
  </van-swipe>
  <div class="course-list">
    <div class="course-section">
      <h3 class="centered-title">
        <i class="centered-title-icon" />
        班／级／推／荐
        <i class="centered-title-icon icon1" />
      </h3>
      <van-row gutter="20">
        <van-col
          v-for="item in courses.classInfoItemList"
          :key="item.id"
          span="24"
        >
          <class-card :classItem="item" />
        </van-col>
      </van-row>
      <div v-if="courses.classInfoItemList.length === 0" class="no-data">
        暂无数据
      </div>
    </div>
    <div class="course-section">
      <h3 class="centered-title">
        <i class="centered-title-icon" />
        为／你／推／荐
        <i class="centered-title-icon icon1" />
      </h3>
      <van-row gutter="20">
        <van-col v-for="item in courses.hotCourseList" :key="item.id" span="24">
          <course-card :course="item" />
        </van-col>
      </van-row>
      <div v-if="courses.hotCourseList.length === 0" class="no-data">
        暂无数据
      </div>
    </div>
    <div class="course-section">
      <h3 class="centered-title">
        <i class="centered-title-icon icon1" />
        新／上／好／课
        <i class="centered-title-icon icon2" />
      </h3>
      <van-row gutter="20">
        <van-col v-for="item in courses.newCourseList" :key="item.id" span="24">
          <course-card :course="item" />
        </van-col>
      </van-row>
      <div v-if="courses.newCourseList.length === 0" class="no-data">
        暂无数据
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import CourseCard from "@/components/course/index.vue";
import ClassCard from "@/components/classCard/index.vue";
import { postBannerList, getHomeCourse } from "@/api/home";

const swipe = ref([]);
const courses = ref({
  classInfoItemList: [],
  hotCourseList: [],
  newCourseList: []
});

defineOptions({
  name: "Home"
});

onMounted(() => {
  postBannerList().then(data => {
    swipe.value = data;
  });
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
.centered-title {
  font: 20px bold;
  font-weight: 600;
  text-align: center;
  margin: 10px 0;
  color: rgb(77, 85, 93);
}
.centered-title-icon {
  display: inline-block;
  vertical-align: top;
  width: 56px;
  height: 36px;
  background: url(@/assets/images/icon.png) 0% 0% / cover;
}
.centered-title-icon.icon1 {
  background-position: center -36px;
}
.centered-title-icon.icon2 {
  background-position: center -72px;
}

.no-data {
  text-align: center;
  color: #999;
  margin-bottom: 20px;
}
</style>
