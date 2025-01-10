<template>
  <div>
    <van-tabs
      v-model="activeTab"
      sticky
      offset-top="50"
      @click-tab="onTabClick"
    >
      <van-tab
        v-for="tab in tabList"
        :key="tab.id"
        :title="tab.title"
        :name="tab.status"
      >
        <div v-for="order in orders" :key="order.id" class="order-card">
          <van-card
            :thumb="order.productImageUrl"
            thumb-width="160"
            thumb-height="90"
            :title="`订单编号： ${order.orderSn}`"
            :desc="`${order.productName} | 日期: ${order.createTime}`"
            :price="order.amount"
            :status="order.status"
          >
            <template #footer>
              <button v-if="order.status == 1" @click="payOrder(order.orderSn)">
                立即支付
              </button>
              <button
                v-if="order.status == 1"
                @click="cancelOrderClick(order.orderSn)"
              >
                取消订单
              </button>
              <span>{{ order.status == 2 ? "已完成" : "已关闭" }}</span>
            </template>
          </van-card>
        </div>

        <div v-if="orders.length === 0" class="no-orders">暂无订单</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { Tab, Tabs, Card } from "vant";
import { getOrderList, cancelOrder } from "@/api/order"; // Adjust the import according to your project structure
import { useRouter } from "vue-router";
export default {
  components: {
    "van-tab": Tab,
    "van-tabs": Tabs,
    "van-card": Card
  },
  setup() {
    const activeTab = ref(0);
    const tabList = [
      { id: 1, title: "全部", status: "" },
      { id: 2, title: "未支付", status: 1 },
      { id: 3, title: "已完成", status: 2 },
      { id: 4, title: "已关闭", status: 3 }
    ];
    const orders = ref([]);

    const onTabClick = tab => {
      activeTab.value = tab.name;
      getOrderListData(tab.name);
    };
    const getOrderListData = status => {
      // Fetch order list data based on status
      const params = {
        page: {
          current: 1,
          size: 999
        },
        status
      };
      getOrderList(params).then(data => {
        orders.value = data.records;
      });
    };

    onMounted(() => {
      getOrderListData(tabList[0].status);
    });

    const payOrder = orderSn => {
      // Implement payment logic
      const router = useRouter();
      router.push({ name: "PaymentPage", params: { orderSn } });
    };
    const cancelOrderClick = orderSn => {
      cancelOrder(orderSn).then(() => {
        this.$toast.success("取消成功");
        getOrderListData(tabList[0].status);
      });
    };
    return {
      activeTab,
      tabList,
      orders,
      onTabClick,
      payOrder,
      cancelOrderClick
    };
  }
};
</script>
<style scoped>
.order-card {
  margin-bottom: 16px;
}
.no-orders {
  padding: 20px;
}
</style>
