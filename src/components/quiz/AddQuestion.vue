<template>
  <div>
    <h2>Add New Question</h2>
    <form @submit.prevent="addQuestion">
      <section>
        <input
          class="input"
          type="text"
          name="questionTitle"
          placeholder="Enter the title of the question"
        />
        <div>
          <input class="form-radio" name="answer" type="radio" />
          <input class="label" type="text" placeholder="First Answer" />
        </div>
        <div>
          <input class="form-radio" name="answer" type="radio" />
          <input class="label" type="text" placeholder="Second Answer" />
        </div>
        <div>
          <input class="form-radio" name="answer" type="radio" />
          <input class="label" type="text" placeholder="Third Answer" />
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
  width: 60%;
  margin: auto;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h2 {
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: center;
}
form {
  background-color: rgb(226, 225, 225);
  box-shadow: 0 0 40px -10px #000;
  margin-bottom: 12rem;
  padding: 2rem 5rem 2rem 5rem;
}
.input {
  margin: auto;
  background-color: rgba(139, 195, 176, 0.171);
  width: 100%;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 5px;
  padding: 15px;
}
section {
  width: 100%;
}
div input {
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
  border: solid;
  border-color: rgba(0, 0, 0, 0.171);
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
.label {
  font: 15px/1.7 "Open Sans", sans-serif;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 10px;
  margin: auto;
  background-color: rgba(139, 195, 176, 0.171);
  width: 60%;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 5px;
}
form div {
  width: 100%;
  margin-bottom: 12px;
  margin-top: 12px;
  border: 5px;
  border-radius: 5px;
}
.add{
    background-color: rgba(193, 214, 207, 0.603);
  width: 105%;
  margin-bottom: 9px;
  margin-top: 9px;
  border-color: green;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
}
</style>