<template>
  <div>
    <template v-if="hasQuestions">
      <h2>Question #{{questionIndex}}: {{currentQuestion.title}}</h2>
      <form @submit.prevent="loadNextQuestion">
        <div v-for="(answer, index) in currentQuestion.answers" :key="index">
          <input
            class="form-radio"
            type="radio"
            :value="answer.content"
            v-model="currentQuestionAnswer"
            checked
          />
          <label>{{answer.content}}</label>
        </div>
        <input class="next" type="submit" value="Next" />
      </form>
      <h1>{{time}}</h1>
    </template>
    <template v-else>
      <h1>Your score is:</h1>
      <p class="score">{{scorePercentage}}/100</p>
    </template>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";

import { questionService } from '@/mixins/question-service.js';
import { quizService } from '@/mixins/quiz-service.js';


export default {
  data() {
    return {
      quizId: this.$route.params.id,
      quiz: null,
      questions: [],
      currentQuestion: null,
      hasQuestions: true,
      currentQuestionAnswer: "",
      rightAnswer: "",
      questionIndex: 0,
      score: 0,
      time: 60,
      interval: null
    };
  },
  async created() {
    this.quiz = await this.getById();
    this.questions = await this.getAllQuestions(this.quiz.questionIds);

    this.setCurrentQuestion();

    this.interval = setInterval(() => {
      this.time--;
    }, 1000);
  },
  methods: {
    loadNextQuestion() {
      if (this.currentQuestionAnswer === "") {
        return;
      }

      if (this.currentQuestionAnswer === this.rightAnswer) {
        this.score++;
      }

      this.hasQuestions = this.questionIndex < this.questions.length;

      if (this.hasQuestions) {
        this.setCurrentQuestion();
      }
    },
    setCurrentQuestion() {
      this.currentQuestion = this.questions[this.questionIndex++];
      this.rightAnswer = this.currentQuestion.answers.find(
        q => q.isRight
      ).content;
    }
  },
  computed: {
    scorePercentage() {
      return Math.trunc((this.score / this.questions.length) * 100);
    }
  },
  watch: {
    time(next, previous) {
      if (next === 0) {
        this.hasQuestions = false;
        clearInterval(this.interval);
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mixins: [ questionService, quizService ]
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
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
form {
  background-color: rgb(226, 225, 225);
  box-shadow: 0 0 40px -10px #000;
  margin-bottom: 12rem;
  padding: 2rem 5rem 2rem 5rem;
}
div input,
label {
  display: inline-block;
  margin: 5px;
}
.form-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  position: relative;
  background-color: #f1f1f1;
  color: #666;
  top: 10px;
  height: 30px;
  width: 30px;
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 7px;
  outline: none;
}
.form-radio:checked::before {
  position: absolute;
  font: 13px/1 "Open Sans", sans-serif;
  left: 11px;
  top: 7px;
  content: "\02143";
  transform: rotate(40deg);
}
.form-radio:hover {
  background-color: #f7f7f7;
}
.form-radio:checked {
  background-color: #f1f1f1;
}
label {
  font: 15px/1.7 "Open Sans", sans-serif;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  font-size: 19px;
  text-align: left;
  padding-left: 20px;
}
form div {
  background-color: rgba(123, 143, 136, 0.171);
  width: 100%;
  margin-bottom: 12px;
  margin-top: 12px;
  border: 5px;
  border-radius: 5px;
}
.next {
  background-color: rgba(193, 214, 207, 0.603);
  width: 100%;
  margin-bottom: 9px;
  margin-top: 9px;
  border-color: green;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
}
.score {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 25px;
  color: darkgreen;
}
</style>