<template>
  <div>About View</div>
  <p>{{ $route.path }}</p>

  <button class="btn btn-primary" @click="$router.push('/')">
    Home으로 이동
  </button>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);
</script>

<style lang="scss" scoped></style>
