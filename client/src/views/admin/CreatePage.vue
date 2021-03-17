<template>
  <div class="page-container">
    <div class="container">
      <div class="mt-4">
        <h4>Створення сторінки</h4>
      </div>
      <div class="text-left">
        <label class="mt-3">Оберіть розміщення сторінки: </label>
        <b-form-select
          class="form-select w-50 d-block ml-4 w-md-100"
          @change="onChangeStep()"
          v-model="placing_step1"
        >
          <b-form-select-option value="1"> Хедер </b-form-select-option>
          <b-form-select-option value="2"> Футер </b-form-select-option>
        </b-form-select>

        <label class="mt-3">Оберіть розділ: </label>
        <b-form-select
          class="form-select w-50 w-md-100 d-block ml-4"
          v-model="placing_step2"
        >
          <b-form-select-option
            v-for="section in sections"
            :key="section"
            :value="section"
          >
            {{ section }}
          </b-form-select-option>
        </b-form-select>

        <label class="mt-3">Введіть URL-адресу сторінки: </label>
        <input
          type="text"
          class="ml-4 w-50 w-md-100 form-control"
          maxlength="50"
          required
        />
      </div>
      <div class="mt-3 text-left">
        <label>Текст новини: </label>
        <vue-editor v-model="content"></vue-editor>
      </div>
      <div class="my-5">
        <button class="mx-2 d-inline button admin-button gray">
          Попередній перегляд
        </button>
        <button class="mx-2 d-inline button admin-button">Створити</button>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },

  data() {
    return {
      placing_step1: 1,
      placing_step2: null,
      header_sections: ["Студенту", "Абітурієнту", "Про коледж"],
      footer_sections: ["Розділ1", "Розділ2", "Розділ3", "Розділ4"],
      sections: [],
    };
  },

  created() {
    this.sections = this.header_sections;
    this.placing_step2 = this.sections[0];
    console.log(this.sections);
  },

  methods: {
    onChangeStep: function () {
      console.log(this.sections);
      if (this.placing_step1 == 1) {
        this.sections = this.header_sections;
      }
      if (this.placing_step1 == 2) {
        this.sections = this.footer_sections;
      }
      this.placing_step2 = this.sections[0];
    },
  },
};
</script>

<style>
.gray {
  background-color: rgb(117, 117, 117);
}
.admin-button {
  width: 220px;
}
.gray:hover {
  background-color: rgb(109, 109, 109);
}
@media (max-width: 992px) {
    .w-md-100{
        margin-left: 0 !important;
        width: 100% !important;
    }
}
</style>