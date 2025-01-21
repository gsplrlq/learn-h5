<template>
  <!-- <van-pull-refresh v-model:loading="loading" @refresh="onRefresh"> -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell-group>
      <van-cell
        v-for="exam in exams"
        :key="exam.id"
        :title="`${exam.examType === 'trainingPackage' ? '套餐' : '公开'}: ${exam.examName}`"
        :label="`${exam.examType === 'trainingPackage' ? '所属套餐: ' + exam.trainingPackageName + ' ' : ''}成绩: ${exam.scores} 结果: ${exam.examResult === 'qualified' ? '合格' : '不合格'} 时间: ${exam.createTime}`"
      >
        <template #right-icon>
          <van-button type="primary" size="small" @click="viewExam(exam.id)"
            >查看考试</van-button
          >
        </template>
      </van-cell>
    </van-cell-group>
  </van-list>
  <!-- </van-pull-refresh> -->
</template>

<script>
import { ref } from "vue";
import { getUserExam } from "@/api/user"; // Adjust the import according to your project structure
import { useRouter } from "vue-router";

export default {
  name: "ExamList",
  setup() {
    const exams = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const page = ref(0);
    const router = useRouter();

    const fetchExams = async () => {
      try {
        const data = await getUserExam({
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

    // const onRefresh = () => {
    //   loading.value = true;
    //   page.value = 1;
    //   fetchExams();
    // };

    const onLoad = () => {
      page.value += 1;
      fetchExams();
    };
    const viewExam = examId => {
      // Assuming you are using Vue Router
      router.push({ name: "ExamDetail", params: { id: examId } });
    };

    return {
      exams,
      loading,
      finished,
      // onRefresh,
      onLoad,
      viewExam
    };
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
