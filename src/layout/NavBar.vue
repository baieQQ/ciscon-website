<template>
  <div class="nav-bar">
    <div class="links">
      <router-link to="/" class="link">
        <h2>主頁</h2>
      </router-link>
      <div class="link">
        <h2>議程表</h2>
      </div>
      <img class="logo" src='../assets/logo_1.png'>
      <router-link to="/staff" class="link">
        <h2>行政團隊</h2>
      </router-link>
      <div class="link">
        <h2>合作社群</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="sass" scoped>
.nav-bar
  z-index: 100
  position: fixed
  top: 0
  left: 50%
  width: 70%
  height: 150px
  transform: translate(-50%, 0)
  margin-top: 20px 0
  padding: 0px 100px

  display: flex
  justify-content: center
  align-items: center
  .links
    width: 100%
    height: 40px
    display: flex
    justify-content: center
    align-items: center
    gap: 75px

    .logo 
      display: flex
      height: 100px
      flex-direction: column
      justify-content: center
      align-items: center
      gap: 10px
    .link
      display: flex
      justify-content: center
      align-items: center
      min-width: 150px
      padding: 5px 10px
      border-radius: 20px
      background: #585F9F
      color: white
      transition: all .5s ease-in
      &:hover
        background: pink
        cursor: pointer

</style>
