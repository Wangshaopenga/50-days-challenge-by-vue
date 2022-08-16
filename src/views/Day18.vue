<template>
  <div class="container" :style="bgImg">
    <i class="ri-arrow-left-line" @click="index = index - 1 < 0 ? index = 4 : index - 1"> </i>
    <div class="box">
      <div class="content" :style="bgImg">
      </div>
    </div>
    <i class="ri-arrow-right-line" @click="index = (++index) % 5"></i>
  </div>
</template> 

<script setup>
const data = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
]
const index = $ref(0)
const bgImg = $computed(() => {
  return { backgroundImage: `url('${data[index]}')` }
})

</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;

  .box {
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    height: 70vh;
    width: 70vw;
    position: relative;
    overflow: hidden;

    .content {
      height: 100vh;
      width: 100vw;
      background-size: cover;
      background-position: center center;
      z-index: 2;
      position: absolute;
      top: -15vh;
      left: -15vw;
      transition: .3s;
    }
  }

  i {
    z-index: 2;
    outline: none;
    width: 90px;
    height: 80px;
    cursor: pointer;
    padding: 20px;
    border: 2px solid #ffa500;
    background: rgba(0, 0, 0, .2);
    color: #fff;
    font-size: 40px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1;
  }
}
</style>
