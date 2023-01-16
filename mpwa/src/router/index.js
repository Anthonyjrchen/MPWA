import {createRouter, createWebHashHistory} from 'vue-router'
import App from '../App.vue'
import Profile from '../views/Profile.vue'
import Home from '../views/Home.vue'

const routes = [
    {path: '/', name: 'Home Page' ,component: Home},
    {path: '/profile', name: 'Profile Page', component: Profile},
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router