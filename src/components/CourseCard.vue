<template>
  <article class="course-card">
    <img :src="course.image" :alt="course.title" class="course-image" />
    <header class="course-content">
      <h3>{{ course.title }}</h3>
      <p>ราคา: {{ course.price }} บาท</p>
    </header>
    <button :disabled="disabled" @click="addFavorite">เพิ่มในรายการโปรด</button>
  </article>
</template>

<script setup>
import { useFavoriteStore } from "../stores/favorite";
const favoriteStore = useFavoriteStore();

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const addFavorite = () => {
  favoriteStore.addFavorite({
    id: props.course.id,
    title: props.course.title,
  });
};
</script>

<style scoped>
.course-card {
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  padding: 12px 16px;
  margin-bottom: 12px;
}

.course-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.course-content {
  flex: 1;
  text-align: left;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

p {
  margin: 6px 0 0;
  color: #555;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #2c9c6d;
}

button:disabled {
  background-color: #b0b0b0;
  cursor: not-allowed;
}
</style>
