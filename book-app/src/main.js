import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import moment from 'moment'
import Vuelidate from 'vuelidate';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(moment.locale("es"));
moment.locale("es");

let back = window.location.host == 'localhost:8080'? 'http://localhost:5001/api/' : 'https://domainproduction.com/api/';
axios.defaults.baseURL=back

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
