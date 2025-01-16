<template>
  <van-card
    style="background-color: white"
    class="mb-2"
    :thumb="package.imageUrl"
    :title="package.title"
    :desc="package.overview"
    :price="package.amount"
    centered
    @click="goToPackage(package.id)"
  >
    <template #thumb>
      <img :src="package.imageUrl" style="height: 90px" />
    </template>
    <template #tags>
      <van-tag type="primary" class="mr-4">{{ package.categoryPName }}</van-tag>
      <van-tag type="primary">{{ package.categoryName }}</van-tag>
    </template>
  </van-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Card, Tag } from "vant";

interface Package {
  imageUrl: string;
  title: string;
  overview: string;
  amount: string;
  id: number;
  categoryPName: string;
  categoryName: string;
}

export default defineComponent({
  name: "PackageCard",
  components: {
    "van-card": Card,
    "van-tag": Tag
  },
  props: {
    package: {
      type: Object as PropType<Package>,
      required: true,
      default: () => ({
        imageUrl: "",
        title: "",
        overview: "",
        amount: "",
        id: "",
        categoryPName: "",
        categoryName: ""
      })
    }
  },
  methods: {
    buyPackage() {
      // 购买逻辑
      console.log("购买套餐");
    },
    goToPackage(packageId: number) {
      // 跳转到套餐详情页的逻辑
      console.log(`跳转到套餐详情页: ${packageId}`);
    }
  }
});
</script>

<style scoped></style>
