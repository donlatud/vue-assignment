<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import CourseCard from "../components/CourseCard.vue";
import axios from "axios";
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();
const courses = ref<{ id: number; title: string; price: number; image: string }[]>(
  [],
);
const isLoading = ref(false);
const error = ref("");

const isUsernameEmpty = computed(() => !favoriteStore.username.trim());
const handleUsernameInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  favoriteStore.setUsername(input.value);
};

onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await axios.get("https://fakestoreapi.com/products");
    courses.value = response.data;
  } catch {
    error.value = "ไม่สามารถโหลดข้อมูลคอร์สได้";
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <p>❤️ ถูกใจแล้ว {{ favoriteStore.favorites.length }} คอร์ส</p>
      <RouterLink to="/summary">ไปหน้า Summary</RouterLink>
    </header>

    <section class="form-section">
      <label for="username">ชื่อผู้ใช้:</label>
      <input
        id="username"
        :value="favoriteStore.username"
        placeholder="กรอกชื่อของคุณ"
        @input="handleUsernameInput"
      />
    </section>

    <p v-if="isLoading">กำลังโหลดข้อมูลคอร์ส...</p>
    <p v-else-if="error">{{ error }}</p>

    <section v-else class="course-list">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
        :disabled="isUsernameEmpty"
      />
    </section>
  </section>
</template>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.course-list {
  margin-top: 24px;
}

.form-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
}
</style>
