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
            value="Карантин продовжено до 07.03"
          />
          <label class="mt-3">Обкладинка: </label>
          <button class="ml-4 button">Завантажити нову</button>
          <label class="mt-3">Текст новини: </label>
        </div>
        <div class="news-text">Тут редактор</div>
        <div class="mt-5">
          <button class="my-2 mx-2 d-inline button gray">
            Попередній перегляд
          </button>
          <button class="my-2 mx-2 d-inline button">Створити</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.news-text {
  height: 60vh;
  background-color: rgb(245, 245, 245);
}

.gray {
  background-color: rgb(117, 117, 117);
}

.button {
  width: 220px;
}
</style>