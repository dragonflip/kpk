<template>
  <div class="page-container">
    <div class="container">
      <h3 class="my-4">Новини</h3>
      <div class="mb-4 mx-auto">
        <input
          class="form-control search"
          type="search"
          placeholder="Пошук..."
          autofocus
          style="width: 60% !important"
        />
      </div>
      <router-link
        class="mb-2 button mr-auto ml-auto mr-md-0 add-news"
        to="/add-news"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-calendar-plus-fill"
          viewBox="0 0 20 20"
        >
          <path
            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0z"
          />
        </svg>
        Створити новину
      </router-link>
      <div class="row mt-4">
        <div class="col-md-3 col-6">
          <div class="card">
            <img
              alt="news"
              class="news-image"
              src="https://img.pravda.com/images/doc/f/c/fc1f2f4-karantyn-tyn.jpg"
            />
            <h6 class="mx-3 my-3">
              <strong>Карантин продовжено до 07.03</strong>
            </h6>
            <hr class="mx-3" />
            <router-link to="/update-news" class="mx-2 my-2 text-muted">
              Переглянути
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-right-short mt-1"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="card">
            <img
              alt="news"
              class="news-image"
              src="https://img.pravda.com/images/doc/f/c/fc1f2f4-karantyn-tyn.jpg"
            />
            <h6 class="mx-3 my-3">
              <strong>Карантин продовжено до 07.03</strong>
            </h6>
            <hr class="mx-3" />
            <router-link to="#" class="mx-2 my-2 text-muted view-news">
              Переглянути
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-right-short mt-1"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  width: fit-content;
}

.search {
  position: inherit;
  display: unset;
}

.card {
  border-radius: 0;
}

.news-image {
  height: 150px;
  object-fit: cover;
}
.card a {
  font-size: 14px;
}
.view-news:hover {
  color: black !important;
  text-decoration: none;
}
.add-news {
  color: white !important;
}
@media (max-width: 768px) {
  .news-image {
    height: 120px;
  }
}
</style>