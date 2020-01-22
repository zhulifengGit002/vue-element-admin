// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import request from './request'

Vue.config.productionTip = false
Vue.prototype.$axios = request

Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.use(VueAxios, axios)

Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
