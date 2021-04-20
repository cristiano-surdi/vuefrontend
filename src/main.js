import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

import router from './config/router'
import './config/axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(BootstrapVue);
