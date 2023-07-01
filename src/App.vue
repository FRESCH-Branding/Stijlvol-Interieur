<template>
  <Header/>

  <router-view/>

  <Footer/>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: var(--Regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--Gray);
}
</style>