import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home.vue';
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import Quiz from '@/components/quiz/Quiz.vue';
import AddQuiz from '@/components/quiz/AddQuiz.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/questions/:id',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/quiz/add',
      name: 'AddQuiz',
      component: AddQuiz
    }
  ]
})
