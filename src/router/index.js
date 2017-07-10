import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Forget from '@/components/Forget'
import Main from '@/components/Main'
import Home from '@/components/Home/Home'
import Detail from '@/components/Home/Detail'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
  	{
      path: '/',
      redirect:'/main/home'
   },
    {
      path: '/login',
      name: 'Hello',
      component: Login
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
      	{
	    	path:'/main/home',
		    name: 'Home',
		    component: Home
	    }
      ]
    },
	{
		path:'/main/detail',
		name: 'Detail',
		component: Detail
	}
    
  ]
})
