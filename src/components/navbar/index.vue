<script setup lang="ts">
import { computed } from "vue";

interface Props {
  title: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: ""
});

const title = computed(() => {
  return props.title ? props.title : "";
});

const onClickLeft = () => history.back();
</script>

<template>
  <van-nav-bar
    :title="title"
    fixed
    placeholder
    left-arrow
    @click-left="onClickLeft"
  >
    <template #right />
  </van-nav-bar>
</template>

<style scoped></style>
