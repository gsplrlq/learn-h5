<template>
  <div class="review-page">
    <div class="total-score bg-white p-4">
      <span>综合评分: </span>
      <span class="mr-2">{{ totalScore }}</span>
      <van-rate :model-value="getHalf(totalScore)" allow-half readonly />
    </div>

    <van-button
      v-if="course.hasStudy && !userEvaluated"
      type="primary"
      @click="showReviewPopup"
      >我要评价</van-button
    >

    <van-popup
      v-model:show="showPopup"
      position="bottom"
      style="background-color: var(--van-gray-1)"
    >
      <div class="review-popup">
        <div class="score-section mb-2">
          <span class="mr-4">分数</span>
          <van-rate v-model="score" allow-half />
        </div>
        <div class="content-section mb-2 flex">
          <span class="mr-4">内容</span>
          <van-field
            v-model="content"
            class="flex-1"
            type="textarea"
            rows="3"
            autosize
            clearable
            maxlength="200"
            placeholder="请输入内容"
            show-word-limit
          />
        </div>
        <van-button type="primary" @click="submitReview">提交</van-button>
      </div>
    </van-popup>

    <div class="review-list">
      <div v-if="!reviews.length" class="text-center text-gray-500 py-4">
        暂无内容
      </div>
      <div
        v-for="review in reviews"
        :key="review.id"
        class="review-item bg-white p-4"
      >
        <van-image :src="review.userAvatar" class="avatar" round />
        <div class="review-content">
          <div class="review-header">
            <span class="name">{{ review.userName }}</span>
            <van-rate
              :model-value="getHalf(review.score)"
              allow-half
              readonly
            />
          </div>
          <div class="review-body">{{ review.content }}</div>
          <div class="review-footer">{{ review.createTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { showToast } from "vant";
import { getLessoEvaluate, getLessoEvaluateCreate } from "@/api/lesson"; // Adjust the import according to your project structure

export default defineComponent({
  name: "ReviewList",
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const showPopup = ref(false);
    const totalScore = ref(0);
    const score = ref(0);
    const userEvaluated = ref(false);
    const content = ref("");
    const reviews = ref([]);

    const showReviewPopup = () => {
      showPopup.value = true;
    };

    const submitReview = () => {
      if (!content.value || score.value === 0) {
        showToast("请填写内容并评分");
        return;
      }

      getLessoEvaluateCreate({
        courseId: props.course.id,
        score: score.value * 2,
        content: content.value
      }).then(() => {
        showPopup.value = false;
        score.value = 0;
        showToast("评价提交成功");
      });
    };

    const getHalf = (score: number) => {
      return score / 2;
    };

    onMounted(async () => {
      const data = await getLessoEvaluate({
        courseId: props.course.id,
        page: {
          current: 1,
          size: -1
        }
      });
      reviews.value = data.page.records;
      totalScore.value = data.score;
      userEvaluated.value = data.userEvaluated;
    });

    return {
      showPopup,
      score,
      content,
      reviews,
      totalScore,
      userEvaluated,
      showReviewPopup,
      submitReview,
      getHalf
    };
  }
});
</script>

<style scoped>
.review-page {
  padding: 16px;
}

.total-score {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
}

.review-popup {
  padding: 16px;
}

.review-list {
  margin-top: 16px;
}

.review-item {
  display: flex;
  margin-bottom: 16px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}

.review-content {
  flex: 1;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.review-body {
  margin-top: 8px;
}

.review-footer {
  margin-top: 4px;
  color: #888;
  font-size: 12px;
}
</style>
