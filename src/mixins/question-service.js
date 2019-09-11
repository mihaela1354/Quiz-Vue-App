import requester from '@/data/requester.js';

export const questionService = {
  methods: {
    addQuestion() {
      const answers = [
        { content: this.firstAnswer, isRight: this.correctAnswer === 'first' },
        { content: this.secondAnswer, isRight: this.correctAnswer === 'second' },
        { content: this.thirdAnswer, isRight: this.correctAnswer === 'third' }
      ];

      const payload = {
        title: this.title,
        answers
      };

      requester.post('questions', 'appdata', 'Kinvey', payload)
        .then((res) => res.json())
        .then((question) => {
          requester.get(`quizzes/${this.$route.params.id}`, 'appdata', 'Kinvey')
            .then((res) => res.json())
            .then((quiz) => {
              quiz.questionIds.push(question._id);

              return requester.put(`quizzes/${this.$route.params.id}`, 'appdata', 'Kinvey', quiz)
            })
            .then((res) => res.json())
            .then(() => {
              this.$router.push('/');
            });
        })
        .catch(console.error);
    },
    editQuestion() {
      const id = this.currentQuestion._id;

      requester.put(`questions/${id}`, 'appdata', 'Kinvey', this.currentQuestion)
        .catch(console.error);
    },
    async getAllQuestions(questionIds) {
      const response = await requester
        .get(`questions?query={ "_id": { "$in": [ ${questionIds.map(q => `"${q}"`).join(", ")} ] } }`, 'appdata', 'Kinvey');

      return response.json();
    }
  }
}