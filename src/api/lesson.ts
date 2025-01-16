import { http } from "@/utils/http";

// 课程导航
export function getLessonNav(): Promise<any> {
  return http.request({
    url: "/client/category/list",
    method: "get"
  });
}

// 课程列表
export function getLessonList(data: object): Promise<any> {
  return http.request({
    url: "/public/client/course/page",
    method: "post",
    data
  });
}

// 课程详情
export function getLessonDetail(id: string): Promise<any> {
  return http.request({
    url: `/public/client/course/details/${id}`,
    method: "get"
  });
}

// 课程章节
export function getLessonChapter(data: object): Promise<any> {
  return http.request({
    url: "/client/chapter/list",
    method: "post",
    data
  });
}

// 课程章节 - 视频播放凭证
export function getVideoAuth(data: object): Promise<any> {
  return http.request({
    url: "/client/fileTable/video/auth",
    method: "post",
    data
  });
}

// 课程章节 - 视频历史记录
export function createStudyHistory(data: object): Promise<any> {
  return http.request({
    url: "/client/studyHistory/createOrUpdate",
    method: "post",
    data
  });
}

// 课程问答
export function getLessonQa(data: object): Promise<any> {
  return http.request({
    url: "/public/client/courseQuestionAnswer/page",
    method: "post",
    data
  });
}

export function getLessonQaCreate(data: object): Promise<any> {
  return http.request({
    url: "/client/courseQuestionAnswer/create",
    method: "post",
    data
  });
}

// 课程笔记
export function getLessonNote(data: object): Promise<any> {
  return http.request({
    url: "/public/client/courseNote/page",
    method: "post",
    data
  });
}

export function getLessonNoteCreate(data: object): Promise<any> {
  return http.request({
    url: "/client/courseNote/create",
    method: "post",
    data
  });
}

// 课程评价
export function getLessoEvaluate(data: object): Promise<any> {
  return http.request({
    url: "/public/client/courseEvaluate/page",
    method: "post",
    data
  });
}

export function getLessoEvaluateCreate(data: object): Promise<any> {
  return http.request({
    url: "/client/courseEvaluate/create",
    method: "post",
    data
  });
}

// 培训套餐
export function getTrainList(data: object): Promise<any> {
  return http.request({
    url: "/public/client/trainingPackage/page",
    method: "post",
    data
  });
}
export function getTrainDetail(id: string): Promise<any> {
  return http.request({
    url: `/public/client/trainingPackage/details/${id}`,
    method: "get"
  });
}