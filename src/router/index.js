/* eslint-disable indent */
import RobotBuilder from '@/build/RobotBuilder.vue';
import HomePage from '@/home/HomePage.vue';
import ProductSearch from '@/search/ProductSearch.vue';
import PartInfo from '@/parts/PartInfo.vue';
import ShoppingCart from '@/cart/ShoppingCart.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/build',
            name: 'Build',
            component: RobotBuilder,
        },
        {
            path: '/search',
            name: 'Search',
            component: ProductSearch,
        },
        {
            path: '/parts/:partType/:id',
            name: 'Parts',
            component: PartInfo,
        },
        {
            path: '/cart',
            name: 'Cart',
            component: ShoppingCart,
        },
    ],
});
