<template>
  <div class="sign-in-page">
    <header class="mb-4">
      <van-image class="logo" height="40" :src="logo" />
      <van-image class="logo" height="40" :src="logoText" />
    </header>
    <van-nav-bar title="满意度测评" />
    <van-form v-if="!success" label-align="top" @submit="onSubmit">
      <van-cell-group>
        <van-cell title="课程名称" :value="courseName" />
        <van-cell title="培训名称" :value="trainingCourseName" />
        <van-field
          v-model="evaluationForm.mobile"
          label="手机号"
          placeholder="请输入手机号"
          :rules="rules['mobile']"
        />
        <div v-for="item in formList" :key="item.prop">
          <van-field :label="item.label" name="radio" :rules="rules[item.prop]">
            <template #input>
              <van-radio-group
                v-model="evaluationForm[item.prop]"
                @change="contentChange(evaluationForm[item.prop], item.prop2)"
              >
                <van-radio
                  v-for="r in ratingArr"
                  :key="r"
                  :name="r"
                  class="mb-2"
                  >{{ r }}</van-radio
                >
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            v-if="ValidityShow(evaluationForm[item.prop])"
            v-model="evaluationForm[item.prop2]"
            :label="`请填写理由和建议：`"
            :prop="item.prop2"
            type="textarea"
            rows="2"
            autosize
            :rules="rules[item.prop2]"
          />
        </div>
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
      提交成功
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getSignIn, submitEvaluation, validateEvaluation } from "@/api/lesson";
import { Toast } from "vant";
import logo from "@/assets/images/favicon.ico";
import logoText from "@/assets/images/logo_text.png";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const courseName = ref("");
    const trainingCourseName = ref("");
    const success = ref(false);
    const validatorMobile = value => {
      if (!value) {
        return "请输入手机号";
      }
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return "手机号格式错误";
      }
      validateEvaluation({
        trainingCourseId: route.params.id,
        mobile: value
      }).then(res => {
        if (res.data) {
          return "该手机号已提交过测评";
        } else {
          return true;
        }
      });
    };
    const formList = [
      {
        label: "1. 本次培训课程内容，符合岗位技能需求，针对性强：",
        prop: "content1",
        prop2: "content1Suggestion"
      },
      {
        label: "2. 培训教师专业水平高，对教学内容阐述明确、具体、完整：",
        prop: "content2",
        prop2: "content2Suggestion"
      },
      {
        label: "3. 实训指导教师实操技能强，实训指导方法灵活：",
        prop: "content3",
        prop2: "content3Suggestion"
      },
      {
        label: "4. 有与培训规模相适应的理论教室、实训场地及设施设备：",
        prop: "content4",
        prop2: "content4Suggestion"
      },
      {
        label: "5. 培训机构的培训过程管理工作规范，要求严格：",
        prop: "content5",
        prop2: "content5Suggestion"
      },
      {
        label: "6. 培训时间和培训方式安排合理：",
        prop: "content6",
        prop2: "content6Suggestion"
      },
      {
        label: "7. 能够按照培训计划安排的内容和课时进行教学：",
        prop: "content7",
        prop2: "content7Suggestion"
      },
      {
        label: "8. 通过培训提高了技能，对你今后的工作有较大的帮助：",
        prop: "content8",
        prop2: "content8Suggestion"
      },
      {
        label: "9. 你对本次培训的总体评价：",
        prop: "content9",
        prop2: "content9Suggestion"
      }
    ];
    const evaluationForm = reactive({
      mobile: "",
      content1: "",
      content2: "",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
      content7: "",
      content8: "",
      content9: "",
      content1Suggestion: "",
      content2Suggestion: "",
      content3Suggestion: "",
      content4Suggestion: "",
      content5Suggestion: "",
      content6Suggestion: "",
      content7Suggestion: "",
      content8Suggestion: "",
      content9Suggestion: ""
    });
    const rules = reactive({
      mobile: [{ validator: validatorMobile }],
      content1: [{ required: true, message: "请选择评价", trigger: "change" }],
      content2: [{ required: true, message: "请选择评价", trigger: "change" }],
      content3: [{ required: true, message: "请选择评价", trigger: "change" }],
      content4: [{ required: true, message: "请选择评价", trigger: "change" }],
      content5: [{ required: true, message: "请选择评价", trigger: "change" }],
      content6: [{ required: true, message: "请选择评价", trigger: "change" }],
      content7: [{ required: true, message: "请选择评价", trigger: "change" }],
      content8: [{ required: true, message: "请选择评价", trigger: "change" }],
      content9: [{ required: true, message: "请选择评价", trigger: "change" }],
      content1Suggestion: [],
      content2Suggestion: [],
      content3Suggestion: [],
      content4Suggestion: [],
      content5Suggestion: [],
      content6Suggestion: [],
      content7Suggestion: [],
      content8Suggestion: [],
      content9Suggestion: []
    });
    const ratingArr = ["满意", "比较满意", "一般", "比较不满意", "不满意"];

    const onSubmit = () => {
      submitEvaluation({
        trainingCourseId: route.params.id,
        ...evaluationForm
      }).then(() => {
        success.value = true;
        Toast.success("测评成功");
      });
    };

    const ValidityShow = field => {
      return field && field.includes("不满意");
    };
    const contentChange = (val, prop) => {
      evaluationForm[prop] = "";

      if (val && val.includes("不满意")) {
        rules[prop] = [
          { required: true, message: "请填写理由和建议", trigger: "change" }
        ];
      } else {
        rules[prop] = [];
      }
    };

    onMounted(() => {
      getSignIn(route.params.id).then(data => {
        courseName.value = data.courseName;
        trainingCourseName.value = data.trainingCourseName;
      });
    });

    return {
      logo,
      logoText,
      courseName,
      trainingCourseName,
      formList,
      rules,
      evaluationForm,
      ratingArr,
      success,
      onSubmit,
      validatorMobile,
      ValidityShow,
      contentChange
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
