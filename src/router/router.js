import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from '@/components/layouts/CommonLayout'
import SecondLayout from '@/components/layouts/SecondLayout'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: CommonLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/questions',
          name: 'questions',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/AllQuestions.vue')
        },
        {
          path: '/question/:id',
          name: 'question',
          params: ['id'],
          props: true,
          component: () => import('@/views/Question.vue')
        },
        {
          path: '/search',
          name: 'search',
          params: ['query'],
          props: (route) => ({ query: route.query.q }),
          component: () => import('@/views/AllSearchResults.vue')
        }
      ]
    },
    {
      path: '',
      component: SecondLayout,
      children: [
        {
          path: '/tags',
          name: 'tags',
          component: () => import('@/views/AllTags.vue')
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('@/views/AllUsers.vue')
        },
        {
          path: '/user/:id',
          name: 'user',
          params: ['id'],
          props: true,
          component: () => import('@/views/User.vue')
        }
      ]
    }
  ]
})
