<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const title = router.currentRoute.value.meta.title as string;
const onClickLeft = () => history.back();
</script>

<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    fixed
    left-arrow
    placeholder
    @click-left="onClickLeft"
  />
</template>

<style scoped></style>
