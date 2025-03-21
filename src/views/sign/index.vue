<template>
  <div class="sign-in-page">
    <header class="mb-4">
      <van-image class="logo" height="40" :src="logo" />
      <van-image class="logo" height="40" :src="logoText" />
    </header>
    <van-nav-bar :title="title" />
    <van-form v-if="!success" label-align="top" @submit="onSubmit">
      <van-cell-group>
        <van-cell title="课程名称" :value="courseName" />
        <van-cell title="培训名称" :value="trainingCourseName" />
        <van-field
          v-model="phoneNumber"
          label="手机号"
          placeholder="请输入签到手机号"
          :rules="[{ validator: validatorMobile }]"
        />
      </van-cell-group>
      <van-button type="primary" native-type="submit" block>提交</van-button>
    </van-form>

    <div
      v-else
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        color: #07c160;
        font-size: 30px;
      "
    >
      签到成功
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getSignIn, submitSignIn } from "@/api/lesson";
import { Toast } from "vant";
import logo from "@/assets/images/favicon.ico";
import logoText from "@/assets/images/logo_text.png";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const title = ref("");
    const courseName = ref("");
    const trainingCourseName = ref("");
    const phoneNumber = ref("");
    const success = ref(false);
    const validatorMobile = value => {
      if (!value) {
        return "请输入手机号";
      }
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return "手机号格式错误";
      }
      return true;
    };

    const onSubmit = () => {
      submitSignIn({
        trainingCourseId: route.params.id,
        mobile: phoneNumber.value
      }).then(() => {
        success.value = true;
        Toast.success("签到成功");
      });
    };

    onMounted(() => {
      getSignIn(route.params.id).then(data => {
        courseName.value = data.courseName;
        trainingCourseName.value = data.trainingCourseName;
        title.value =
          data.trainingCourseType == "course" ? "线下课程签到" : "考试签到";
      });
    });

    return {
      title,
      logo,
      logoText,
      courseName,
      trainingCourseName,
      phoneNumber,
      success,
      onSubmit,
      validatorMobile
    };
  }
};
</script>

<style scoped>
.sign-in-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.van-nav-bar {
  margin-bottom: 20px;
}

.van-cell-group {
  margin-bottom: 20px;
}

.van-button {
  margin-top: 20px;
}
</style>
