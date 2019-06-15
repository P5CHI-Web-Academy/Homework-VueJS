import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from '@/components/layouts/CommonLayout'
import Home from '@/views/Home'
import Question from '../views/Question'
import User from '../views/User'
import Users from '../views/Users'
import Tag from '../views/Tag'

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
          'params': ['id'],
          props: true,
          component: Question
        },
        {
          path: 'user/:id',
          name: 'user',
          'params': ['id'],
          props: true,
          component: User
        },
        {
          path: 'users',
          name: 'users',
          component: Users
        },
        {
          path: 'tag/:name',
          name: 'tag',
          'params': ['name'],
          props: true,
          component: Tag
        }
      ]
    }
  ]
})
