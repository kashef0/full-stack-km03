import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddFormView from '../views/AddFormView.vue'
import MoviesView from '../views/MoviesView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    {
      path: '/',
      name: '/home',
      component: HomeView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/AddFormView",
      name: "addmovie",
      component: AddFormView,
    },
    {
      path: "/MoviesView",
      name: "MoviesView",
      component: MoviesView
    },
    {
      path: "/AboutView",
      name: "InfoPage",
      component: AboutView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
