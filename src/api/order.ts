import { http } from "@/utils/http";

// 订单列表
export function getOrderList(data: object): Promise<any> {
  return http.request({
    url: "/client/orders/page",
    method: "post",
    data
  });
}

// 订单详情
export function getOrderInfo(orderSn: string): Promise<any> {
  return http.request({
    url: `/client/orders/details/${orderSn}`,
    method: "get"
  });
}

// 创建订单
export function createOrder(data: object): Promise<any> {
  return http.request({
    url: "/client/orders/create",
    method: "post",
    data
  });
}

// 取消订单
export function cancelOrder(data: object): Promise<any> {
  return http.request({
    url: "/client/orders/cancel",
    method: "post",
    data
  });
}

// 删除订单
export function deleteOrder(data: object): Promise<any> {
  return http.request({
    url: "/client/orders/delete",
    method: "post",
    data
  });
}

// 获取支付链接
export function getPayUrl(data: object): Promise<any> {
  return http.request({
    url: "/client/pay/getPayUrl",
    method: "post",
    data
  });
}

// 查询订单支付结果
export function getPayResult(data: object): Promise<any> {
  return http.request({
    url: "/client/pay/getPayResult",
    method: "post",
    data
  });
}
