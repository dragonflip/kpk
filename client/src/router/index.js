import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/user/Main.vue'
import News from '../views/user/News.vue'
import NewsDetails from '../views/user/NewsDetails.vue'
import AdminMain from '../views/admin/AdminMain.vue'
import AdminNews from '../views/admin/AdminNews.vue'
import AddNews from '../views/admin/AddNews.vue'
import UpdateNews from '../views/admin/UpdateNews.vue'
import AdminSpecialty from '../views/admin/AdminSpecialty.vue'
import AdminDepartment from '../views/admin/AdminDepartment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/news-details',
    name: 'NewsDetails',
    component: NewsDetails
  },
  {
    path: '/admin',
    name: 'AdminMain',
    component: AdminMain
  },
  {
    path: '/admin-news',
    name: 'AdminNews',
    component: AdminNews
  },
  {
    path: '/add-news',
    name: 'AddNews',
    component: AddNews
  },
  {
    path: '/update-news',
    name: 'UpdateNews',
    component: UpdateNews
  },
  {
    path: '/admin-specialty',
    name: 'AdminSpecialty',
    component: AdminSpecialty
  },
  {
    path: '/admin-department',
    name: 'AdminDepartment',
    component: AdminDepartment
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
