<template>
  <div
    class="header"
    style="position: sticky; top: 0; z-index: 1000; background-color: white"
  >
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

  <component :is="activeComponent" />
</template>

<script setup lang="ts">
import { computed, ref, shallowRef } from "vue";
import Home from "./home.vue";
import Course from "./course.vue";
defineOptions({
  name: "Index"
});

const active = ref(0);
const activeComponent = computed(() => menu.value[active.value].component);
const menu = shallowRef([
  { title: "首页", name: "index", component: Home },
  { title: "免费课", name: "free", component: Course },
  { title: "付费课", name: "paid", component: Course },
  { title: "培训套餐", name: "package", component: Home },
  { title: "在线考试", name: "exam", component: Home }
]);
</script>

<style scoped lang="less">
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
