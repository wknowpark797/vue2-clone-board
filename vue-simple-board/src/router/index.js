import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/board/free'
        },
        {
            path: '/board/free',
            name: 'board-free',
            component: () => import(/* webpackChunkName: 'board' */ '@/components/BoardComp')
        },
        {
            path: '/board/detail/:contentId',
            name: 'board-detail',
            component: () => import(/* webpackChunkName: 'detail' */ '@/components/DetailComp')
        }
    ]
})

export default router;