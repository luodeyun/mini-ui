import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.min.css';  //导入样式文件 
Vue.use(Mint)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
