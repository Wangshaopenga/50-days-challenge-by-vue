<template>
  <div class="container">
    <div
      ref="left"
      class="left animation"
      @mouseover="leftOver"
      @mouseleave="leftLeave"
    >
      <h1>Playstation 5</h1>
      <button>BUY NOW</button>
    </div>
    <div
      ref="right"
      class="right animation"
      @mouseover="f"
      @mouseleave="rightLeave"
    >
      <h1>XBox Series X</h1>
      <button>BUY NOW</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const left = $ref();
const right = $ref();
const leftOver = () => {
  left.style.width = "75%";
  right.style.width = "25%";
};
const leftLeave = () => {
  left.style.width = "50%";
  right.style.width = "50%";
};
const f = () => {
  left.style.width = "25%";
  right.style.width = "75%";
};
const rightLeave = () => {
  left.style.width = "50%";
  right.style.width = "50%";
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  .left {
    overflow: hidden;
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    background-image: url("../assets/image/day7/ps.jpg");
    background-size: cover;
    &::before {
      content: "";
      background: rgba(87, 84, 236, 0.7);
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .right {
    position: absolute;
    right: 0;
    width: 50%;
    overflow: hidden;
    height: 100%;
    background-image: url("../assets/image/day7/xbox.jpg");
    background-size: cover;
    &::before {
      content: "";
      background: rgba(43, 43, 43, 0.8);
      position: absolute;
      width: 100%;
      height: 100%;
    }
    button {
      &:hover {
        background: #1c7a1c;
      }
    }
  }
  h1 {
    position: absolute;
    color: #fff;
    font-size: 4rem;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  button {
    position: absolute;
    left: 50%;
    top: 40%;
    background: rgba(43, 43, 43, 0);
    transform: translateX(-50%);
    text-decoration: none;
    color: #fff;
    border: #fff solid 0.2rem;
    font-size: 1rem;
    font-weight: bold;
    width: 15rem;
    padding: 1.5rem;
    &:hover {
      background: #5754ec;
    }
  }
  .animation {
    transition: all 1s ease-in-out;
  }
}
</style>
