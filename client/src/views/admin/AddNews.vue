<template>
  <div class="page-container">
    <div class="container">
      <form>
        <div class="mt-4">
          <h4>Створення новини</h4>
        </div>
        <div class="text-left mt-4">
          <label>Заголовок новини: </label>
          <input
            type="text"
            class="ml-4 w-50 w-md-100 form-control"
            maxlength="50"
            required
          />
          <label class="mt-3">Обкладинка: </label>
          <button class="ml-4 button" @click="upload()">Завантажити</button>
          <label class="mt-3">Текст новини: </label>
        </div>
        <vue-editor v-model="content"></vue-editor>
        <div class="my-5">
          <button class="mx-2 d-inline button admin-button gray">
            Попередній перегляд
          </button>
          <button class="mx-2 d-inline button admin-button">Створити</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
  methods: {
    upload() {
      alert("Воно не робе");
    },
  },
  data() {
    return {
      content:
        "<h1>Some initial content</h1> <i><b>лдакдоадойдйрйакцлайкц</b></i>",
    };
  },
};
</script>
