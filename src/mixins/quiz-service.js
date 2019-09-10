import requester from '@/data/requester.js';

export const quizService = {
  methods: {
    createQuiz() {
      const payload = {
        title: this.title,
        questionIds: []
      };

      requester.post('quizzes', 'appdata', 'Kinvey', payload)
        .then((res) => res.json())
        .then((data) => {
          this.$router.push('/');
        })
        .catch(console.error);
    },
    listAllQuizzes(next) {
      requester.get('quizzes', 'appdata', 'Kinvey')
        .then((res) => res.json())
        .then((data) => {
          next(vm => {
            vm.quizList = data;
          });
        })
        .catch(console.error);
    }
  }
}