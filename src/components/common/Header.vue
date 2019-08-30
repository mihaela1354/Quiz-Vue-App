<template>
  <header>
    <router-link class="left-link" to="/">Home</router-link>
    <template v-if="!isLoggedIn">
      <router-link class="right-link" to="/login">Login</router-link>
      <router-link class="right-link" to="/register">Register</router-link>
    </template>
    <template v-else>
      <button id="logout">Logout</button>
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {

  }
};
</script>

<style scoped>
header{
  background-color: rgba(19, 18, 18, 0.904);
  padding: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
header a{
  color: white;
}
a{
  display:inline-block;
  width:80px;
  text-decoration: none;
  background-color: rgba(128, 128, 128, 0.377);
  margin-left: 15px;
  padding:5px;
  border-radius: 5px;
  text-align: center;
}
.right-link{
  
  float:right;

}
</style>