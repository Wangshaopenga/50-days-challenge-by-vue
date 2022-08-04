<template>
  <div class="container">
    <h3>Enter all of choices divided by a comma(',').</h3>
    <h3>Press enter when you're done</h3>
    <textarea
      v-model="message"
      cols="65"
      rows="5"
      placeholder="Enter choices hrer..."
      @keydown.enter="f()"
    ></textarea>
    <div>
      <span
        :class="{ active: index == count }"
        v-for="(itme, index) in info"
        :key="itme"
        >{{ itme }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
const message = $ref("");
let count = $ref();
let info = $ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
const f = () => {
  message = "";
  let time = setInterval(() => {
    count = Math.ceil(Math.random() * info.length) - 1;
  }, 200);
  setTimeout(() => {
    clearInterval(time);
  }, 2000);
};
watch(
  () => message,
  (newValue, oldValue) => {
    if (newValue !== "\n") {
      info = message.split(",");
      // console.log(message.split(","));
    }
  }
);
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-color: #2b88f0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  overflow: hidden;
  h3 {
    color: #fff;
  }
  textarea {
    padding: 10px;
    margin: 18px;
    color: #000;
    font-size: 16px;
  }
  div {
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    span {
      margin: 3px;
      padding: 7px 20px;
      background: #f0932b;
      color: #fff;
      text-align: center;
      border-radius: 30px;
    }
    .active {
      background-color: #273c75;
    }
  }
}
</style>
