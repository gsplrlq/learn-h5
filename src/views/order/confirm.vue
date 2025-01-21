<template>
  <div class="confirm-order">
    <van-card
      num="1"
      :price="detail.price"
      :title="detail.title"
      :thumb="detail.imgUrl"
    />
    <van-cell-group class="mt-4">
      <van-cell title="商品总金额" :value="detail.price" />
      <van-cell title="应付" :value="detail.price" />
    </van-cell-group>
    <div class="p-4">
      <van-button
        class="w-full"
        type="primary"
        text="提交订单"
        round
        @click="onCreateOrder"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { createOrder } from "@/api/order"; // Adjust the import path as necessary
import { getLessonDetail, getTrainDetail } from "@/api/lesson";
import { showToast } from "vant";

export default defineComponent({
  name: "ConfirmOrder",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const detail = ref<any>({});

    const fetchLessonDetail = async () => {
      try {
        const courseId = route.params.courseId;
        const data = await getLessonDetail(courseId);
        detail.value = data;
      } catch (error) {
        showToast("获取课程详情失败");
      }
    };

    const fetchTrainDetail = async () => {
      try {
        const courseId = route.params.courseId;
        const data = await getTrainDetail(courseId);
        data.price = data.amount;
        data.imgUrl = data.imageUrl;
        detail.value = data;
      } catch (error) {
        showToast("获取套餐详情失败");
      }
    };

    const onCreateOrder = async () => {
      try {
        const data = await createOrder({
          type: route.params.type,
          linkId: detail.value.id
        });
        showToast("订单创建成功");
        router.push(`/order/pay/${data.orderSn}`); // Adjust the route as necessary
      } catch (error) {
        showToast("订单创建失败");
      }
    };

    onMounted(() => {
      const type = route.params.type;
      if (type === "1") {
        fetchLessonDetail();
      }
      if (type === "2") {
        fetchTrainDetail();
      }
    });

    return {
      detail,
      onCreateOrder
    };
  }
});
</script>

<style scoped></style>
