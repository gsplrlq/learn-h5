<template>
  <div class="pay-page">
    <van-nav-bar title="支付中心" />
    <van-cell-group class="mb-4">
      <van-cell title="订单号" :label="orderSn" />
      <van-cell title="应付金额" :label="orderInfo.amount" />
      <van-cell title="支付方式" />
      <van-radio-group v-model="paymentMethod">
        <van-radio class="p-4" name="ali">支付宝</van-radio>
        <van-radio class="p-4" name="wechat">微信支付</van-radio>
      </van-radio-group>
    </van-cell-group>
    <div class="p-4">
      <van-button
        class="w-full"
        type="primary"
        text="确认支付"
        round
        @click="handlePayment"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { showToast } from "vant";
import { useRoute, useRouter } from "vue-router";
import { getOrderInfo, getPayUrl, getPayResult } from "@/api/order"; // Adjust the import path as necessary

export default defineComponent({
  name: "PayPage",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const orderSn: any = route.params.orderSn;
    const orderInfo = ref<any>({});
    const paymentMethod = ref<string>("ali");

    const handlePayment = () => {
      if (!paymentMethod.value) {
        showToast("请选择支付方式");
        return;
      }

      getPayUrl({
        orderSn: orderSn,
        payType: paymentMethod.value
      }).then(data => {
        if (paymentMethod.value === "ali") {
          showToast("正在使用支付宝支付...");
          const form = document.createElement("form");
          form.method = "POST";
          form.action = data;
          form.style.display = "none";

          document.body.appendChild(form);
          form.submit();

          // window.location.href = data; // Redirect to Alipay URL
        } else if (paymentMethod.value === "wechat") {
          showToast("正在使用微信支付...");
          window.location.href = data; // Redirect to Alipay URL
          // Add WeChat payment logic here
        }

        // Polling for payment result
        const timer = setInterval(() => {
          getPayResult({
            orderSn: orderSn,
            payType: paymentMethod.value
          }).then(data => {
            if (data.paySuccess) {
              clearInterval(timer);
              showToast("支付成功");
              router.replace("/my/order");
              // Redirect to payment success page
            }
          });
        }, 3000);
      });
    };

    onMounted(async () => {
      orderInfo.value = await getOrderInfo(orderSn);
      // Add logic to get order info
    });

    return {
      orderSn,
      orderInfo,
      paymentMethod,
      handlePayment
    };
  }
});
</script>

<style scoped>
.pay-page {
  padding: 16px;
}
</style>
