<template>
  <div class="exam">
    <div class="name">{{ examData.name }}</div>
    <div class="time">{{ examData.duration }}分钟</div>

    <template v-if="!result">
      <van-form class="list" label-position="top" :model="form">
        <template
          v-for="(item, index) in examData.singleChoiceList"
          :key="index"
        >
          <van-cell :title="`(单选) ${index + 1}: ${item.content}`" />
          <van-cell>
            <van-radio-group
              v-for="(q, qI) in item.questionOptions"
              :key="qI"
              v-model="form[item.id]"
              class="mb-2"
            >
              <van-radio :name="q.key">{{ q.key }}：{{ q.value }}</van-radio>
            </van-radio-group>
          </van-cell>
        </template>

        <template
          v-for="(item, index) in examData.multipleChoicesList"
          :key="examData.singleChoiceList.length + index"
        >
          <van-cell
            :title="`(多选) ${examData.singleChoiceList.length + index + 1}: ${item.content}`"
          />
          <van-cell>
            <van-checkbox-group v-model="form[item.id]" shape="square">
              <van-checkbox
                v-for="(q, qI) in item.questionOptions"
                :key="qI"
                class="mb-2"
                :name="q.key"
                >{{ q.key }}：{{ q.value }}</van-checkbox
              >
            </van-checkbox-group>
          </van-cell>
        </template>

        <template
          v-for="(item, index) in examData.judgmentList"
          :key="
            examData.singleChoiceList.length +
            examData.multipleChoicesList.length +
            index
          "
        >
          <van-cell
            :title="`(判断) ${examData.singleChoiceList.length + examData.multipleChoicesList.length + index + 1}: ${item.content}`"
          />
          <van-cell>
            <van-radio-group
              v-for="(q, qI) in item.questionOptions"
              :key="qI"
              v-model="form[item.id]"
              class="mb-2"
            >
              <van-radio :name="q.key">{{ q.key }}：{{ q.value }}</van-radio>
            </van-radio-group>
          </van-cell>
        </template>
      </van-form>

      <van-button
        type="primary"
        class="w-full"
        round
        text="提交考试"
        @click="submit"
      />
    </template>
    <template v-else>
      <div class="scores">{{ result.scores }}</div>
      <div class="result" :class="result.examResult">
        {{ result.examResult === "qualified" ? "合格" : "不合格" }}
      </div>
      <div class="flex">
        <div class="mr-4">
          <van-button type="primary" text="查看考试详情" @click="toDetail" />
        </div>
        <van-button type="danger" text="退出考试" @click="exit" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getExamDetail, putExam } from "@/api/exam";
import { showConfirmDialog, showDialog, showToast } from "vant";

export default defineComponent({
  name: "Exam",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const examData = ref<any>({});
    const form = ref<any>({});
    const durationTime = ref<number>(0);
    let timer: number | null = null;
    const result = ref<any>(null);

    const getData = async () => {
      try {
        const data = await getExamDetail(route.params.id as string);
        data.multipleChoicesList.forEach((m: any) => {
          form.value[m.id] = [];
        });
        examData.value = data;
        if (examData.value.duration > 0) {
          durationTime.value = examData.value.duration * 60;
          startTimer();
        }
      } catch {
        examData.value = {};
      }
    };

    const startTimer = () => {
      timer = window.setTimeout(() => {
        durationTime.value -= 1;
        if (durationTime.value === 0) {
          getClose();
          clearTimeout(timer!);
        } else startTimer();
      }, 1000);
    };

    const getClose = async () => {
      const questionReqList = Object.keys(form.value).map(questionId => ({
        questionId,
        userOptions:
          typeof form.value[questionId] === "string"
            ? [form.value[questionId]]
            : form.value[questionId]
      }));

      const params = {
        examId: examData.value.id,
        trainingPackageId: route.query.trainingPackageId as string,
        questionReqList
      };

      try {
        const data = await putExam(params);
        showDialog({
          message: "考试时间已结束, 请退出本次考试。（并自动交卷）"
        }).then(() => {
          result.value = data;
        });
      } catch (error) {
        console.error(error);
      }
    };

    const submit = () => {
      showConfirmDialog({
        title: "提示",
        message: "确定提交本次考试，无法撤回，是否继续？"
      }).then(async () => {
        const questionReqList = Object.keys(form.value).map(questionId => ({
          questionId,
          userOptions:
            typeof form.value[questionId] === "string"
              ? [form.value[questionId]]
              : form.value[questionId]
        }));

        const params = {
          examId: examData.value.id,
          trainingPackageId: route.query.trainingPackageId as string,
          questionReqList
        };

        try {
          const data = await putExam(params);
          result.value = data;
          showToast("提交成功!");
          clearTimeout(timer!);
        } catch (error) {
          console.error(error);
        }
      });
    };

    const exit = () => {
      router.go(-1);
    };

    const toDetail = () => {
      router.replace({ path: `/exam/detail/${result.value.id}` });
    };

    onMounted(() => {
      getData();
    });
    onBeforeUnmount(() => {
      clearTimeout(timer!);
    });

    return {
      examData,
      form,
      durationTime,
      result,
      submit,
      exit,
      toDetail
    };
  }
});
</script>

<style scoped>
.exam {
  padding: 40px 20px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  flex-flow: column;
}
.name {
  font-size: 34px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 12px;
}
.time {
  font-size: 18px;
  color: #606266;
  text-align: center;
  margin-bottom: 20px;
}
.list {
  width: 100%;
  margin-bottom: 20px;
}

.scores {
  font-size: 80px;
  margin-bottom: 50px;
}
.result {
  font-size: 40px;
  margin-bottom: 50px;
  color: #b70005;
}
.result.qualified {
  color: green;
}
</style>
