<template>
  <div>
    <div class="main">
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
            <p class="description">Новітні методи <br> навчання</p>
            </div>
            <div class="col">
                <img
              src="@/assets/teacher.svg"
              class="d-inline-block mt-3 icon"
              alt="icon"
            />
            <p>Круті<br>викладачі</p>
            </div>
            <div class="col">
                <img
              src="@/assets/book.svg"
              class="d-inline-block mt-3 icon"
              alt="icon"
            />
            <p>Велика<br>бібліотека</p>
            </div>
            <div class="col">
                <img
              src="@/assets/knowledge.svg"
              class="d-inline-block mt-3 icon"
              alt="icon"
            />
            <p>Новітні методи <br> навчання</p>
            </div>
            <div class="col">
                <img
              src="@/assets/knowledge.svg"
              class="d-inline-block mt-3 icon"
              alt="icon"
            />
            <p>Новітні методи <br> навчання</p>
            </div>
          </div>
        </div>
      
      </div>
      <div class="main-info">
        Тут буде інфа про то, які ми крутецькі
      </div>
    </div>
  </div>
</template>

<style>
.main-page {
  width: 100%;
  display: flex;
  position:relative;
  flex-direction: column;
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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
  background-color: #13CD95;
  border: none;
  color: white;
  padding: 12px 15px;
  text-align: center;
  display: block;
}

.button:hover{
  background-color: #13bb88;
  color: white;
}

a:hover{
  text-decoration: none;
}

.main-info{
  height: 200px;
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