import Vue from 'vue'
import App from './App'
import router from './router'
//import tm from './assets/TweenMax.min';
//var TweenMax = require('./assets/TweenMax.min')
// 不要忘了调用此方法
//Vue.use(TweenMax)

//console.log(TweenMax)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
