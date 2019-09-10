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
          console.log(data);
          this.$router.push('/');
        })
        .catch(console.error);
    }
  }
}