import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import UserPage from 'components/UserPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
      children: [
        {
          name: 'userPage',
          path: '/user/:id',
          component: UserPage
        }
      ]
    }
  ]
})
