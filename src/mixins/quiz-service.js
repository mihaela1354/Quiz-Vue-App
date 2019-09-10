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
        .then(() => {
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
    },
    addQuestion() {
      const answers = [
        { content: this.firstAnswer, isRight: this.correct === 'first' },
        { content: this.secondAnswer, isRight: this.correct === 'second' },
        { content: this.thirdAnswer, isRight: this.correct === 'third' }
      ];

      const payload = {
        title: this.title,
        answers
      };

      requester.post('questions', 'appdata', 'Kinvey', payload)
        .then((res) => res.json())
        .then(() => {
          this.$router.push('/');
        })
        .catch(console.error);
    }
  }
}