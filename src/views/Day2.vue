<template>
  <div class="container">
    <div class="steps">
      <div ref="progress" class="progress"></div>
      <div class="number" :class="{ activeNumber: count >= 1 }">1</div>
      <div class="number" :class="{ activeNumber: count >= 2 }">2</div>
      <div class="number" :class="{ activeNumber: count >= 3 }">3</div>
      <div class="number" :class="{ activeNumber: count >= 4 }">4</div>
    </div>
    <div class="btns">
      <button :class="{ diable: count == 1 }" @click="dec">Prev</button>
      <button :class="{ diable: count == 4 }" @click="inc">Next</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
let count = $ref(1);
let progress = $ref(null);
const dec = () => {
  count == 1 ? count : count--;
};
const inc = () => {
  count == 4 ? count : count++;
};
onMounted(() => {
  watch(()=>count, () => {
    progress.style.width = `${(count - 1) * 30}%`;
  });
});
</script>

<style lang="scss" scoped>
.container {
  .steps {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    justify-content: space-between;
    width: 400px;
    &::before {
      content: "";
      background: #e0e0e0;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 6.5px;
      width: 100%;
      z-index: -1;
    }
    .progress {
      background: #3498db;
      position: absolute;
      height: 5px;
      width: 0%;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
      transition: width 0.4s ease;
    }
    .number {
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      color: #9e9f9e;
      border: 5px solid #e0e0e0;
      transition: all 0.4s ease;
    }
    .activeNumber {
      border: 5px solid #3498db;
    }
  }
  .btns {
    position: absolute;
    left: 50%;
    top: 63%;
    transform: translate(-50%, -50%);
    button {
      border: none;
      margin: 0 10px;
      width: 100px;
      height: 40px;
      font-size: 16px;
      color: #fff;
      background: #3498db;
      border-radius: 10px;
      cursor: pointer;
    }
    .diable {
      background: #e0e0e0;
      cursor: no-drop;
    }
  }
}
</style>
