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
   margin-top: 50px;
    text-align: center;
    background-color: rgba(19, 18, 18, 0.904);
    padding: 20px 0;
    color: white;
    position:absolute;
    bottom:0;
    width:100%;
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
  width:10%;
  margin-right:10px;
}
</style>