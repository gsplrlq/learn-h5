<template>
  <div>
    <van-tabs
      v-model="activeTab"
      sticky
      offset-top="50"
      @click-tab="onTabClick"
    >
      <van-tab
        v-for="tab in tabList"
        :key="tab.id"
        :title="tab.title"
        :name="tab.status"
      >
        <div v-for="c in course" :key="c.id" class="c-card">
          <van-card
            :tag="` ${c.courseType === 1 ? '免费课' : '付费课'} `"
            :thumb="c.imgUrl"
            :title="`${c.title}`"
            @click="router.push(`/course/${c.id}`)"
          >
            <template #desc>
              <div class="text-l text-gray-400">
                机构：{{ c.institutionName }}
              </div>
              <div>
                {{ `已学 ${c.percent}% | 学习时间: ${getTime(c.progress)}` }}
              </div>
              <div>
                {{ `学习至 ${c.chapterTitle}` }}
              </div>
            </template>
            <!-- <template #thumb>
              <img :src="c.imgUrl" alt="" srcset="" />
            </template> -->
            <template #footer>
              <van-button
                type="primary"
                size="small"
                @click="continueLearning(c)"
                >继续学习</van-button
              >
            </template>
          </van-card>
        </div>

        <div v-if="course.length === 0" class="empty-placeholder p-4">
          暂无课程
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { Tab, Tabs, Card } from "vant";
import { getUserCourse } from "@/api/user"; // Adjust the import according to your project structure
import { useRouter } from "vue-router";
import { showToast } from "vant";

export default {
  components: {
    "van-tab": Tab,
    "van-tabs": Tabs,
    "van-card": Card
  },
  setup() {
    const router = useRouter();
    const activeTab = ref(0);
    const tabList = [
      { id: 1, title: "全部", status: "" },
      { id: 2, title: "免费课", status: 1 },
      { id: 3, title: "付费课", status: 2 }
    ];
    const course = ref([]);

    const getTime = time => {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      return `${hours}小时${minutes}分钟`;
    };

    const onTabClick = tab => {
      activeTab.value = tab.name;
      getUserCourseData(tab.name);
    };
    const getUserCourseData = status => {
      // Fetch c list data based on status
      const params = {
        courseType: status
      };
      getUserCourse(params).then(data => {
        course.value = data;
      });
    };
    const continueLearning = c => {
      if (c.autoClass === 0 && !c.classId) {
        return showToast("请联系管理员加入班级");
      }
      if (!c.videoId) {
        return showToast("暂无视频");
      }

      router.push(`/video/${c.id}/${c.videoId}`);
      event.stopPropagation();
      // Jump to the course details page
      console.log(c);
    };

    onMounted(() => {
      getUserCourseData(tabList[0].status);
    });
    return {
      router,
      activeTab,
      tabList,
      getTime,
      course,
      onTabClick,
      continueLearning
    };
  }
};
</script>
<style scoped>
.c-card {
  margin-bottom: 16px;
}
</style>
