import Vue from 'vue'
import App from './App.vue'

// import ionic
import IonicVue from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
Vue.use(IonicVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
