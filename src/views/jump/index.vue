<template>
  <div class="jump-page">
    <van-button type="primary" block @click="openInBrowser">
      点击跳转到默认浏览器
    </van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { showToast } from "vant";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "JumpPage",
  setup() {
    const route = useRoute();

    const isWeChat = (): boolean => {
      const ua = window.navigator.userAgent.toLowerCase();
      return ua.includes("micromessenger");
    };

    const openInBrowser = (): void => {
      const url: string = Array.isArray(route.query.url)
        ? route.query.url[0]
        : route.query.url || ""; // 获取目标链接
      if (!url) {
        showToast("未找到跳转链接");
        return;
      }
      if (isWeChat()) {
        showToast("请点击右上角菜单，在浏览器中打开");
      } else {
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.click();
      }
    };

    return {
      openInBrowser
    };
  }
});
</script>

<style scoped>
.jump-page {
  padding: 20px;
}
</style>
