<!-- 个人感觉用组件再用props传递数据最好,本着一挑战一文件原则不封装组件了 -->
<template>
  <div class="container">
    <div class="header">
      <input type="text" @keydown.enter="search" v-model="info" placeholder="Search...">
    </div>
    <div class="moves">
      <div class="card" v-for="p in data" :key="p">
        <img :src="`${IMG_PATH}${p.poster_path}`" :alt="p.original_title">
        <div class="info">
          <span class="name">{{ p.original_title }}</span>
          <span class="score" :style="color(p.vote_average)">{{ p.vote_average }}</span>
        </div>
        <div class="desc">
          <div class="title">
            Overview
          </div>
          <div class="detail">
            When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her
            people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced
            arsenal.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
let data = $ref()
let info = $ref('')
const color = (p) => {
  if (p >= 8) return { color: 'green' }
  else if (p >= 5) return { color: 'orange' }
  else return { color: 'red' }
}
const search = () => {
  console.log(1)
  axios.get(`${SEARCH_API}${info}`).then(res => {
    // console.log(res)
    data = res.data.results
  })
}
axios.get(API_URL).then(res => {
  data = res.data.results
})
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  background: #22254b;
  overflow: hidden;

  .header {
    padding: 1rem;
    padding-right: 2.5rem;
    display: flex;
    justify-content: flex-end;
    background: #373b69;
    overflow: hidden;
    input {
      background-color: transparent;
      border: 2px solid #22254b;
      border-radius: 50px;
      font-family: inherit;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      color: #fff;
    }
  }

  .moves {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .card {
      width: 300px;
      margin: 1rem;
      background: #373b69;
      box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
      position: relative;
      overflow: hidden;
      border-radius: 3px;

      img {
        width: 100%;
      }

      .info {
        padding: 18px;
        display: flex;
        justify-content: space-between;
        padding: .5rem 1rem 1rem;
        letter-spacing: .5px;

        .name {
          display: inline-block;
          font-size: 1.3rem;
          font-weight: bold;
          color: #eee;
        }

        .score {
          display: inline-block;
          width: 45px;
          height: 30px;
          background: #22254b;
          text-align: center;
          line-height: 30px;
          font-weight: bold;
        }
      }

      .desc {
        background: #fff;
        padding: 2rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        max-height: 100%;
        min-height: 60%;
        transform: translateY(101%);
        transition: all .3s ease-in;

        .title {
          font-weight: 600;
          font-size: 20px;
          padding: 20px 0;
        }
      }

      &:hover {
        .desc {
          transform: translateY(0%);
        }
      }
    }
  }
}
</style>