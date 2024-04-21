import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResourceEsm from "vue-resource";

Vue.config.productionTip = false
Vue.use(VueResourceEsm)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
