<template>
  <div>
    <h2>Add New Quiz</h2>
    <form @submit.prevent="add">
      <section>
        <h4>Title</h4>
        <input class="input" type="text" name="quizTitle" placeholder="Enter the title of the quiz" />
      </section>
      <section>
        <h4>Add New Question</h4>
        <input
          class="input"
          type="text"
          name="questionTitle"
          placeholder="Enter the title of the question"
        />
        <div>
          <input class="label" type="text" placeholder="First Answer"/>
          <input class="form-radio" name="answer" type="radio" />
        </div>
        <div>
          <input class="label" type="text" placeholder="Second Answer"/>
          <input class="form-radio" name="answer" type="radio" />
        </div>
        <div>
          <input class="label" type="text" placeholder="Third Answer"/>
          <input class="form-radio" name="answer" type="radio" />
        </div>
         <input class="add" type="submit" value="Add" />
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
* {
  display: block;
  width:60%;
  margin: auto;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h2{
    margin-bottom: 20px;
    margin-top: 10px;
    text-align:center;
}
h4{
    text-align: left;
    width:100%;
}
form {
 background-color: rgb(226, 225, 225);
  box-shadow: 0 0 40px -10px #000;
  margin-bottom: 12rem;
  padding: 2rem 5rem 2rem 5rem;
}
section div{
    display: inline-block;
}
.input{
  margin:auto;
  background-color: rgba(139, 195, 176, 0.171);
  width: 100%;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 5px;
  padding: 15px;
}

</style>