import Vue from 'vue';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';


/*========== Import in <head> =============*/
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';




Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
});
