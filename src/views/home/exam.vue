<template>
  <div>
    <div v-if="isLoggedIn">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="exam in exams" :key="exam.id" :title="exam.name">
          <template #label>
            <div>剩余次数: {{ exam.remainderExamCount }}</div>
            <div v-if="exam.openingTime">
              时间：{{ exam.openingTime }} 至 {{ exam.closeTime }}
            </div>
            <div>时长: {{ exam.duration }} 分钟</div>
            <div>
              总分: {{ exam.totalScores }} | 及格分: {{ exam.passScores }}
            </div>
            <div v-if="exam.courseName" class="trainingPackage">
              所属课程: {{ exam.courseName }}
            </div>
            <van-button
              v-if="exam.passFlag"
              type="success"
              size="small"
              style="float: right"
              text="考试已通过"
            />
            <van-button
              v-else-if="exam.examFlag == 'yes'"
              type="primary"
              size="small"
              style="float: right"
              text="开始考试"
              @click="startExam(exam.id)"
            />
            <van-button
              v-else
              type="default"
              size="small"
              style="float: right"
              disabled
              text="无法考试"
            />
          </template>
        </van-cell>
        <template v-if="exams.length === 0">
          <van-empty description="暂无数据" />
        </template>
      </van-list>
    </div>
    <van-empty v-else description="请先登录" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { List, Cell, Empty } from "vant";
import { useAuthStore } from "@/store/modules/auth";
import { getExamList, getInformationCollStatus } from "@/api/exam";
import { showToast } from "vant";

export default defineComponent({
  name: "ExamList",
  components: {
    "van-list": List,
    "van-cell": Cell,
    "van-empty": Empty
  },
  setup() {
    const router = useRouter();
    const isLoggedIn = ref(false);
    const exams = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const page = ref(0);
    const infoStatus = ref(false); // User information status

    onMounted(() => {
      // Check if the user is logged in
      isLoggedIn.value = checkLoginStatus();
      if (!isLoggedIn.value) {
        router.push("/login"); // Redirect to login page if not logged in
      }

      getInformationCollStatus().then(data => {
        infoStatus.value = data;
        if (!infoStatus.value) {
          showToast("用户信息不完善, 请在网页端完善用户信息。");

          // this.$confirm("用户信息不完善, 是否跳转并完善用户信息?", "提示", {
          //   confirmButtonText: "确定",
          //   cancelButtonText: "取消",
          //   type: "warning"
          // })
          //   .then(() => {
          //     this.$router.push({ path: "/user" });
          //   })
        }
      });
    });

    const checkLoginStatus = (): boolean => {
      // Implement your login check logic here
      const authStore = useAuthStore();
      const fleg = !!authStore.user;
      return fleg; // Placeholder, replace with actual login check
    };

    const fetchExams = async () => {
      try {
        const data = await getExamList({
          status: 1,
          page: {
            size: 10,
            current: page.value
          }
        });
        if (page.value === 1) {
          exams.value = data.records;
        } else {
          exams.value = exams.value.concat(data.records);
        }
        finished.value = data.records.length < 10;
      } catch (error) {
        console.error("Failed to fetch exams:", error);
      } finally {
        loading.value = false;
      }
    };

    const onLoad = () => {
      page.value += 1;
      fetchExams();
    };

    const startExam = (examId: number) => {
      if (!infoStatus.value) {
        showToast("用户信息不完善, 请在网页端完善用户信息。");
        return;
      }
      // Implement your start exam logic here
      router.push(`/exam/${examId}`);
      console.log(`Starting exam with ID: ${examId}`);
    };

    return {
      isLoggedIn,
      exams,
      loading,
      finished,
      onLoad,
      startExam
    };
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
