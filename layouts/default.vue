<script lang="ts" setup>
</script>

<template>
  <div class="min-h-full bg-slate-800">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <NuxtLink class="-m-1.5 p-1.5" to="/">
            <span class="sr-only">SWEET</span>
            <NuxtImg alt="" class="h-8 w-auto" src="/img/logo-transparent.svg" />
          </NuxtLink>
        </div>
        <!-- Mobile menu button-->
        <div class="flex lg:hidden">
          <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                  data-drawer-placement="right" data-drawer-show="drawer-navigation"
                  data-drawer-target="drawer-navigation"
                  type="button">
            <span class="sr-only">Open main menu</span>
            <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                 viewBox="0 0 24 24">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <!-- Normal header buttons -->
          <NuxtLink class="btn-header" to="/">Home</NuxtLink>
          <NuxtLink class="btn-header" to="/downloads">Downloads</NuxtLink>
          <NuxtLink class="btn-header" to="/privacy">Privacy</NuxtLink>
          <NuxtLink class="btn-header" to="/changelist">Changelist</NuxtLink>
          <a class="btn-header" href="https://github.com/sweet-org/sweet">
            <NuxtImg alt="" class="w-4 h-4 me-2" src="../public/img/branding/github-mark-white.svg"/>
            Sources
          </a>
          <a class="btn-header" href="https://discord.gg/JTTdU7A3rA">
            <NuxtImg alt="" class="w-4 h-4 me-2" src="../public/img/branding/discord-logo-white.svg" />
            Discord
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">

        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div id="drawer-navigation" aria-modal="true" class="lg:hidden transition-transform right-0 top-0 -translate-x-full" role="dialog">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50"></div>
        <div
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a class="-m-1.5 p-1.5" href="#">
              <span class="sr-only">Your Company</span>
              <NuxtImg alt="" class="h-8 w-auto"
                   src="/img/logo-transparent.svg" />
            </a>
            <button class="-m-2.5 rounded-md p-2.5 text-gray-300" data-drawer-hide="drawer-navigation"
                    type="button">
              <span class="sr-only">Close menu</span>
              <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5"
                   viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink class="btn-menu" to="/">Home</NuxtLink>
                <NuxtLink class="btn-menu" to="/downloads">Downloads</NuxtLink>
                <NuxtLink class="btn-menu" to="/privacy">Privacy</NuxtLink>
                <NuxtLink class="btn-menu" to="/changelist">Changelist</NuxtLink>
                <a class="btn-menu" href="https://github.com/sweet-org/sweet">
                  <NuxtImg alt="" class="w-4 h-4 me-2" src="/img/branding/github-mark-white.svg"/>
                  Sources
                </a>
                <a class="btn-menu" href="https://discord.gg/JTTdU7A3rA">
                  <NuxtImg alt="" class="w-4 h-4 me-2" src="/img/branding/discord-logo-white.svg" />
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="relative isolate px-6 pt-16 lg:px-8 h-fit">
      <!-- Black css magic (backgroundy stuff)-->
      <div aria-hidden="true"
           class="h-full absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div class="main-gradient left-[calc(50%-11rem)]  rotate-[30deg] sm:left-[calc(50%-30rem)]"
             style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <slot/>
      <!-- The same but a little bit different css magic -->
      <div
          aria-hidden="true" style="max-height: inherit"
          class="max-h-full absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] bottom-0">
        <div class="main-gradient left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]"
             style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>