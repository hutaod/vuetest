// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '../static/content/Site.css'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(MuseUI)

const store = new Vuex.Store({
	state:{
		lists:null,
		homekey:'',
		detailId:''
	},
	mutations:{
		setHomeKey(state,hkey){
			//console.log(state.homekey);
			state.homekey = hkey;
//			return state.homekey;
		},
		setLists(state,hkey){
			//console.log(state.homekey);
		},
		setDetailId(state,did){
			
		}
	}
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
