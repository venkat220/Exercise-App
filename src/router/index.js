import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Friends from '@/components/Friends';
import Exercise from '@/components/Exercise';
import Posts from '@/components/Post';
Vue.use(Router);

// adding routers
export default new Router({
  routes: [
    {path : '/', component: Index},
    { path: '/Login', name: 'Login',component: Login},
    { path: '/Register', name: 'Register',component: Register},
    { path: '/Friends', name: 'Friends',component: Friends},
    { path: '/Exercise', name: 'Exercise',component: Exercise},
    { path: '/Posts', name: 'Posts',component: Posts},

]
});
