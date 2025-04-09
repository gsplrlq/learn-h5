import Layout from "@/layout/index.vue";
import LayoutContent from "@/layout/LayoutContent.vue";

import type { RouteRecordRaw } from "vue-router";
import Index from "@/views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Index" },
    children: [
      {
        path: "index",
        name: "Index",
        component: Index,
        meta: {
          title: "主页"
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具"
        }
      },
      {
        path: "my",
        name: "My",
        component: () => import("@/views/my/index.vue"),
        meta: {
          title: "我的",
          noCache: true,
          requireAuth: true
        }
      }
    ]
  },
  {
    path: "/",
    name: "content",
    component: LayoutContent,
    children: [
      {
        path: "my/course",
        name: "MyCourse",
        component: () => import("@/views/my/course.vue"),
        meta: {
          title: "我的课程",
          requireAuth: true
        }
      },
      {
        path: "my/order",
        name: "MyOrder",
        component: () => import("@/views/my/order.vue"),
        meta: {
          title: "订单中心",
          requireAuth: true
        }
      },
      {
        path: "my/exam",
        name: "MyExam",
        component: () => import("@/views/my/exam.vue"),
        meta: {
          title: "我的考试",
          requireAuth: true
        }
      },
      {
        path: "my/certificate",
        name: "MyCertificate",
        component: () => import("@/views/my/certificate.vue"),
        meta: {
          title: "我的证书",
          requireAuth: true
        }
      },
      {
        path: "my/note",
        name: "MyNote",
        component: () => import("@/views/my/note.vue"),
        meta: {
          title: "我的笔记",
          requireAuth: true
        }
      },

      {
        path: "course/:id",
        name: "Course",
        component: () => import("@/views/course/index.vue"),
        meta: {
          title: "课程详情"
        }
      },

      {
        path: "video/:courseId/:videoId",
        name: "Video",
        component: () => import("@/views/video/index.vue"),
        meta: {
          title: "视频详情"
        }
      },

      {
        path: "order/confirm/:courseId/:type",
        name: "OrderConfirm",
        component: () => import("@/views/order/confirm.vue"),
        meta: {
          title: "确认订单"
        }
      },
      {
        path: "order/pay/:orderSn",
        name: "OrderPay",
        component: () => import("@/views/order/pay.vue"),
        meta: {
          title: "订单详情"
        }
      },

      {
        path: "package/:id",
        name: "Package",
        component: () => import("@/views/package/index.vue"),
        meta: {
          title: "套餐详情"
        }
      },

      {
        path: "exam/:id",
        name: "Exam",
        component: () => import("@/views/exam/index.vue"),
        meta: {
          title: "考试"
        }
      },
      {
        path: "exam/detail/:id",
        name: "ExamDetail",
        component: () => import("@/views/exam/detail.vue"),
        meta: {
          title: "考试详情"
        }
      },
      {
        path: "exam/evaluation/:courseId",
        name: "ExamEvaluation",
        component: () => import("@/views/exam/evaluation.vue"),
        meta: {
          title: "满意度测评"
        }
      }
    ]
  },
  {
    path: "/sign-in/:id",
    name: "signIn",
    component: () => import("@/views/sign/index.vue"),
    meta: {
      title: "线下签到"
    }
  },
  {
    path: "/satisfaction/:id",
    name: "satisfaction",
    component: () => import("@/views/satisfaction/index.vue"),
    meta: {
      title: "满意度测评"
    }
  },
  {
    path: "/jump",
    name: "jump",
    component: () => import("@/views/jump/index.vue"),
    meta: {
      title: "跳转"
    }
  }
];

export default routes;
