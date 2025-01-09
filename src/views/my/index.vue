<script setup lang="ts">
import { reactive } from "vue";
import { useAuthStore } from "@/store/modules/auth";

defineOptions({
  name: "My"
});

const data = reactive({
  avatar: useAuthStore().user.avatar || "https://avatars.githubusercontent.com/u/40857942?v=4",
  nickName: useAuthStore().user.nickName || ""
});

const listData = reactive([
  {
    icon: "hugeicons:online-learning-01",
    title: "我的课程",
    to: {
      name: "Course"
    }
  },
  {
    icon: "lets-icons:order",
    title: "订单中心",
    to: {
      name: "Tools"
    }
  },
  {
    icon: "ic:baseline-dvr",
    title: "我的考试",
    to: {
      name: "My"
    }
  },
  {
    icon: "ic:round-card-membership",
    title: "我的证书",
    to: {
      name: "My"
    }
  },
  {
    icon: "ic:round-event-note",
    title: "我的笔记",
    to: {
      name: "My"
    }
  }
]);

const lgout = () => {
  useAuthStore().logout();
};
</script>

<template>
  <div class="bg-slate-600 p-6 flex items-center mb-8">
    <img class="mr-4 h-20 rounded-full" :src="data.avatar" alt="" srcset="" />
    <div class="text-white text-2xl">{{ data.nickName }}</div>
  </div>

  <van-cell-group class="mb-8">
    <van-cell
      v-for="(item, index) in listData"
      :key="index"
      size="large"
      :icon="item.icon"
      :title="item.title"
      is-link
      :to="item.to"
    >
      <template #icon>
        <i-icon :icon="item.icon" class="mr-4 text-2xl" />
      </template>
    </van-cell>
  </van-cell-group>

  <div class="w-full flex justify-center">
    <van-button class="w-80" round type="danger" @click="lgout"
      >退出登录</van-button
    >
  </div>
</template>

<style lang="less" scoped>
.head {
  background-color: #33384a;
}
</style>
