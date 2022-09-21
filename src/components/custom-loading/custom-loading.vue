<template>
  <transition ref="root">
    <div
      tabindex="0"
      class="loading-overlay is-active"
      v-show="isActive"
      :aria-busy="isActive"
      aria-label="Loading"
    >
      <div class="loading-background"></div>
      <div class="loading-icon">
        <div>Loading....</div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const isActive = ref<boolean>(false);

const hide = () => {
  isActive.value = false;
  setTimeout(() => {
    return;
  }, 150);
};
const disableScroll = () => {
  document.body.classList.add("vld-shown");
};
onMounted(() => {
  isActive.value = true;
});
watch(isActive, () => {
  if (isActive.value) {
    disableScroll();
  }
});
</script>
<style lang="css" scoped>
.loading-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  display: none;
  justify-content: center;
  overflow: hidden;
  z-index: 9999;
}
.loading-overlay.is-active {
  display: flex;
}
/* .loading-overlay.is-full-page {
      z-index: 9999;
      position: fixed;
    } */
.loading-overlay .loading-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: rgb(255, 255, 255);
  opacity: 0.9;
}
.loading-overlay .loading-icon {
  position: relative;
}
</style>
<style>
.loading-shown {
  overflow: hidden !important;
}
</style>
