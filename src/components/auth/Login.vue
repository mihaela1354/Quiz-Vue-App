<template>
<div>
    <h3>Login</h3>
    <form @submit.prevent="login">
      <div>
          <span>
            <i class="fas fa-user"></i>
          </span>
        <input v-model="username" type="text" name="username" placeholder="username" />
      </div>
      <div>
          <span>
            <i class="fas fa-key"></i>
          </span>
        <input v-model="password" type="password" name="password" placeholder="password" />
      </div>
      <input type="submit" value="Login" />
          <div>
      Don't have an account?
      <router-link class="text-warning" to="/register">Register</router-link>
    </div>
    </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log(this.username);
      console.log("Logging In!");
    }
  }
};
</script>

<style scoped>
*{
  display:block;
  width: 60%;
  margin:auto;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h3{
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
form {
  background-color: rgb(226, 225, 225);
  box-shadow: 0 0 40px -10px #000;
  margin-bottom: 12rem;
  padding: 2rem 5rem 2rem 5rem;
}
</style>