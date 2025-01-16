import { http } from "@/utils/http";

// 在线考试
export function getExamList(data: object): Promise<any> {
  return http.request({
    url: "/client/examInfo/userExamList",
    method: "post",
    data
  });
}

export function getExamDetail(id: string): Promise<any> {
  return http.request({
    url: `/client/examInfo/startExam/${id}`,
    method: "get"
  });
}

export function putExam(data: object): Promise<any> {
  return http.request({
    url: "/client/examInfo/submit",
    method: "post",
    data
  });
}

export function getExamany(id: string): Promise<any> {
  return http.request({
    url: `/client/userExam/details/${id}`,
    method: "get"
  });
}