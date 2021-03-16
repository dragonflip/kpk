<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 col-12">
          <div class="text-center">
            <h4>
              <strong>Карантин продовжено до 07.03</strong>
            </h4>
          </div>
          <div class="mt-4">
            <img
              alt="news"
              class="news-image"
              src="https://img.pravda.com/images/doc/f/c/fc1f2f4-karantyn-tyn.jpg"
            />
          </div>
          <div class="mt-3">
            <p class="mb-5">
              17.02.2021 року на засіданні Кабміну було прийнято постанову, яка
              передбачає повернення до моделі адаптивного карантину. Про це
              зазначено на сайті Кабміну. В пояснювальній записці до проєкту
              постанови пропонується: продовжити на території України термін дії
              карантину до 30 квітня 2021 року; Нагадаємо, що до 28.02.2021 р.
              продовжується всеукраїнський карантин, встановлений постановою
              Уряду від 09.12.2020 р. № 1236. Про це ми писали у матеріалі.
            </p>
          </div>
        </div>
        <div class="col-md-1 col-0">
        </div>
        <div class="col-md-3 col-12">
          <h6 style="font-weight: 600; font-size: 18px">Інші новини</h6>
          <div class="row">
            <router-link to="#" v-for="i in 2" :key="i" >
            <div class="card">
                <div class="text-right p-0 text-muted">
                <h6 class="mb-0" style="font-size: 12px">
                  02.03.2021
                </h6>
              </div>
              <img
                alt="news"
                class="more-news p-0"
                src="https://need4study.com/uploads/institutions/images/2041596/.resized/564x400/user_photo_19926.jpg?v=1525205060"
              />
              <div>
                <h6 class="news-title">
                  <strong>Карантин продовжено до 07.03</strong>
                </h6>
              </div>
            </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: left;
}

.news-image {
  max-height: 60vh;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
}

.more-news{
    height: 120px;
    width: 100%;
    object-fit: cover;
}

.card{
    border: 0;
}

.news-title{
    font-size: 14px;
    color: rgb(87, 87, 87);
}

.news-title:hover{
    color: black !important;
}

.row{
    height: fit-content;
}
</style>