import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Learn from '@/components/Learn'
import Team from '@/components/Team'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
