import { http } from "@/utils/http";

// 获取用户课程信息接口
export function getUserCourse(data?: object): Promise<any> {
  return http.request({
    url: "/client/course/owner/page",
    method: "post",
    data
  });
}

// 获取用户考试信息接口
export function getUserExam(data?: object): Promise<any> {
  return http.request({
    url: "/client/userExam/page",
    method: "post",
    data
  });
}

// 获取用户证书信息接口
export function getUserCertificateInfo(data?: object): Promise<any> {
  return http.request({
    url: "/client/userCertificateInfo/page",
    method: "post",
    data
  });
}

// 获取用户笔记信息接口
export function getCourseNote(data?: object): Promise<any> {
  return http.request({
    url: "/client/courseNote/page",
    method: "post",
    data
  });
}
