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
        },
        {
            path: '/create',
            name: 'create',
            component: () => import(/* webpackChunkName: 'create' */ '@/components/CreateComp')
        },
        {
            path: '/detail/:seq',
            name: 'detail',
            component: () => import(/* webpackChunkName: 'detail' */ '@/components/DetailComp')
        }
    ]
})

export default router;