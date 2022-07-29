<template>
  <div class="container">
    <h1>Scroll to see the animation</h1>
    <div class="box show">Content</div>
    <div class="box show">Content</div>
    <div class="box show">Content</div>
    <div class="box">Content</div>
    <div class="box">Content</div>
    <div class="box">Content</div>
    <div class="box">Content</div>
    <div class="box">Content</div>
    <div class="box">Content</div>
    <div class="box">Content</div>
    <div class="box">Content</div>
    <div class="box">Content</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
let boxes = $ref([]);
onMounted(() => {
  boxes = document.querySelectorAll(".box");
  window.addEventListener("scroll", checkBoxes);
});
const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

checkBoxes();
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.container {
  width: 100vw;
  background-color: #efedd6;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .box {
    overflow: hidden;
    width: 400px;
    height: 200px;
    background-color: steelblue;
    border-radius: 10px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
    transform: translateX(400%);
    transition: transform 0.4s ease;
    margin: 10px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    line-height: 200px;
    &:nth-of-type(even) {
      transform: translateX(-400%);
    }
  }
  .show {
    transform: translateX(0%) !important;
  }
}
</style>
