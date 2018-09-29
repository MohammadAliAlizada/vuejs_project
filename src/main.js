// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import 'semantic-ui-css/semantic.min.css';
import BootstrapVue from 'bootstrap-vue'

import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import {initialize}  from './helpers/interceptor';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);

import SuiVue from 'semantic-ui-vue';

/* ... */

Vue.use(SuiVue);




initialize();
Vue.use(VueAxios, axios)
import {store} from './store';


// todo
// cssVars()

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
