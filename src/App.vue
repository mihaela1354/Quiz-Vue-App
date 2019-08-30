<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeaderVue from './components/common/Header.vue';
import FooterVue from './components/common/Footer.vue';

export default {
  name: 'app',
  components: {
    appHeader: HeaderVue,
    appFooter: FooterVue
  }
}
</script>

<style>

</style>
