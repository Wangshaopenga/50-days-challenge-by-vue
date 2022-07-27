<template>
  <button @click="count++">{{ count }}</button>
</template>

<script setup>
import { ref } from "vue";

const count = $ref(0);
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
