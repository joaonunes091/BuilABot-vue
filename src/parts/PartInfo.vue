<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRoute } from 'vue-router';

import { usePartsStore } from '@/stores/partsStore';

const partsStore = usePartsStore();

const part = computed(() => {
  const route = useRoute();
  const { partType } = route.params;
  const partId = route.params.id;
  return partsStore.parts[partType].find((x) => x.id === +partId);
});
</script>
