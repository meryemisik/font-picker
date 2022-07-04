import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import McFontpicker from '@mikk3lro/mc-fontpicker';
import '@mikk3lro/mc-fontpicker/dist/mc-fontpicker.css';

Vue.component("McFontpicker", McFontpicker);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
