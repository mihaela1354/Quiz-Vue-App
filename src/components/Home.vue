<template>
  <div>
    <section v-if="isLoggedIn" class="homeSection">
      <h2>List of All Quizes</h2>
      <ul class="quiz-step step1 current">
        <li class="quiz" v-for="quiz in quizList" :key="quiz._id">
          <router-link :to="{ name: 'Quiz', params: { id: quiz._id }}">{{quiz.title}}</router-link>
          <router-link v-if="isAuthor(quiz)" class="edit" :to="{ name: 'Edit', params: { id: quiz._id }}">Edit</router-link>
          <router-link
            class="edit"
            v-if="isAuthor(quiz)"
            :to="{ name: 'AddQuestion', params: { id: quiz._id }}"
          >Add Question</router-link>
        </li>
      </ul>
      <div>
        <router-link id="addQuiz" to="/quiz/add">Add Quiz</router-link>
      </div>
    </section>
    <section v-else>
      <h2>Welcome to Quiz App!</h2>
      <p class="welcome"><router-link to="/login"> Please Login</router-link></p>
    </section>
  </div>
</template>

<script>
import requester from "@/data/requester.js";
import { quizService } from "@/mixins/quiz-service.js";

export default {
  props: ["isLoggedIn"],
  data() {
    return {
      quizList: null
    };
  },
  beforeRouteEnter(to, from, next) {
    quizService.methods.listAllQuizzes(next);
  },
  methods: {
    isAuthor(quiz) {
      return sessionStorage.getItem('userId') === quiz._acl.creator;
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
.welcome {
  text-align: center;
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