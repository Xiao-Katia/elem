import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/msite'

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/msite',
      component: Home
    }
  ]
})
