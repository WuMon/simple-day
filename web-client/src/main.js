// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store/index"

//初始化样式
import "./public/reset.css"
//引入rem
import "./public/rem.js"
//vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
//axios
import "./utils/axios.js"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
