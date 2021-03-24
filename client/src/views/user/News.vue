<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="mt-3 col-lg-4 col-12" v-for="i in 5" :key="i">
          <p id="date">07.02.2020</p>
          <div class="card">
            <img
              alt="news"
              class="news-image"
              src="https://img.pravda.com/images/doc/f/c/fc1f2f4-karantyn-tyn.jpg"
            />
            <div class="news-title">
              <h6>
                <strong>Карантин продовжено до 07.03</strong>
              </h6>
              <div class="news-details">
                <p>
                  17.02.2021 року на засіданні Кабміну було прийнято постанову,
                  яка передбачає повернення до моделі адаптивного карантину. Про
                  це зазначено на сайті Кабміну. В пояснювальній записці до
                  проєкту постанови пропонується: продовжити на території
                  України термін дії карантину до 30 квітня 2021 року;
                  Нагадаємо, що до 28.02.2021 р. продовжується всеукраїнський
                  карантин, встановлений постановою Уряду від 09.12.2020 р. №
                  1236. Про це ми писали у матеріалі.
                </p>

                <router-link to="/news-details" class="button details-button">
                  Детальніше
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.details-button {
  width: fit-content;
}

.card {
  border-radius: 0;
}

.news-image {
  height: 180px;
  width: 100%;
  object-fit: cover;
  position: relative;
  filter: brightness(50%);
}
.card a {
  font-size: 14px;
}
.card:hover .news-title {
  height: 100%;
}
.card:hover .news-title h6 {
  margin-top: 12px;
}
.card:hover .news-details {
  margin-top: 0px;
  height: 85%;
}
.details-button {
  padding: 6px 10%;
  display: inline-block;
}
.news-title {
  position: absolute;
  bottom: 0;
  height: 3.5em;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.726);
  transition: height 0.4s;
  overflow: hidden;
}

.news-details {
  color: white;
  margin-top: 80px;
  transition: margin-top 0.8s;
  font-size: 13px;
}

#date{
  margin: 0;
  text-align: right;
  font-size: 12px;
  color: rgb(134, 134, 134);
} 

.news-details p {
  text-align: left;
  font-size: 13px;
  overflow: hidden;
  display: inline-block;
  word-wrap: break-word;
  max-height: 4.5em;
  line-height: 1.5em;
  margin-bottom: 4px;
  /*display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines 
  -webkit-box-orient: vertical; */
}
.news-title h6 {
  color: white;
  transition: margin-top 0.4s;
}
@media (max-width: 768px) {
  .news-image {
    height: 180px;
  }
}
</style>