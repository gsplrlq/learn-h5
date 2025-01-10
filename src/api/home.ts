import { http } from "@/utils/http";

export function postBannerList(): Promise<any> {
  return http.request({
    url: "/public/client/banner/list",
    method: "post"
  });
}

export function getHomeCourse(): Promise<any> {
  return http.request({
    url: "/public/client/course/main/list",
    method: "post"
  });
}
