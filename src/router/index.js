import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/home/Home'),
    },
    {
        path: '/mine',
        name: 'Mine',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/mine/Mine'),
    }, {
        path: '/order',
        name: 'Order',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/order/Order'),
    }, {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/login/Login'),
        beforeEnter(to, from, next) {
            const { isLogin } = localStorage;
            isLogin ? next({ name: "Home" }) : next()
        }
    }, {
        path: '/register',
        name: 'Register',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/register/Register')
    }, {
        path: '/shop/:id',
        name: 'Shop',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/shop/Shop')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const { isLogin } = localStorage;
    (isLogin || to.name == "Login" || to.name == "Register") ? next(): next({ name: 'Login' });
})
export default router