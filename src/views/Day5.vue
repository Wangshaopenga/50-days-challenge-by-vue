<template>
  <div class="container"></div>
  <div class="mask" :class="{ claer: num == 100 }">
    <div>{{ num }}%</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
let num = $ref(0);
const date = new Date();
onMounted(() => {
  let time = setInterval(() => {
    num != 100 ? num++ : clearInterval(time);
  }, 40);
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-image: url("../assets/image/day5.avif");
  background-size: cover;
  background-position: center;
  z-index: 1;
}
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  color: #e0e0e0;
  font-size: 42px;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  animation: an 4s;
}
@keyframes an {
  from {
    opacity: 1;
    backdrop-filter: blur(30px);
  }
  80% {
    opacity: 0.4;
  }
  to {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
}
</style>
