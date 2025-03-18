<template>
  <van-list v-model:loading="loading" finished finished-text="没有更多了">
    <van-cell-group>
      <van-cell
        v-for="certificate in certificates"
        :key="certificate.id"
        :title="certificate.certificateName"
        :label="`课程: ${certificate.courseName} 获取日期: ${certificate.obtainDate}`"
      >
        <template #right-icon>
          <van-button
            type="primary"
            size="small"
            @click="viewcertificate(certificate.certificatePdf)"
            >查看证书</van-button
          >
        </template>
      </van-cell>
    </van-cell-group>
  </van-list>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import { getUserCertificateInfo } from "@/api/user";
import { showToast } from "vant";

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

    const viewcertificate = (certificatePdf: string) => {
      // For mobile devices, open the PDF in a new tab
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.open(certificatePdf, "_blank");
      } else {
        // For desktop, download the PDF
        const link = document.createElement("a");
        link.href = certificatePdf;
        link.download = certificatePdf;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      showToast("查看证书, 请下载查看");
    };
    return {
      certificates,
      loading,
      viewcertificate
    };
  }
});
</script>

<style scoped></style>
