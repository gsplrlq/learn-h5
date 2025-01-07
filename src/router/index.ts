import {
  createRouter,
  createWebHashHistory,
  type RouteLocationNormalized
} from "vue-router";
import routes from "./routes";
import { useCachedViewStoreHook } from "@/store/modules/cached-view";
import NProgress from "@/utils/progress";
import setPageTitle from "@/utils/set-page-title";
import { useAuthStore } from "@/store/modules/auth";

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string;
    noCache?: boolean;
    requireAuth?: boolean;
  };
}

router.beforeEach((to: toRouteType, from, next) => {
  NProgress.start();
  // 路由缓存
  useCachedViewStoreHook().addCachedView(to);
  // 页面 title
  setPageTitle(to.meta.title);

  const authStore = useAuthStore();
  if (to.meta.requireAuth && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    next("/login");
    return;
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
