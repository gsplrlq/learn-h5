<template>
  <div class="z-10" style="top: 108px">
    <van-dropdown-menu>
      <van-dropdown-item
        v-model="direction"
        :options="directionOptions"
        @change="onDirectionChange"
      />
      <van-dropdown-item
        v-model="category"
        :options="filteredCategoryOptions"
        @change="dropdownChange"
      />
    </van-dropdown-menu>
  </div>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-row gutter="20">
      <van-col v-for="data in packages" :key="data.id" span="24">
        <package-card :package="data" />
      </van-col>
    </van-row>
  </van-list>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, watch } from "vue";
import PackageCard from "@/components/package/index.vue";
import { getLessonNav, getTrainList } from "@/api/lesson";
// Removed incorrect import

const packages = ref([]);
const loading = ref(false);
const finished = ref(false);
const direction = ref("");
const category = ref("");
const directionOptions = ref([]);

const filteredCategoryOptions = computed(() => {
  const directionValue = direction.value;
  return (
    directionOptions.value.find(item => item.value === directionValue)
      ?.children || []
  );
});

defineOptions({
  name: "Package"
});

const onDirectionChange = (value: string) => {
  category.value = "";
  dropdownChange();
};
const dropdownChange = () => {
  page.value = 1;
  initpackages();
};

const initNav = () => {
  getLessonNav().then(data => {
    directionOptions.value = data.map(item => ({
      text: item.name,
      value: item.code,
      children: [
        {
          text: "全部",
          value: ""
        },
        ...(item.typeCategoryList || []).map(child => ({
          text: child.name,
          value: child.code
        }))
      ]
    }));
  });
};

const size = 10; // Define the size variable
let page = ref(0); // Define the page variable

const onLoad = () => {
  page.value += 1;
  if (finished.value) return;
  loading.value = true;
  initpackages();
};

const initpackages = () => {
  const params = {
    categoryPCode: direction.value,
    categoryCode: category.value,
    page: {
      size: size,
      current: page.value
    }
  };
  getTrainList(params).then(data => {
    if (page.value === 1) {
      packages.value = data.records;
    } else {
      packages.value = packages.value.concat(data.records);
    }
    loading.value = false;
    finished.value = data.records.length < size;
  });
};

onMounted(() => {
  initNav();
});
</script>

<style scoped>
.my-swipe {
  height: 200px;
}
.package-list {
  margin-top: 20px;
}
</style>
