<template>
  <div class="min-h-full flex flex-col">
    <Head>
      <Meta content="#d05458" data-react-helmet="true" name="theme-color" />
    </Head>

    <NuxtLayout class="flex-1">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>

import {onMounted} from 'vue';
import {useFlowbite} from '~/composables/useFlowbite';

const baseUrl = useRequestURL().hostname;

useSeoMeta({
  title: 'SWEET',
  description: 'Silkys Wonderful Eve Echoes Tool',
  // Embed settings when sharing on social media
  ogTitle: 'SWEET Fitting Calculator',
  ogDescription: 'Silkys Wonderful Eve Echoes Tool - The fitting calculator for Eve Echoes. Supports implants, (ai) nanocores and more.',
  ogImage: `https://${baseUrl}/img/logo-transparent.png`,
  ogUrl: `https://${baseUrl}/`,
  //twitterCard: 'summary_large_image',
})

// initialize components based on data attribute selectors
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});

</script>