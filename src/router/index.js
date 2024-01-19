// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import home from '@/page/HomePage.vue';
import about from '@/page/about.vue';
import production1 from '@/page/production1.vue';
import production2 from '@/page/production2.vue';
import production3 from '@/page/production3.vue';
import production4 from '@/page/production4.vue';
import production5 from '@/page/production5.vue';

const routes = [
  {
    path: '/production1',
    name: 'production1',
    component: production1,
  },
  {
    path: '/production2',
    name: 'production2',
    component: production2,
  },
  {
    path: '/production3',
    name: 'production3',
    component: production3,
  },
  {
    path: '/',
    component: home,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/production4',
    component: production4,
  },
  {
    path: '/production5',
    component: production5,
  },
  // Redirect to home if the URL is not matched
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
