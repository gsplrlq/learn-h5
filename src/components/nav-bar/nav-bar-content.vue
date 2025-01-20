<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const title = router.currentRoute.value.meta.title as string;
const onClickLeft = () => history.back();
const onClickRight = () => router.push("/");
</script>

<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    right-text="首页"
    fixed
    left-arrow
    placeholder
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<style scoped></style>
