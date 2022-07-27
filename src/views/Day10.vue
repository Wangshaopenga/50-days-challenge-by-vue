<template>
  <div class="container">
    <div class="content">
      <h3>Don't Laugh Challenge</h3>
      <div ref="content">
        What do you call a guy lying on your doorstep?Matt.
      </div>
      <button @click="getJoke">Get Another Joke</button>
    </div>
  </div>
</template>

<script setup>
const content = $ref();
const getJoke = () => {
  //   console.log(content.innerHTML);
  const xhr = new XMLHttpRequest();
  xhr.open("get", "https://icanhazdadjoke.com");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4)
      if (xhr.status >= 200 && xhr.status < 300) {
        content.innerHTML = JSON.parse(xhr.response).joke;
      }
  };
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background: #686de0;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    background: #fff;
    width: 800px;
    height: 350px;
    border-radius: 10px;
    text-align: center;
    padding: 50px 20px;
    h3 {
      // width: 620px;
      // background: red;
      color: #aaa;
      letter-spacing: 2px;
    }
    div {
      font-size: 30px;
      letter-spacing: 1px;
      line-height: 40px;
      margin: 50px auto;
      max-width: 600px;
    }
    button {
      width: 200px;
      height: 50px;
      border: none;
      border-radius: 10px;
      background: #9f68e0;
      color: #fff;
      &:active {
        transform: scale(98%);
      }
    }
  }
}
</style>
