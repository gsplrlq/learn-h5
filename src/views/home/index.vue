<template>
  <div class="header sticky top-0 z-10 bg-white">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="Logo" />
      <img src="@/assets/images/logo_text.png" alt="Logo" />
    </div>
    <van-tabs v-model:active="active">
      <van-tab
        v-for="m in menu"
        :key="m.name"
        class="menu-item"
        :title="m.title"
      />
    </van-tabs>
  </div>

  <component :is="activeMenu.component" :type="activeMenu.type" />
</template>

<script setup lang="ts">
import { computed, ref, shallowRef } from "vue";
import Home from "./home.vue";
import Course from "./course.vue";
import Package from "./package.vue";
import Exam from "./exam.vue";

defineOptions({
  name: "Index"
});

const active = ref(0);
const activeMenu = computed(() => menu.value[active.value]);
const menu = shallowRef([
  { title: "首页", name: "index", component: Home },
  { title: "免费课", name: "free", component: Course, type: 1 },
  { title: "付费课", name: "paid", component: Course, type: 2 },
  { title: "培训套餐", name: "package", component: Package },
  { title: "在线考试", name: "exam", component: Exam }
]);
</script>

<style scoped lang="less">
.header {
  // height: 113px;
}
.logo {
  padding: 15px;
  display: flex;
  align-items: center;
}
.logo img {
  height: 25px;
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
