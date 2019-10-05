import Vue from 'vue'
import App from './App.vue'
import  HomeComponent  from  './components/HomeComponent.vue'
import  AboutComponent  from  './components/AboutComponent.vue'

//import vue-router
import  Router  from  'vue-router'
Vue.use(Router)

// import ionic
import IonicVue from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
Vue.use(IonicVue);

const  router  =  new  Router({
  routes: [
  {
  path:  '/',
  name:  'HomeComponent',
  component:  HomeComponent
  },
  {
  path:  '/AboutComponent',
  name:  'AboutComponent',
  component:  AboutComponent
  }
  ]
  })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
