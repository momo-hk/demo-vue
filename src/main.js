import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'
import App from './App'
import StudentStore from '@/modules/student/_store'

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store: new Vuex.Store({
  //   modules: {
  //     StudentStore
  //   }
  // }),
  store: StudentStore,
  render: h => h(App)
})
