<template>
  <footer>
    <div>
      © {{getYear}} Copyright:
      <router-link to="/">QuizPlatform.com</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    getYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
footer{
  background-color: rgba(19, 18, 18, 0.904);
  padding: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  width: -webkit-fill-available;
    bottom: 0;
    height: 20px;
    margin: 0 auto;
    display:flex;
}
footer div a{
  display:inline-block;
}
footer div{
  margin:0 auto;
  display:inline-block;
  width:50%;
  color: white;
  text-align:center;
}
a{
  color: white;
  text-decoration: none;
  width:50%;
  margin-right:10px;
}
</style>