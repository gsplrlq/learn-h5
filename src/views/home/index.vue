<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="Logo" />
        <img src="@/assets/images/logo_text.png" alt="Logo" />
      </div>
      <van-tabs sticky>
        <van-tab
          v-for="m in menu"
          :key="m.name"
          class="menu-item"
          :title="m.title"
          :name="m.name"
          :to="m.to"
        />
      </van-tabs>
    </div>
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
          为／你／推／荐
          <i class="centered-title-icon icon1" />
        </h3>
        <van-row gutter="20">
          <van-col
            v-for="course in courses.hotCourseList"
            :key="course.id"
            span="24"
          >
            <van-card
              :title="course.title"
              :desc="course.courseDesc"
              :thumb="course.imgUrl"
              @click="goToCourse(course.id)"
            />
          </van-col>
        </van-row>
      </div>
      <div class="course-section">
        <h3 class="centered-title">
          <i class="centered-title-icon icon1" />
          新／上／好／课
          <i class="centered-title-icon icon2" />
        </h3>
        <van-row gutter="20">
          <van-col
            v-for="course in courses.newCourseList"
            :key="course.id"
            span="24"
          >
            <van-card
              :title="course.title"
              :desc="course.courseDesc"
              :thumb="course.imgUrl"
              @click="goToCourse(course.id)"
            />
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { postBannerList, getHomeCourse } from "@/api/home";
defineOptions({
  name: "Home"
});

const menu = ref([
  { title: "首页", name: "", to: { name: "Home" } },
  { title: "免费课", name: "free", to: { name: "Home" } },
  { title: "付费课", name: "paid", to: { name: "Home" } },
  { title: "培训套餐", name: "package", to: { name: "Home" } },
  { title: "在线考试", name: "exam", to: { name: "Home" } }
]);
const router = useRouter();
const swipe = ref([]);
const courses = ref({ hotCourseList: [], newCourseList: [] });

const goToCourse = (id: number) => {
  router.push({ name: "CourseDetail", params: { id } });
};
onMounted(() => {
  postBannerList().then(data => {
    swipe.value = data;
  });
  getHomeCourse().then(data => {
    courses.value = data;
  });
});
</script>

<style scoped lang="less">
.logo {
  padding: 15px;
  // height: 30px;
  display: flex;
  align-items: center;
}
.logo img {
  height: 25px;
}
.menu-item {
  flex: 2;
}
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
</style>
