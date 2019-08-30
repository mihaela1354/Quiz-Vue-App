<template>
  <div>
    <h2>Add New Quiz</h2>
    <form @submit.prevent="add">
      <section>
        <label for="quizName">Title:</label>
        <input class="input" type="text" name="quizTitle" placeholder="Enter the title of the quiz" />
      </section>
      <section>
        <h4>Add New Question</h4>
        <label for="questionTitle">Title:</label>
        <input
          class="input"
          type="text"
          name="questionTitle"
          placeholder="Enter the title of the question"
        />
        <div>
          <label for>First Answer:</label>
          <input class="form-radio" type="text" />
          <input class="form-radio" name="answer"  type="radio" />
        </div>
        <div>
          <label for>Third Answer:</label>
          <input class="form-radio" type="text" />
          <input class="form-radio" name="answer"  type="radio"/>
        </div>
        <div>
          <label for>Second Answer:</label>
          <input class="form-radio" type="text" />
          <input class="form-radio" name="answer" type="radio" />
        </div>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>

</style>