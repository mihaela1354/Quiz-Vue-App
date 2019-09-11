<template>
  <div id="app">
    <app-header @onChangeHeader="changeHeader" :isLoggedIn="isLoggedIn"></app-header>
    <main>
      <router-view @onChangeHeader="changeHeader" :isLoggedIn="isLoggedIn"></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { userService } from '@/mixins/user-service.js';

import HeaderVue from "./components/common/Header.vue";
import FooterVue from "./components/common/Footer.vue";

export default {
  name: "app",
  data() {
    return {
      isLoggedIn: false
    };
  },
  created() {
    this.isLoggedIn = this.isAuth;
  },
  methods: {
    changeHeader(e) {
      this.isLoggedIn = e;
    }
  },
  components: {
    appHeader: HeaderVue,
    appFooter: FooterVue
  },
  mixins: [ userService ]
};
</script>

<style>
</style>
