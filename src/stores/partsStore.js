/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePartsStore = defineStore('parts', () => {
    const parts = ref(null);

    const getParts = async () => {
        const response = await fetch('/api/parts');
        parts.value = await response.json();
    };

    return { parts, getParts };
});
