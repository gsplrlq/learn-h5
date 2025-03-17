<template>
  <div class="package">
    <van-card
      :thumb="packageData.imageUrl"
      :title="packageData.title"
      class="package-info"
      :price="packageData.amount"
    >
      <template #title>
        <div class="package-title">{{ packageData.title }}</div>
      </template>
      <template #tags>
        <van-tag type="primary" class="mr-2">{{
          packageData.categoryPName
        }}</van-tag>
        <van-tag type="primary" class="mr-2">{{
          packageData.categoryName
        }}</van-tag>
      </template>
    </van-card>

    <van-tabs v-model="activeTab" class="pb-12" sticky>
      <van-tab title="简介">
        <div v-richText="packageData.details" class="m-2" />
      </van-tab>
      <van-tab title="课程">
        <van-row gutter="20">
          <van-col
            v-for="course in packageData.courseList"
            :key="course.id"
            span="24"
          >
            <van-card
              style="background-color: white"
              class="mb-2"
              :thumb="course.imgUrl"
              :title="course.name"
              @click="router.push({ path: `/course/${course.id}` })"
            >
              <template #thumb>
                <img :src="course.imgUrl" style="height: 90px" />
              </template>
            </van-card>
          </van-col>
        </van-row>
        <div v-if="packageData.courseList.length === 0" class="p-4">
          暂无课程
        </div>
      </van-tab>
      <van-tab title="考试">
        <van-cell
          v-for="exam in packageData.examList"
          :key="exam.id"
          :title="`${exam.name}`"
          :label="`开始: ${exam.startTime || '无'} 结束: ${exam.endTime || '无'}`"
        />
        <div v-if="packageData.examList.length === 0" class="p-4">暂无考试</div>
      </van-tab>
    </van-tabs>

    <van-action-bar>
      <van-action-bar-button
        v-if="!packageData.bought"
        type="danger"
        text="立即购买"
        @click="toPay"
      />
      <van-action-bar-button v-else type="danger" disabled text="已购买" />
    </van-action-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getTrainDetail } from "@/api/lesson";
import { showToast } from "vant";

const route = useRoute();
const router = useRouter();

interface PackageData {
  imageUrl: string;
  title: string;
  amount: number;
  categoryPName: string;
  categoryName: string;
  details: string;
  courseList: Array<any>;
  examList: Array<any>;
  bought: boolean;
  id: number;
}

let packageData = ref<PackageData>({
  imageUrl: "",
  title: "",
  amount: 0,
  categoryPName: "",
  categoryName: "",
  details: "",
  courseList: [],
  examList: [],
  bought: false,
  id: 0
});
const activeTab = ref(0);

const toPay = () => {
  showToast("支付功能暂未开放...");
  // router.push(`/order/confirm/${packageData.value.id}/2`);
};

onMounted(async () => {
  const packageId: any = route.params.id;

  packageData.value = await getTrainDetail(packageId);
});
</script>

<style scoped>
.package-title {
  font-size: 20px;
  font-weight: bold;
}

h1 {
  color: #333;
}
</style>
