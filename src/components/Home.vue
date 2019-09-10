<template>
  <div>
    <h2>List of All Quizes</h2>
    <section class="homeSection">
      <ul class="quiz-step step1 current">
        <li class="quiz" v-for="quiz in quizList" :key="quiz.id">
          <router-link :to="{ name: 'Quiz', params: { id: quiz.id }}">{{quiz.title}}</router-link>
          <router-link class="edit" :to="{ name: 'Edit', params: { id: quiz.id }}">Edit</router-link>
          <router-link class="edit" :to="{ name: 'AddQuestion', params: { id: quiz.id }}">Add Question</router-link>
          <button class="edit" v-on:click="remove()">Delete</button>
        </li>
      </ul>
      <div>
        <router-link id="addQuiz" to="/quiz/add">Add Quiz</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import quizes from "@/data/quizes.json";

export default {
  data() {
    return {
      quizList: quizes
    };
  },
  created() {
    this.remove();
  },
  methods: {
    remove() {
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h2 {
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.homeSection {
  display: block;
  width: 60%;
  margin: auto;
  height: 30rem;
  margin-top: 1.5rem;
  background-color: rgb(226, 225, 225);
  box-shadow: 0 0 40px -10px #000;
  margin-bottom: 12rem;
  padding: 2rem 5rem 2rem 5rem;
}
li {
  list-style-type: none;
  background-color: rgba(123, 143, 136, 0.171);
  width: 100%;
  margin-bottom: 12px;
  margin-top: 12px;
  border: 5px;
  border-radius: 5px;
  padding: 15px;
}
li a:hover {
  cursor: pointer;
  color: black;
  font-size: 20px;
}
a {
  display: inline-block;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #333;
  cursor: pointer;
  font-size: 19px;
  text-align: left;
  padding-left: 20px;
}
.edit {
  float: right;
  margin-right: 20px;
  font-size: 15px;
}
.edit:hover {
  font-size: 17px;
}
button {
  background-color: transparent;
  border: none;
}
#addQuiz {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-style: solid;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: rgba(193, 214, 207, 0.603);
  width: 100%;
  margin-bottom: 9px;
  margin-top: 9px;
  border-color: darkgreen;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  position: relative;
}
</style>