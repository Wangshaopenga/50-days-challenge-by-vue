<template>
  <div class="container active">
    <input
      ref="input"
      :class="{ active: active }"
      type="text"
      placeholder="Search..."
    />
    <search
      class="search"
      @click="click"
      theme="outline"
      size="24"
      fill="#333"
    />
  </div>
</template>

<script setup>
import { Search } from "@icon-park/vue-next";
import { ref } from "vue";
const input = $ref(null);
let active = $ref(false);
const click = () => {
  active = !active;
  input.placeholder = input.placeholder ? "" : "Search...";
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background: #fab;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    font-size: 18px;
    box-sizing: border-box;
    width: 250px;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0px 10px;
    border-radius: 5px;
    transition: all 0.5s;
  }
  .search {
    position: relative;
    left: -35px;
    top: 2px;
    cursor: pointer;
  }
  .active {
    width: 50px;
  }
}
</style>
