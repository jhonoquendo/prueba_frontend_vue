import Vue from 'vue'
import App from './App.vue'

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(VueAxios,axios);

/*import { createClient } from 'pexels';
const client = createClient('563492ad6f917000010000016116809ae5cf43dabaf8c3336feba942');*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
