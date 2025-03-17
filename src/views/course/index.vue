<template>
  <div class="course">
    <van-card
      :thumb="course.imgUrl"
      :title="course.title"
      :desc="course.courseDesc"
      class="course-info"
    >
      <template #title>
        <div class="course-title">{{ course.title }}</div>
      </template>
      <template #tags>
        <van-tag plain class="mr-2">时长: {{ course.durationStr }}</van-tag>
        <van-tag plain class="mr-2">人数: {{ course.studyCount }} 人</van-tag>
        <van-tag plain>评分: {{ course.score }}</van-tag>
      </template>
      <template #footer>
        <div v-if="course.teacherInfo" class="teacher-info flex text-left mt-2">
          <van-image
            round
            width="40px"
            height="40px"
            :src="course.teacherInfo.avatar"
            class="teacher-avatar mr-2"
          />
          <div class="teacher-details">
            <p>{{ course.teacherInfo.userName }}</p>
            <p>{{ course.teacherInfo.education }}</p>
          </div>
        </div>
      </template>
    </van-card>

    <van-tabs v-model="activeTab" class="pb-12" sticky>
      <van-tab title="简介">
        <div v-richText="course.courseContent" class="m-2" />
      </van-tab>
      <van-tab title="章节">
        <van-collapse ref="collapse" v-model="activeNames">
          <van-collapse-item
            v-for="item in chapterList"
            :key="item.id"
            :title="item.title"
            :name="item.id"
          >
            <van-cell
              v-for="subItem in item.chapterList"
              :key="subItem.id"
              :title="subItem.title"
              :label="`时长: ${subItem.durationStr}`"
            >
              <!-- @click="router.push(`/video/${course.id}/${subItem.videoId}`)" -->
              <template #right-icon>
                <i-icon
                  v-if="subItem.percent == 100"
                  icon="mdi-check-circle"
                  class="text-lg text-green-500"
                />
                <i-icon
                  v-else-if="subItem.percent > 0 && subItem.percent < 100"
                  icon="mdi-progress-clock"
                  class="text-lg text-green-500"
                />
                <i-icon
                  v-else
                  icon="mdi-circle-outline"
                  class="text-lg text-gray-500"
                />
              </template>
            </van-cell>
          </van-collapse-item>
        </van-collapse>
      </van-tab>
      <van-tab title="问答">
        <question-list :course="course" />
      </van-tab>
      <van-tab title="笔记">
        <note-list :course="course" />
      </van-tab>
      <van-tab title="评价">
        <review-list :course="course" />
      </van-tab>
    </van-tabs>

    <van-action-bar>
      <van-action-bar-button
        v-if="course.courseType === 2 && !course.bought"
        type="danger"
        text="立即购买"
        @click="toPay"
      />
      <van-action-bar-button
        v-else
        type="danger"
        :text="course.hasStudy ? '继续学习' : '开始学习'"
        @click="router.push(`/video/${course.id}/${course.videoId}`)"
      />
    </van-action-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getLessonDetail, getLessonChapter } from "@/api/lesson";
import QuestionList from "./question.vue";
import NoteList from "./note.vue";
import ReviewList from "./review.vue";
import { showToast } from "vant";

const route = useRoute();
const router = useRouter();

let course = ref({
  id: 1,
  title: "",
  courseDesc: "这是课程1的描述",
  imgUrl: "course-imgUrl-url",
  teacherInfo: {
    userName: "教师1",
    avatar: "teacher-avatar-url",
    education: ""
  },
  durationStr: "2小时",
  studyCount: 100,
  score: 4.5,
  courseContent: "课程1的简介",
  courseType: 1,
  bought: false,
  videoId: 1, // 课程视频id
  hasStudy: false // 是否已经学习过
});
const activeTab = ref(0);
const activeNames = ref([]);

const chapterList = ref([
  {
    id: 1,
    title: "第一章",
    chapterList: [
      { id: 1, title: "第一节", videoId: 1, durationStr: "10分钟", percent: 50 }
    ]
  }
]);

const toPay = () => {
  showToast("支付功能暂未开放...");
  // router.push(`/order/confirm/${course.value.id}/2`);
};

onMounted(async () => {
  const courseId: any = route.params.id;

  course.value = await getLessonDetail(courseId);
  chapterList.value = await getLessonChapter({ courseId });

  nextTick(() => {
    activeNames.value = chapterList.value.map(item => item.id);
  });
});
</script>

<style scoped>
.course-title {
  font-size: 20px;
  font-weight: bold;
}

h1 {
  color: #333;
}
</style>
