<template>
  <div class="confirm-order">
    <van-card
      num="1"
      :price="lessonDetail.price"
      :title="lessonDetail.title"
      :thumb="lessonDetail.imgUrl"
    />
    <van-cell-group class="mt-4">
      <van-cell title="商品总金额" :value="lessonDetail.price" />
      <van-cell title="应付" :value="lessonDetail.price" />
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
import { getLessonDetail } from "@/api/lesson";
import { showToast } from "vant";

export default defineComponent({
  name: "ConfirmOrder",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const lessonDetail = ref<any>({});

    const fetchLessonDetail = async () => {
      try {
        const courseId = route.params.courseId;
        const data = await getLessonDetail(courseId);
        lessonDetail.value = data;
      } catch (error) {
        showToast("获取课程详情失败");
      }
    };

    const onCreateOrder = async () => {
      try {
        const data = await createOrder({
          type: route.params.type,
          linkId: lessonDetail.value.id
        });
        showToast("订单创建成功");
        router.push(`/order/pay/${data.orderSn}`); // Adjust the route as necessary
      } catch (error) {
        showToast("订单创建失败");
      }
    };

    onMounted(() => {
      fetchLessonDetail();
    });

    return {
      lessonDetail,
      onCreateOrder
    };
  }
});
</script>

<style scoped></style>
