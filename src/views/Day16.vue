<template>
<!-- water 部分存在一个缝隙不知道为什么 -->
  <div class="container">
    <div class="cup">
      <div class="remained">
        <span>2L</span>
        <small>Remained</small>
      </div>
      <div class="water">
        <span>30%</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .cup {
    width: 150px;
    height: 335px;
    border-radius: 0 0 35px 35px;
    border: 3px solid #144fc6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .remained {
      height: 100% - 40%;
      background: #fff;
      border-radius: 0 0 35px 35px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #144fc6;

      span {
        font-size: 18px;
        font-weight: bold;
      }
    }

    .water {
      height: 40%;
      background: #6ab3f8;
      border-radius: 0 0 34px 34px;
      color: #144fc6;
      font-weight: bold;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
