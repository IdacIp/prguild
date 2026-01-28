import { createRouter, createWebHistory } from 'vue-router';
import { components } from 'vuetify/dist/vuetify.js';
import Login from './pages/Login.vue';
import Signup from './pages/Signup.vue';
import Home from './pages/Home.vue';

const routes = [{path:"/", component:Home},
    {path:"/login", component:Login},
    {path: "/signup", component:Signup}
]
const router = createRouter({
    history: createWebHistory(),routes
})

export default router;