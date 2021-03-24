<template>
  <div class="page-container">
    <div class="main-page">
      <img src="@/assets/college.jpg" class="image back" alt="background" />
      <div class="main-container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <h2 class="name">
              <strong>
                Коломийський <br />
                політехнічнй фаховий коледж <br />
                НУ "Львівська політехніка"
              </strong>
            </h2>
          </div>
          <div class="col-lg-6 col-12">
            <img
              src="@/assets/college-logo.png"
              class="d-inline-block logo"
              width="50%"
              alt="logo"
            />
          </div>
        </div>
      </div>

      <div class="info">
        <div class="row">
          <div class="col">
            <img
              src="@/assets/knowledge.svg"
              class="d-inline-block mt-3 icon"
              alt="icon"
            />
            <p class="description">
              Новітні методи <br />
              навчання
            </p>
          </div>
          <div class="col">
            <img
              src="@/assets/teacher.svg"
              class="d-inline-block mt-3 icon"
              alt="icon"
            />
            <p>Круті<br />викладачі</p>
          </div>
          <div class="col">
            <img
              src="@/assets/book.svg"
              class="d-inline-block mt-3 icon"
              alt="icon"
            />
            <p>Велика<br />бібліотека</p>
          </div>
          <div class="col">
            <img
              src="@/assets/knowledge.svg"
              class="d-inline-block mt-3 icon"
              alt="icon"
            />
            <p>
              Новітні методи <br />
              навчання
            </p>
          </div>
          <div class="col">
            <img
              src="@/assets/knowledge.svg"
              class="d-inline-block mt-3 icon"
              alt="icon"
            />
            <p>
              Новітні методи <br />
              навчання
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="main-info">
      <div class="my-5 news container">
        <h5>Останні новини</h5>
        <div class="row">
          <div class="mt-3 col-lg-4 col-12" v-for="i in 3" :key="i">
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
                    17.02.2021 року на засіданні Кабміну було прийнято
                    постанову, яка передбачає повернення до моделі адаптивного
                    карантину. Про це зазначено на сайті Кабміну. В
                    пояснювальній записці до проєкту постанови пропонується:
                    продовжити на території України термін дії карантину до 30
                    квітня 2021 року; Нагадаємо, що до 28.02.2021 р.
                    продовжується всеукраїнський карантин, встановлений
                    постановою Уряду від 09.12.2020 р. № 1236. Про це ми писали
                    у матеріалі.
                  </p>

                  <router-link to="/news-details" class="button">
                    Детальніше
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h5 class="mb-3">Спеціальності</h5>
        <div class="slider">
          <button class="arrow arrow-left" @click="prev()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-caret-left-fill"
              viewBox="0 0 20 20"
            >
              <path
                d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
              />
            </svg>
          </button>
          <div
            class="slides"
            :style="{
              transform: `translateX(${index}%)`,
              transition: `transform 0.5s ease`,
            }"
          >
            <div class="slide-container">
              <img
                src="@/assets/specialties.jpg"
                class="img spec-img"
                alt="specialties"
              />
              <div class="slide-info" style="transform: translate(0%, -50%)">
                <h5 class="mb-4 title">
                  <strong>Денне відділення комп'ютерних технологій</strong>
                </h5>
                <p>Cпеціальності:</p>
                <p>- 121 «Інженерія програмного забезпечення»</p>
                <hr />
                <p>
                  - 151 «Автоматизація та комп’ютерно-інтегровані технології»
                </p>
              </div>
            </div>
            <div class="slide-container">
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 "
                class="img spec-img"
                alt="specialties"
              />
              <div class="slide-info" style="transform: translate(100%, -50%)">
                <h5 class="mb-4 title">
                  <strong>Денне економічне відділення</strong>
                </h5>
                <p>Cпеціальності:</p>
                <p>- 071 «Облік і оподаткування»</p>
                <p>- 072 «Фінанси, банківська справа та страхування»</p>
                <p>- 073 «Менеджмент»</p>
                <p>- 075 «Маркетинг»</p>
              </div>
            </div>
            <img
              src="@/assets/college.jpg"
              class="img spec-img"
              alt="specialties"
            />
          </div>
          <button class="arrow arrow-right" @click="next()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-caret-right-fill"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    next() {
      if (this.index === -200) {
        this.index = 0;
      } else {
        this.index -= 100;
      }
    },
    prev() {
      if (this.index === 0) {
        this.index = -200;
      } else {
        this.index += 100;
      }
    },
  },
};
</script>

<style>
.page-container {
  min-height: 100vh;
}
.main-page {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}

.name {
  margin-top: 40%;
  margin-left: 20%;
}

.logo {
  margin-top: 30%;
}

h2 {
  text-align: left;
  color: white;
}

.info {
  position: absolute; /* Important */
  width: 100%; /* Important */
  bottom: 0; /* Important */
  color: white;
  /* height: 20%; */
  background-color: rgba(0, 0, 0, 0.726);
}

.back {
  filter: brightness(30%);
  width: 100%;
}

.row {
  margin: 0;
  height: 100%;
}

.main-container {
  position: absolute;
  width: 100%;
}

.icon {
  width: 25%;
}

.button {
  background-color: #13cd95;
  border: none;
  color: white;
  padding: 12px 15px;
  text-align: center;
  display: block;
}

.button:hover {
  background-color: #13bb88;
  color: white;
}

a:hover {
  text-decoration: none;
}

.main-info {
  margin-bottom: 100px;
}

.slide-container {
  display: contents;
  position: relative;
}

.slide-info {
  position: absolute;
  color: white;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px 40px;
}

.spec-img {
  filter: brightness(30%);
  height: 450px;
  min-width: 100%;
  max-width: 100%;
  object-fit: cover;
  position: relative;
}

.title {
  display: inline-block;
  position: relative;
  padding-bottom: 20px;
}

.title::after {
  content: "";
  background: #13bb88;
  padding: 3px 120px;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}

.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.slides {
  display: flex;
  flex-direction: row;
}
.arrow {
  display: block;
  position: absolute;
  z-index: 1000;
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.527);
}
.arrow-left {
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
.arrow-right {
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}

@media (max-width: 500px) {
  .description {
    font-size: 11px;
  }
  .back {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  .name {
    font-size: 22px;
    margin-top: 30%;
    margin-left: 0;
    text-align: center;
  }

  .logo {
    margin-top: 0%;
    width: 45%;
  }
}

@media (min-width: 500px) and (max-width: 992px) {
  .description {
    font-size: 11px;
  }
  .back {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  .name {
    font-size: 22px;
    margin-top: 15%;
    margin-left: 0;
    text-align: center;
  }

  .logo {
    margin-top: 0%;
    width: 20%;
  }
  a:hover {
    color: black !important;
    text-decoration: none;
  }
}
</style>