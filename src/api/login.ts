import { http } from "@/utils/http";

type Result = {
  code: number;
  message: string;
  data: any;
};

// 获取验证码
export function upload(data?: object): Promise<Result> {
  return http.request({
    url: "/client/fileTable/uploadSign",
    method: "post",
    data
  });
}

// 获取验证码
export function sendSmsCode(data?: object): Promise<Result> {
  return http.request({
    url: "/public/base/smscode/send",
    method: "post",
    data
  });
}
// 验证验证码
export function verifySmsCode(params?: object): Promise<Result> {
  return http.request({
    url: "/public/base/smscode/verifySmsCode",
    method: "post",
    params
  });
}

// 用户登录
export function userLogin(data?: object): Promise<Result> {
  return http.request({
    url: "/client/user/public/login",
    method: "post",
    data
  });
}
// 用户注册接口
export function userRegister(data?: object): Promise<Result> {
  return http.request({
    url: "/client/user/public/register",
    method: "post",
    data
  });
}

export function getUserInfo(): Promise<Result> {
  return http.request({
    url: "/client/user/user/getUserInfo",
    method: "get"
  });
}
