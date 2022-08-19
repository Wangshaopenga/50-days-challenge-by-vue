<template>
  <div class="container">
    <button>1235</button>
    <div class="clock-container">
      <div class="clock">
        <div class="needle hour" :style="hour"></div>
        <div class="needle minute" :style="minute"></div>
        <div class="needle second" :style="second"></div>
        <div class="center-pointer"></div>
      </div>
      <div>
        <div class="time">
          {{ now.getHours() % 12 }}:
          {{ now.getMinutes() > 10 ? now.getMinutes() : `0` + now.getMinutes() }}
          {{ now.getHours() > 12 ? 'PM' : 'AM' }}
        </div>
        <div class="date">
          {{ days[now.getDay()] }},{{ months[now.getMonth()] }}
          <span>{{ now.getDate() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
import { useNow } from '@vueuse/core'
// const now = useNow()
const now = $ref(useNow())
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const hour = $computed(() => {
  let deg = (now.getHours() % 12) / 12 * 360
  return {
    transform: `translate(-50%, -100%) rotate(${deg}deg)`
  }
})
const minute = $computed(() => {
  let deg = (now.getMinutes() % 60) / 60 * 360
  return {
    transform: `translate(-50%, -100%) rotate(${deg}deg)`
  }
})
const second = $computed(() => {
  let deg = (now.getSeconds() % 60) / 60 * 360
  return {
    transform: `translate(-50%, -100%) rotate(${deg}deg)`
  }
})
const isDark = $ref(false)
const color = '#fab'
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: v-bind(isDark);
  overflow: hidden;

  .clock-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .clock {
      width: 200px;
      height: 200px;
      position: relative;

      .needle {
        background: #000;
        position: absolute;
        height: 100px;
        top: 50%;
        left: 50%;
        width: 3px;
        transition: all 0.5s ease-in;
        transform-origin: bottom center;
        transform: translate(-50%, -100%) rotate(0deg);
      }

      .hour {
        transform: translate(-50%, -100%) rotate(0deg);
        height: 65px;
      }

      .minute {
        transform: translate(-50%, -100%) rotate(100deg);
      }

      .second {
        transform: translate(-50%, -100%) rotate(270deg);
        background: #e74c3c;
      }

      .center-pointer {
        background: #e74c3c;
        height: 10px;
        width: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform: translate(-50%, -50%);

        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 5px;
          background: #000;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .time {
      font-size: 60px;
      // font-weight: bold;
      text-align: center;
    }

    .date {
      text-align: center;
      color: #aaa;
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;

      span {
        display: inline-block;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #000;
      }
    }
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>