<template>
  <section class="page-container">
    <h2>📋 Summary</h2>
    <p v-if="!hasSummaryData">ยังไม่มีข้อมูลการเลือกคอร์ส</p>
    <section v-else>
      <p>ชื่อผู้ใช้: {{ favoriteStore.username }}</p>
      <p>จำนวนคอร์สที่ถูกใจ: {{ favoriteStore.favorites.length }}</p>
    </section>
    <RouterLink to="/">กลับไปหน้า Course</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();
const hasSummaryData = computed(
  () =>
    favoriteStore.username.trim().length > 0 && favoriteStore.favorites.length > 0,
);
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
