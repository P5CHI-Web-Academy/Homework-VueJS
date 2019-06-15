import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from '@/components/layouts/CommonLayout'
import Home from '@/views/Home'
import Question from '@/views/Question'
import Tags from '@/views/Tags'
import Users from '@/views/Users'
import User from '@/views/User'

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
          path: 'question/:id',
          name: 'question',
          params: ['id'],
          props: true,
          component: Question
        },
        {
          path: 'tags',
          name: 'tags',
          component: Tags
        },
        {
          path: 'users',
          name: 'users',
          component: Users
        },
        {
          path: 'user/:id',
          name: 'user',
          params: ['id'],
          props: true,
          component: User
        }
      ]
    }
  ]
})
