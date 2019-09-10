<template>
  <div>
    <h2>Add New Quiz</h2>
    <form @submit.prevent="add">
      <section>
        <h4>Title</h4>
        <input
          class="input"
          v-model="title"
          type="text"
          name="quizTitle"
          placeholder="Enter the title of the quiz"
        />
      </section>
      <input class="add" type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
import quizes from '@/data/quizes.json';

export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    add() {
      const id = this.uid;
      
      quizes[id] = {
        id,
        title: this.title,
        questionIds: []
      };


      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
* {
  display: block;
  width: 60%;
  margin: auto;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h2 {
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: center;
}
h4 {
  text-align: left;
  width: 100%;
}
form {
  background-color: rgb(226, 225, 225);
  box-shadow: 0 0 40px -10px #000;
  margin-bottom: 12rem;
  padding: 2rem 5rem 2rem 5rem;
}
.input {
  margin: auto;
  background-color: rgba(139, 195, 176, 0.171);
  width: 100%;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 5px;
  padding: 15px;
}
section {
  width: 100%;
}
div input {
  display: inline-block;
  margin: 5px;
}
.add {
  background-color: rgba(193, 214, 207, 0.603);
  width: 105%;
  margin-bottom: 9px;
  margin-top: 9px;
  border-color: green;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
}
</style>