<template>
  <!-- water 部分存在一个缝隙不知道为什么 用背景色填充了 -->
  <div class="container">
    <div class="title">
      <h1>Drink Water</h1>
      <span>Goal: 2 Liters</span>
    </div>
    <!-- cup 可以封装成一个组件 由于这里一个挑战一个文件暂不封装了 -->
    <div class="cup">
      <div class="remained" :style="remainedHight">
        <span>{{ (8 - index) * 0.25 }}L</span>
        <small>Remained</small>
      </div>
      <div class="water" :style="waterHight">
        <span>{{ index * 12.5 }}%</span>
      </div>
    </div>
    <div class="select">
      <span>Select how many glasses of water you have drink</span>
      <div class="cups">
        <div class="smallCup" @click="select(i)" :class="{ active: i <= index }" v-for="i in 8">
          250
          ml
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

let index = $ref(0)
function select(i) {
  if (index === i) --index
  else index = i;
}
let waterHight = computed(() => {
  if (index === 0) {
    return {
      height: `${index * 12.5}%`,
      color: 'transparent'
    }
  }
  return `height: ${index * 12.5}%;`
})
let remainedHight = computed(() => {
  if (index === 0)
    return {
      height: '335px'
    }
  return `height: ${(8 - index) * 12.5}%;`
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  // justify-content: center;
  align-items: center;
  background: #3494e4;
  flex-direction: column;

  .title {
    color: #fff;
    text-align: center;
    padding: 10px;

    h1 {
      padding: 10px;
    }

    margin-bottom: 20px;
  }

  .cup {
    width: 150px;
    height: 335px;
    border-radius: 0 0 35px 35px;
    border: 5px solid #144fc6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: #144fc6;
    margin-bottom: 25px;
    user-select: none;
    overflow: hidden;

    .remained {
      height: 100% - 37.5%;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #144fc6;
      transition: height .3s ease;

      span {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .water {
      background: #6ab3f8;
      border-radius: 0 0 34px 34px;
      color: #144fc6;
      font-weight: bold;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: height .3s ease;
    }
  }

  .select {
    color: #fff;
    font-size: 18px;

    .cups {
      display: grid;
      grid-template-columns: 60px 60px 60px 60px;
      grid-template-rows: 105px 105px;
      text-align: center;
      justify-content: center;
      align-items: center;

      .smallCup {
        height: 95px;
        width: 50px;
        border-radius: 0 0 15px 15px;
        border: 4px solid #144fc6;
        text-align: center;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #144fc6;
        cursor: pointer;
        transition: background .2s ease-in-out;
        user-select: none;

      }

      .active {
        background: #6ab3f8;
        color: rgba($color: #fff, $alpha: .9);
      }
    }
  }
}
</style>
