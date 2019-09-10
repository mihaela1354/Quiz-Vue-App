<template>
  <div id="app">
    <app-header  @onChangeHeader="changeHeader" :isLoggedIn="isLoggedIn"></app-header>
    <main>
      <router-view @onChangeHeader="changeHeader" :isLoggedIn="isLoggedIn"></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeaderVue from './components/common/Header.vue';
import FooterVue from './components/common/Footer.vue';

export default {
  name: 'app',
  data() {
    return {
      isLoggedIn: false
    }
  },
  components: {
    appHeader: HeaderVue,
    appFooter: FooterVue
  },
  methods: {
    changeHeader(e) {
      this.isLoggedIn = e;
    }
  }
}
</script>

<style>
</style>
