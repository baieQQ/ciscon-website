<template>
  <div class="main">
    <div v-if="$router.currentRoute.value.path === '/'"><NavBar></NavBar></div>
    <div v-else class="solid-nav-bar"><NavBar></NavBar></div>
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

.solid-nav-bar {
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 130px;
  background: #23263F;
}
</style>
