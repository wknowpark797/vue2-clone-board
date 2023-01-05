import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/read'
        },
        {
            path: '/read',
            name: 'read',
            component: () => import(/* webpackChunkName: 'read' */ '@/components/ReadComp')
        }
    ]
})

export default router;