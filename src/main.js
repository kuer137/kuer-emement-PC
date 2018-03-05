// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 全局的公用css
import '@/styles/index.scss'

/* 全部引入 注意.babelrc不需要引入component等内容
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI)
 */
/* 按需引入 */
/* 或写为
   import { Button, Select } from 'element-ui'
   Vue.use(Button)
   Vue.use(Select)
 */
import { Button, Select } from 'element-ui'
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
