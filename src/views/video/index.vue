<template>
  <div class="video-player">
    <van-card
      v-if="course"
      :thumb="course.imgUrl"
      :title="course.title"
      :desc="course.courseDesc"
      class="course-info mb-4"
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

    <div id="player-con" />
    <h3 class="text-xl p-4 font-semibold">{{ lessonChapter?.title || "" }}</h3>

    <van-tabs v-if="course" v-model="activeTab" class="pb-12" sticky>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import Aliplayer from "aliyun-aliplayer";
import "aliyun-aliplayer/build/skins/default/aliplayer-min.css";
import {
  getLessonDetail,
  getLessonChapter,
  getVideoAuth,
  createStudyHistory,
  createEvaluation,
  updateEvaluation
} from "@/api/lesson";
import { useRoute, useRouter } from "vue-router";
import QuestionList from "../course/question.vue";
import NoteList from "../course/note.vue";
import ReviewList from "../course/review.vue";

export default defineComponent({
  name: "VideoPlayer",
  components: {
    QuestionList,
    NoteList,
    ReviewList
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    interface Course {
      courseType: number;
      trainingPackage: boolean;
      imgUrl: string;
      title: string;
      courseDesc: string;
      durationStr: string;
      studyCount: number;
      score: number;
      teacherInfo: {
        avatar: string;
        userName: string;
        education: string;
      };
      hasStudy: boolean;
    }

    const activeTab = ref(0);
    const course = ref<Course | null>(null);
    const player = ref(null);
    const videoList = ref([]);
    const lessonChapter = ref(null);
    const timer = ref(null);

    const getCourseDetail = async () => {
      const data = await getLessonDetail(route.params.courseId);
      course.value = data;
    };

    const createPlayer = () => {
      console.log(11111);
      player.value = new Aliplayer(
        {
          license: {
            domain: "bjsyrc.cn", // 申请 License 时填写的域名
            key: "EPSmMyEFEooJZm10S5cf853f03b2b4bd098e11931a4aeeb83" // 申请成功后，在控制台可以看到 License Key
          },
          id: "player-con",
          vid: lessonChapter.value.videoId, // 如果是私有加密播放请传入 vid/playauth/encryptType
          playauth: lessonChapter.value.playauth,
          width: "100%",
          height: "260px",
          autoplay: false,
          isLive: false,
          rePlay: false,
          playsinline: true,
          preload: true,
          controlBarVisibility: "hover",
          useH5Prism: true
        },
        player => {
          player.on("ended", () => {
            console.log("ended");
            clearTimeout(timer.value);

            const currentIndex = videoList.value.findIndex(
              item =>
                item.videoId === route.params.videoId &&
                lessonChapter.value.id === item.id
            );
            const nextVideo = videoList.value[currentIndex + 1];
            if (nextVideo) {
              update(nextVideo);
            } else {
              // 满意度调查
              createEvaluation({ courseId: route.params.courseId });
            }
          });

          player.on("ready", () => {
            player.seek(lessonChapter.value.progress);
          });

          player.on("play", () => {
            console.log("play");
            startTimer();
          });

          player.on("error", () => {
            console.log("error");
          });

          // 套餐付费课静止拖动
          if (course.value.courseType === 2 && course.value.trainingPackage) {
            let lastTime = 0;
            player.on("timeupdate", () => {
              if (!player.tag.seeking) {
                // 更新最近一次的播放位置
                lastTime = player.getCurrentTime();
              }
            });

            player.on("seeking", () => {
              var delta = player.getCurrentTime() - lastTime;
              if (Math.abs(delta) > 0.01) {
                console.log("Seeking is disabled");
                // 判断为拖动，自动跳回原来的位置
                // (iOS QQ浏览器无效，因为QQ浏览器不支持获取和修改currentTime属性)
                player.tag.currentTime = lastTime;
              }
            });

            player.on("ended", () => {
              lastTime = 0;
            });
          }
        }
      );
    };

    const update = video => {
      lessonChapter.value = video;
      player.value.dispose();
      router.push({ path: `/video/${route.params.courseId}/${video.videoId}` });
      getVideo();
    };

    const getVideo = async () => {
      const playauth = await getVideoAuth({
        courseId: route.params.courseId,
        videoId: route.params.videoId
      });
      lessonChapter.value.playauth = playauth;
      createPlayer();
    };

    const startTimer = () => {
      if (!player.value) return;

      timer.value = setTimeout(() => {
        createStudyHistory({
          courseId: route.params.courseId,
          chapterId: lessonChapter.value.id,
          fileId: lessonChapter.value.fileId,
          progress: player.value.getCurrentTime()
        });
        startTimer();
      }, 1000 * 5);
    };

    onMounted(async () => {
      getCourseDetail();

      const data = await getLessonChapter({
        courseId: route.params.courseId
      });
      videoList.value = [...data.map(item => item.chapterList).flat()];
      lessonChapter.value = videoList.value.find(
        item => item.videoId === route.params.videoId
      );

      getVideo();
    });

    // watch(
    //   () => route.params.videoId,
    //   async (newVideoId, oldVideoId) => {
    //     if (newVideoId !== oldVideoId) {
    //       if (timer.value) {
    //         clearTimeout(timer.value);
    //       }
    //       if (player.value) {
    //         player.value.dispose();
    //       }
    //       lessonChapter.value = videoList.value.find(
    //         item => item.videoId === newVideoId
    //       );
    //       getVideo();
    //     }
    //   }
    // );
    onUnmounted(() => {
      if (timer.value) {
        clearTimeout(timer.value);
      }
      if (player.value) {
        player.value.dispose();
      }
    });

    return {
      activeTab,
      course,
      lessonChapter
    };
  }
});
</script>

<style scoped>
.video-player {
  width: 100%;
  height: 100%;
}
</style>
