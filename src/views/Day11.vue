<template>
  <div class="container">
    <div class="title" v-if="show">Press any key to get the keyCode</div>
    <div v-else class="content">
      <div>
        <span>event.key</span>
        <div>{{ key }}</div>
      </div>
      <div>
        <span>event.keyCode</span>
        <div>{{ keyCode }}</div>
      </div>
      <div>
        <span>event.code</span>
        <div>{{ code }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
let show = $ref(true);
let key = $ref("");
let keyCode = $ref("");
let code = $ref("");
onMounted(() => {});
window.addEventListener("keydown", (event) => {
  show = false;
  event.key === " " ? (key = "Space") : (key = event.key);
  keyCode = event.keyCode;
  code = event.code;
});
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.container {
  height: 100%;
  width: 100%;
  background: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-align: center;
  .title {
    width: 500px;
    height: 80px;
    line-height: 80px;
    background: #eeeeee;
  }
  .content {
    display: flex;
    div {
      span {
        font-size: 14px;
        color: #555;
      }
      div {
        border: 1px solid #333;
        width: 100px;
        height: 60px;
        line-height: 20px;
        font-weight: bold;
        background: #eee;
        padding: 20px;
        margin: 10px;
      }
    }
  }
}
</style>
