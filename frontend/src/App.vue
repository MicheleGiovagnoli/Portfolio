<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    RouterView,
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <Router-view></Router-view>
  </main>
</template>

<style lang="scss">
@use'./styles/general.scss';

main {
  background-image: url(assets/background/endless-constellation.svg);
  background-attachment: fixed;
  min-height: 100vh;
}
</style>
