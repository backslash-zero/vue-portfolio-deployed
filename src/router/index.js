import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import NotFound from '../views/NotFound'
import Projects from '../views/Projects'
import Project from '../views/Project'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/Projects/:slug',
        name: 'Project',
        // props: true,
        component: Project
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router