<template>
<div>
    <h3>Login</h3>
    <form @submit.prevent="login()">
        <input class="input" v-model="username" type="text" name="username" placeholder="username" />
        <input class="input" v-model="password" type="password" name="password" placeholder="password" />
      <input class="login" type="submit" value="Login" />
      <div class="aditional">
      Don't have an account?
      <router-link class="text-warning" to="/register">Register</router-link>
    </div>
    </form>
</div>
</template>

<script>
import { userService } from '@/mixins/user-service.js';

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mixins: [ userService ]
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
.input{
  margin:auto;
  background-color: rgba(139, 195, 176, 0.171);
  width: 73%;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 5px;
  padding: 15px;
}
.login{
  background-color: rgba(193, 214, 207, 0.603);
  border-color:green;
  width: 80%;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 5px;
  padding: 15px;
}
.aditional a{
  text-decoration: none;
  color:green;
}
.aditional a:hover{
  cursor: pointer;
  font-size: 110%;
}
 
</style>