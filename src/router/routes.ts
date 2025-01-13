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
      }
    ]
  }
];

export default routes;
