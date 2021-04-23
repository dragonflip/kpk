<template>
  <div class="page-container">
    <div class="container">
      <div class="row">
        <div class="mt-3 col-lg-4 col-12" v-for="news in news" :key="news.id">
          <p id="date"> {{ news.date }} </p>
          <div class="card">
            <img
              alt="news"
              class="news-image"
              :src="news.image"
            />
            <div class="news-title">
              <h6>
                <strong> {{news.name}}</strong>
              </h6>
              <div class="news-details" >
               <p v-html="news.content">
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

<script>
import axios from 'axios'
export default {
  data() {
    return {
      news: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("/api/add-news/");
      this.news = res.data;
    } catch (e) {
      console.error(e);
    }
    console.log(this.news)
  },
};
</script>

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

#date {
  margin: 0;
  text-align: right;
  font-size: 12px;
  color: rgb(134, 134, 134);
}

.news-details p {
  text-align: left;
  font-size: 13px;
  overflow: hidden;
  display: block;
  word-wrap: break-word;
  max-height: 4.5em;
  line-height: 1.5em;
  margin-bottom: 4px;
  /*display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines 
  -webkit-box-orient: vertical; */
}

.news-details p img{
  display: none;
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