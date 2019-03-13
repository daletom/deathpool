import Vue from 'vue'
import VueFire from 'vuefire'
import App from 'app.js'

Vue.use(VueFire)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')