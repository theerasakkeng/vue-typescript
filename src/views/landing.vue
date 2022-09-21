<template>
  <div></div>
</template>
<script setup lang="ts">
import { useLoading } from "../plugin/custom-loading-plugin";

const loader: any = useLoading();

const check = () => {
  loader.show();
  // setTimeout(() => {
  //   loader.hide();
  // }, 3000);
};
check();
</script>
<style lang="css"></style>
