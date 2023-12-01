// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import login from '@/page/LoginPage.vue';
import home from '@/page/HomePage.vue';
import register from '@/page/Register.vue'
import email_1 from '@/page/EmailVerificationPage_1.vue'
import email_2 from '@/page/EmailVerificationPage_2.vue'
import member from '@/page/MemberPage.vue';
import myRecord from '@/page/myRecordPage.vue'
import Cart from '@/page/Cart.vue';
import Shop from '@/page/Shop.vue';
import { useUserStore } from '@/stores/user'
import { usePlayersStore } from '@/stores/player';

const routes = [
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      login: false
    }
  },
  {
    path: '/',
    component: home,
    meta:{
      login: false
    }
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    meta: {
      login: false
    }
  },
  {
    path: '/login',
    component: login,
     meta:{
      login: false
    }
  },
  {
    path:'/email_1',
    component: email_1,
    meta:{
      login: false
    }
  },{
    path:'/email_2',
    component: email_2,
    meta:{
      login: false
    }
  },
  {
    path: '/register',
    component: register,
    meta:{
      login: false
    }
  },
  
  {
    path: '/member',
    component: member,
     meta:{
      login: true
    }
  },
 
  {
    path: '/myRecord',
    component: myRecord,
     meta:{
      login: true
    }
  },
  // 網址亂打，只會回首頁
   {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
];



const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  const player = usePlayersStore()

  if ( !user.isLogin && (to.path === '/myRecord'  )) {
    next('/login')
   }

  //  if( player.gameID.trim() == ""  &&(to.path === '/record')) {
  //   next('/')
  //  }

  if ( user.isLogin === true && (to.path === '/register' || to.path === '/login' || to.path === '/email_1' || to.path === '/email_2' )) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    next('/login')
  }  
  else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }

 

  
})

export default router;
