<template>
  <div class="app-alert">
    <TransitionGroup name="slide">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="alert"
        :class="typeStyle(item.type)"
        role="alert"
      >
        {{ item.message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});

const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-success');
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>
