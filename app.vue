<template>
  <div class="min-h-full flex flex-col">
    <NuxtLayout class="flex-1">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>

import {onMounted} from 'vue';
import {useFlowbite} from '~/composables/useFlowbite';

useSeoMeta({
  title: 'SWEET',
  ogTitle: 'SWEET',
  description: 'Silkys Wonderful Eve Echoes Tool',
  ogDescription: 'Silkys Wonderful Eve Echoes Tool',
  //ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

// initialize components based on data attribute selectors
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});

</script>