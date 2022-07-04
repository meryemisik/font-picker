import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


import McFontpicker from '@mikk3lro/mc-fontpicker';
import '@mikk3lro/mc-fontpicker/dist/mc-fontpicker.css';

Vue.component("McFontpicker", McFontpicker);
new Vue({
  router,
  
  render: h => h(App)
}).$mount('#app')
