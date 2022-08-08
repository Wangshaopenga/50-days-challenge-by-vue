<template>
  <div class="container">
    <div class="content">
      <div
          class="img"
          :class="{ active: isActive == 0 }"
          style="
          background: url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        "
          @click="changeActive(0)"
      >
        <h3>Explore The World</h3>
      </div>
      <div
          class="img"
          style="
          background: url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        "
          :class="{ active: isActive == 1 }"
          @click="changeActive(1)"
      >
        <h3>Wild Forest</h3>
      </div>
      <div
          class="img"
          style="
          background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80');
        "
          @click="changeActive(2)"
          :class="{ active: isActive == 2 }"
      >
        <h3>Sunny Beach</h3>
      </div>
      <div
          class="img"
          style="
          background: url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80');
        "
          @click="changeActive(3)"
          :class="{ active: isActive == 3 }"
      >
        <h3>City on Winter</h3>
      </div>
      <div
          class="img"
          style="
          background: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        "
          @click="changeActive(4)"
          :class="{ active: isActive == 4 }"
      >
        <h3>Mountains - Clouds</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

let isActive = $ref(0);

const changeActive = (itme) => {
  isActive = itme;
};
</script>

<style lang="scss" scoped>
.container {
  height: 97vh;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;

  .content {
    display: flex;
    width: 90vw;

    .img {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      border-radius: 50px;
      height: 80vh;
      flex: 0.5;
      margin: 5px;
      transition: all 0.8s ease-in;
      color: #fff;

      h3 {
        font-size: 24px;
        position: absolute;
        left: 20px;
        bottom: 20px;
        opacity: 0;
        transition: opacity 0.3s ease-in 0.4s;

      }
    }

    .active {
      flex: 5;

      h3 {
        opacity: 1;
      }
    }
  }
}
</style>
