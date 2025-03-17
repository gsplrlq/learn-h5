<template>
  <div class="certificate-list">
    <ul>
      <li v-for="certificate in certificates" :key="certificate.id">
        <h2>{{ certificate.certificateName }}</h2>
        <p>课程名称: {{ certificate.courseName }}</p>
        <p>获取日期: {{ certificate.obtainDate }}</p>
      </li>
    </ul>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="!certificates.length" class="no-data">暂无证书信息</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import { getUserCertificateInfo } from "@/api/user";

export default defineComponent({
  setup() {
    const certificates = reactive([]);
    const page = ref(1);
    const pageSize = ref(999);
    const loading = ref(false);

    const fetchCertificates = async () => {
      if (loading.value) return;
      loading.value = true;
      try {
        const data = await getUserCertificateInfo({
          page: {
            size: pageSize.value,
            current: page.value
          }
        });
        certificates.push(...data.records);
        page.value++;
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchCertificates();
    });

    const handleScroll = () => {
      const bottomOfWindow =
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        fetchCertificates();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return {
      certificates,
      loading
    };
  }
});
</script>

<style scoped>
.certificate-list {
  padding: 20px;
}

.certificate-list h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.certificate-list ul {
  list-style-type: none;
  padding: 0;
}

.certificate-list li {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.certificate-list h2 {
  margin: 0;
  font-size: 20px;
}

.certificate-list p {
  margin: 5px 0;
}
</style>
