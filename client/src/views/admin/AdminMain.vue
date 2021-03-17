<template>
  <div class="page-container">
    <div class="container mt-5">
      <div>
        <router-link class="ml-3 button" to="/admin-news">
          <img src="@/assets/news.svg" />
          Новини
        </router-link>
        <router-link class="ml-3 button" to="/admin-department">
          <img src="@/assets/reading-book.svg" class="mb-1" />
          Відділення
        </router-link>
        <router-link class="ml-3 button" to="/admin-specialty">
          <img src="@/assets/graduation-hat.svg" class="mb-1" />
          Спеціальності
        </router-link>
        <router-link class="ml-3 button" to="#">
          <img src="@/assets/book.svg" class="mb-1" />
          Циклові комісії
        </router-link>
        <router-link class="ml-3 button" to="#">
          <img src="@/assets/person.svg" />
          Користувачі
        </router-link>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: left;
}
.button {
  width: fit-content;
  display: inline-block;
}

@media (max-width: 992px) {
  .button {
    width: 200px;
    margin-left: 0;
    margin-top: 1rem;
    position: relative;
  }

  .container {
    text-align: center;
  }
}
</style>