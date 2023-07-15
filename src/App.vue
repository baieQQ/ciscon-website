<template>
  <div class="main">
    <NavBar></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './layout/NavBar.vue';
import Footer from './layout/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  },
  name: 'App'
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.main{
  position: relative;
  margin: 0 auto;
  background: #23263F;
  max-width: 1920px;
}

html {
  height: 100%;
}

body {
  min-height: 100vh;
  height: 100%;
  overflow-x: hidden;
  background: #23263F
}

.content {

}

</style>
