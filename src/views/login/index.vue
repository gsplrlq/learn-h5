<script setup lang="ts">
import { ref } from "vue";
import { showToast } from "vant";
import { sendSmsCode, userLogin, userRegister } from "@/api/login";

defineOptions({
  name: "Login"
});

// 是否注册
const isRegister = ref(false);
// 是否验证码登录
const isCode = ref(false);
const username = ref("");
const password = ref("");
const code = ref("");

let totalSecond = ref(60);
let second = ref(60);
let timer = ref(null);

const getCode = async () => {
  // 当前目前没有定时器开着，且 totalSecond 和 second 一致 (秒数归位) 才可以倒计时
  if (!timer.value && second.value === totalSecond.value) {
    // 发送请求，获取验证码
    const params = {
      option: isRegister.value ? 1 : 2,
      phone: username.value,
      type: "client"
    };
    await sendSmsCode(params);
    showToast("发送成功");
    // 开启倒计时
    timer.value = setInterval(() => {
      second.value--;

      if (second.value <= 0) {
        clearInterval(timer.value);
        timer.value = null; // 重置定时器 id
        second.value = totalSecond.value; // 归位
      }
    }, 1000);
  }
};

const onSubmit = values => {
  console.log("submit", values);
};
</script>

<template>
  <div class="container">
    <img class="logo" src="@/assets/images/favicon.ico" alt="" srcset="" />

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-if="!isCode"
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-else
          v-model="code"
          clearable
          name="验证码"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #button>
            <van-button
              size="small"
              :disabled="!username || second !== totalSecond"
              @click="getCode"
              >{{
                second === totalSecond ? "获取验证码" : second + `s 重新发送`
              }}</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
      <div class="m-6">
        <van-button round block type="danger" native-type="submit">
          登录
        </van-button>
        <div
          class="text-center text-xl text-current p-6"
          @click="isCode = !isCode"
        >
          {{ isCode ? "账号密码登录" : "手机短信登录" }}
        </div>
        <div class="text-center text-large text-red-500 p-6">快速注册</div>
      </div>
    </van-form>
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  background: #fff url(@/assets/images/bg.png) no-repeat top center;
  background-size: 100% auto;
  padding: 15px;
  .logo {
    height: 40px;
    margin: 40px auto;
  }
}
</style>
