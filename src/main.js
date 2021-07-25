import App from './App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Khata from './components/Khata.vue'
import Test from './components/Test.vue'
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import Todo from './components/Todo.vue'
// import Test from './components/Test.vue'
const routes = [
    { path: '/', component:Login },
    { path: '/signup', component:Signup},
    { path: '/khata', component: Khata },
    { path: '/test', component: Test },
    {path: '/todo',component: Todo},
    // {path: '/test',component:Test},
  ]
  
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
  
  const app = Vue.createApp(App)
  app.use(router)
  
  app.mount('#app')
  