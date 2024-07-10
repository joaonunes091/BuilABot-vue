/* eslint-disable indent */
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// eslint-disable-next-line import/prefer-default-export
export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);
    // eslint-disable-next-line no-return-assign, no-param-reassign
    const cartTotal = computed(() => cart.value.reduce((prev, cur) => prev += cur.cost, 0));
    return { cart, cartTotal };
});
