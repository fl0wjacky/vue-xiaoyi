// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import login from './components/login'
import 'bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [{
  path: '/login',
  component: login
}]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
