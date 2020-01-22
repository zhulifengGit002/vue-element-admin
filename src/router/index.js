import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import HelloWorld from '@/components/HelloWorld'
import Post from '@/pages/blog/Post'
import WritePost from '@/pages/blog/WritePost'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Layout,
      children: [
        {
          path: '/blog/post',
          name: 'post',
          component: Post
        },
        {
          path: '/blog/writepost',
          name: 'writepost',
          component: WritePost
        }
      ]
    }
  ]
})
