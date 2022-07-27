<template>
  <div class="container">
    <div class="content">
      <h1>Please Login</h1>
      <form>
        <div class="email">
          <input type="text" required />
          <br />
          <label>
            <span style="transition-delay: 0ms">E</span>
            <span style="transition-delay: 50ms">m</span>
            <span style="transition-delay: 100ms">a</span>
            <span style="transition-delay: 150ms">i</span>
            <span style="transition-delay: 200ms">l</span>
          </label>
        </div>
        <div class="password">
          <input type="password" required />
          <br />
          <label>
            <span style="transition-delay: 0ms">P</span>
            <span style="transition-delay: 50ms">a</span>
            <span style="transition-delay: 100ms">s</span>
            <span style="transition-delay: 150ms">s</span>
            <span style="transition-delay: 250ms">w</span>
            <span style="transition-delay: 300ms">o</span>
            <span style="transition-delay: 350ms">r</span>
            <span style="transition-delay: 400ms">d</span>
          </label>
        </div>
      </form>
      <button>Login</button>
      <p class="text">Don't have an account? <a href="#">Register</a></p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  background: #4682b4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  .content {
    height: 435px;
    width: 380px;
    background: rgba($color: #000000, $alpha: 0.4);
    box-sizing: border-box;
    padding: 20px 40px;
    border-radius: 10px;
    position: relative;
    div {
      position: relative;
      span {
        display: inline-block;
        font-size: 18px;
        min-width: 5px;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #fff solid;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 18px;
        color: #fff;
        &:focus,
        &:valid {
          outline: none;
          border-bottom-color: lightblue;
          & + br + label span,
          & + br + label span {
            color: lightblue;
            transform: translateY(-30px);
          }
        }
      }
      label {
        position: absolute;
        top: 15px;
        left: 0;
        pointer-events: none;
        span {
          transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
    }
    button {
      cursor: pointer;
      display: inline-block;
      width: 100%;
      background: lightblue;
      padding: 15px;
      font-family: inherit;
      font-size: 16px;
      border: 0;
      border-radius: 5px;
      &:active {
        transform: scale(0.98);
      }
    }
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    a {
      text-decoration: none;
      color: lightblue;
    }
  }
}
</style>
