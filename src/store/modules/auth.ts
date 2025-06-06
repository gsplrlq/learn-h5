import { defineStore } from "pinia";

import router from "@/router";
import { store } from "@/store";

import { userLogin, userRegister } from "@/api/login";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null
  }),
  actions: {
    async login(params, isRegister) {
      try {
        const user = isRegister
          ? await userRegister(params)
          : await userLogin(params);

        // update pinia state
        this.user = user;

        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));

        // redirect to previous url or default to home page
        router.push(this.returnUrl || "/");
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/login");
    }
  }
});

export function useAuthStoreHook() {
  return useAuthStore(store);
}
