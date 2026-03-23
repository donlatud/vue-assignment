<template>
  <nav>
    <RouterLink to="/">🏠 Courses </RouterLink>
    <RouterLink to="/summary">📋 Summary</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
nav {
  margin: 20px;
  text-align: center;
}
a {
  margin: 0 8px;
  color: #42b883;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
