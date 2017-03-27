import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './routeConfig'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading'

Vue.use(VueRouter);
Vue.use(Loading);

//axios 的配置
axios.interceptors.request.use(function (config) {//send request
    //配置发送请求的信息
    store.dispatch('showLoading');
    return config;
},function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    //配置发送请求的信息
    store.dispatch('hideLoading');
    console.log('axios:'+response);
    return response;
},function (error) {
    return Promise.reject(error);
});

Vue.prototype.$http=axios;

const router=new VueRouter({
  mode:'history',
  scrollBehavior:()=>({y:0}),
  routes:routerConfig
});



require('./assets/css/base.css');//全局引入

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
