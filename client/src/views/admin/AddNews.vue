<template>
  <div class="page-container">
    <div class="container">
      <form @submit.prevent="addNews()">
        <div class="mt-4">
          <h4>Створення новини</h4>
        </div>
        <div class="text-left mt-4">
          <label>Заголовок новини: </label>
          <input v-model.trim="NewsForm.name"
            type="text"
            name = "name"
            class="ml-4 w-50 w-md-100 form-control"
            maxlength="50"
            required
          />
          <label class="mt-3">Обкладинка: </label>
          <input
            type="file"
            ref="fileInput"
            name = "img"
            accept=".jpg,.jpeg,.png"
            hidden="hidden"
            @change="onFileChange"
            required
          />
          <div>
            <button
              type="button"
              class="mr-2 d-inline button"
              @click="upload()"
            >
              Оберіть файл
            </button>
            <span>{{ fileName }}</span>
          </div>
          <img :src="NewsForm.image" class="mt-2 uploaded-image" />

          <label class="mt-3">Текст новини: </label>
        </div>
        <vue-editor v-model="NewsForm.content"></vue-editor>
        <div class="my-5">
          <button class="mx-2 mt-2 d-inline button admin-button gray">
            Попередній перегляд
          </button>
          <button class="mx-2 mt-2 d-inline button admin-button" type="submit">Створити</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  components: {
    VueEditor,
  },

  data() {
    return {     
      fileName: "Файл не вибрано",
      NewsForm: {
        name: null,
        image: null,
        content: null,
      },
    };
  },

  methods: {
    upload() {
      this.$refs.fileInput.click();
    },

    onFileChange(event) {
      var fileData = event.target.files[0];
      this.fileName = fileData.name;

      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.NewsForm.image = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
    addNews() {
      axios.post("/add-news", {
        name: this.NewsForm.name,
        image: this.NewsForm.image,
        content: this.NewsForm.content,
      });
      this.$router.push({ name: "AdminNews" });
    },
  },
};
</script>

<style>
.uploaded-image{
  max-height: 150px;
  max-width: 80%;
  display: block;
}
</style>
