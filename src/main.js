// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import store from './store'
import dayjs from 'dayjs'

Vue.config.productionTip = false

import animated from 'animate.css' 
Vue.use(animated)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// axios.defaults.baseURL = '/api'
// Vue.prototype.axios = axios;

Vue.prototype.dayjs = dayjs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
