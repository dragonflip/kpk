<template>
  <div class="page-container">
    <div class="container">
      <h3 class="m-4">Відділеня</h3>
      <div class="mb-4 mx-auto">
        <input
          class="form-control search"
          type="search"
          placeholder="Пошук..."
          autofocus
          style="width: 60% !important"
        />
      </div>
      <button class="mb-2 button mr-auto ml-auto mr-md-0" v-b-modal.modal-add>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-plus-square-fill"
          viewBox="0 0 20 20"
        >
          <path
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"
          />
        </svg>
        Нове відділення
      </button>
      <div class="table-responsive-lg">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Назва відділення</th>
              <th scope="col">Завідувач</th>
              <th scope="col">Контакти</th>
              <th scope="col">Фото</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Денне відділення комп’ютерних технологій</td>
              <td>Василишин Володимир Петрович</td>
              <td>тел. (03433)5-03-57, vasylyshyn8@i.ua</td>
              <td>
                <img
                  src="http://kpk-lp.com.ua/wp-content/uploads/2014/02/waszylyszyn.jpg"
                />
              </td>
              <td>
                <button
                  class="button"
                  style="background-color: rgb(36, 182, 175)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                    />
                  </svg>
                </button>
              </td>
              <td>
                <button
                  class="button"
                  style="background-color: rgb(245, 128, 128)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <b-modal
          id="modal-add"
          modal-class="dark"
          centered
          hide-footer
          hide-header
        >
          <form @submit.prevent="addDepartment()">
            <div
              class="d-block text-left"
              style="font-family: 'Montserrat', sans-serif"
            >
              <h3 class="mb-3"><strong>Додати відділення</strong></h3>
              <label>Назва відділення</label>
              <input type="text" class="form-control" required v-model.trim="DepartmentForm.name"/>

              <label class="mt-2">ПІБ завідувача</label>
              <input type="text" class="form-control" required v-model.trim="DepartmentForm.head" />

              <label class="mt-2">Контакти відділення</label>
              <input type="text" class="form-control" required v-model.trim="DepartmentForm.contacts" />

              <label class="mt-2">Фото</label>
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
          <img :src="DepartmentForm.image" class="mt-2 uploaded-image" />
            </div>
            <div class="mt-3 text-center">
              <button type="submit"
                class="mx-2 button add-button"
                @click="$bvModal.hide('modal-add')"
              >
                Додати
              </button>
              <button
                class="mx-2 button add-button"
                style="background-color: rgb(172, 172, 172)"
                @click="$bvModal.hide('modal-add')"
              >
                Назад
              </button>
            </div>
          <form>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      DepartmentForm: {
        name: null,
        head: null,
        contacts: null,
        image: null,
      },
      fileName: "Файл не вибрано",
    };
  },
  methods: {
    addDepartment() {
      axios.post("/admin-department", {
        name: this.DepartmentForm.name,
        head: this.DepartmentForm.head,
        contacts: this.DepartmentForm.contacts,
        image: this.DepartmentForm.image,
      });
      this.$router.push({ name: "AdminDepartment" });
    },
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
          this.DepartmentForm.image = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
  },
};
</script>

<style scoped>
td {
  text-align: left;
}

.button {
  width: fit-content;
}

.search {
  position: inherit;
  display: unset;
}

.add-button {
  display: inline-block;
  width: 40% !important;
}
</style>