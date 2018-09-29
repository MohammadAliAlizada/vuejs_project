import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
export function initialize(){
    axios.defaults.baseURL =  'http://localhost:8000/api';
    // axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token')
}