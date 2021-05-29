import store from '../Store/index';

const ifNotAuthenticated = (to, from, next) => {
    if (!store.state.token) {
        next();
        return;
    }
    next('/dashboard');
}


const routes = [
    {
        path: '/',
        component: () => import('../Pages/Login.vue'),
        name: 'login',
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '/auth/:provider/callback',
        redirect: 'dashboard'

    },
    {
        path: '/products/:id',
        component: () => import('../Pages/CardProduct.vue'),
        name: 'cardProduct',
    },
    {
        path: '/paySaccess',
        component: () => import('../Pages/SuccessPay.vue'),
        name: 'SuccessPay',
    }
];

export default routes;
