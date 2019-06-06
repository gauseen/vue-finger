import Vue from 'vue'
import App from './App.vue'

import VueFinger from '../src/directives'

Vue.config.productionTip = false

Vue.use(VueFinger)

new Vue({
  render: h => h(App)
}).$mount('#app')
