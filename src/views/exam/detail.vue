<template>
  <div class="exam">
    <div class="name">{{ examData.examName }}</div>
    <div class="time">得分 {{ examData.scores }}</div>

    <van-form class="list" label-position="top" :model="form" disabled>
      <template v-for="(item, index) in examData.singleChoiceList" :key="index">
        <van-cell :title="`(单选) ${index + 1}: ${item.content}`" />
        <van-cell>
          <van-radio-group
            v-for="(q, qI) in item.questionOptions"
            :key="qI"
            v-model="form[item.id]"
            class="mb-2"
          >
            <van-radio disabled :name="q.key"
              >{{ q.key }}：{{ q.value }}</van-radio
            >
          </van-radio-group>
        </van-cell>
        <van-cell :title="`试题答案:  ${item.correctAnswer[0]}`" />
        <van-cell :title="`试题解析:  ${item.parse}`" />
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
              disabled
              >{{ q.key }}：{{ q.value }}</van-checkbox
            >
          </van-checkbox-group>
        </van-cell>
        <van-cell :title="`试题答案:  ${item.correctAnswer.join('，')}`" />
        <van-cell :title="`试题解析:  ${item.parse}`" />
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
            <van-radio disabled :name="q.key"
              >{{ q.key }}：{{ q.value }}</van-radio
            >
          </van-radio-group>
        </van-cell>
        <van-cell :title="`试题答案:  ${item.correctAnswer[0]}`" />
        <van-cell :title="`试题解析:  ${item.parse}`" />
      </template>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getExamResult } from "@/api/exam";

export default defineComponent({
  name: "ExamDetail",
  setup() {
    const route = useRoute();
    const examData = ref<any>({});
    const form = ref<any>({});

    const getData = async () => {
      try {
        const data = await getExamResult(route.params.id as string);
        data.singleChoiceList.forEach((m: any) => {
          form.value[m.id] = m.userOptions[0];
        });
        data.judgmentList.forEach((m: any) => {
          form.value[m.id] = m.userOptions[0];
        });
        data.multipleChoicesList.forEach((m: any) => {
          form.value[m.id] = m.userOptions;
        });
        examData.value = data;
      } catch {
        examData.value = {};
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      examData,
      form
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
