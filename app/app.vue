<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#1b1718' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Edwin Samodra Pratama | Personal Website'
const description = 'Personal website of Edwin Samodra Pratama — full-stack developer and infrastructure enthusiast'
const image = 'https://media.licdn.com/dms/image/v2/D5603AQGSERAYIGoZmg/profile-displayphoto-shrink_400_400/B56ZTmAY2EHQAg-/0/1739025650542?e=1768435200&v=beta&t=jL-x8E5B9CdoiD31p1EFCMmNc-gagFwXVPKPGAtvkm8'
const url = 'https://edwinsamodra.com'

useSeoMeta({
  /* ---------- Basic SEO ---------- */
  title,
  description,
  robots: 'index, follow',

  /* ---------- Open Graph ---------- */
  ogTitle: title,
  ogDescription: description,
  ogSiteName: 'Edwin Samodra Pratama',
  ogUrl: url,
  ogType: 'website',
  ogLocale: 'en_US',
  ogImage: image,
  ogImageAlt: 'Edwin Samodra Pratama profile photo',

  /* ---------- Twitter ---------- */
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCreator: '@edwinsamodra',
  twitterSite: '@edwinsamodra'
})

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Home',
  to: '/#home',
  active: false
}, {
  label: 'Experience',
  to: '/#experience',
  active: false
}, {
  label: 'Project',
  to: '/#project',
  active: false
}, {
  label: 'Lab',
  to: '/#lab',
  active: false
}, {
  label: 'Highlight',
  to: '/#highlight',
  active: false
}, {
  label: 'About',
  to: '/#about',
  active: false
}])

const isMobileMenuOpen = ref(false)
</script>

<template>
  <UApp>
    <div class="fixed top-6 inset-x-0 z-50 pointer-events-none">
      <div class="hidden md:flex justify-center">
        <nav
          class="pointer-events-auto flex items-center px-2.5 py-0.5 bg-white/80 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 rounded-full shadow-lg dark:shadow-2xl shadow-zinc-950/5 dark:shadow-zinc-950/50 ring-1 ring-zinc-900/5 dark:ring-white/10 overflow-x-auto max-w-[95vw]">
          <UNavigationMenu :items="items" variant="link" :ui="{
            link: 'px-3 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/50 whitespace-nowrap'
          }" />
        </nav>
      </div>

      <div class="flex md:hidden justify-end px-4">
        <button
          class="pointer-events-auto flex items-center justify-center w-10 h-10 bg-white/80 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 rounded-full shadow-lg dark:shadow-2xl shadow-zinc-950/5 dark:shadow-zinc-950/50 ring-1 ring-zinc-900/5 dark:ring-white/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
          aria-label="Toggle menu" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <UIcon :name="isMobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
      <div v-if="isMobileMenuOpen"
        class="fixed top-20 right-4 z-50 flex flex-col items-end gap-2 md:hidden pointer-events-none">
        <NuxtLink v-for="item in items" :key="item.label" :to="item.to"
          class="pointer-events-auto px-4 py-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 rounded-full shadow-xl ring-1 ring-zinc-900/5 dark:ring-white/10 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
          @click="isMobileMenuOpen = false">
          {{ item.label }}
        </NuxtLink>
      </div>
    </Transition>

    <div id="home" />
    <UMain class="max-w-4xl mx-auto px-3 sm:px-4 lg:px-5 pt-24">
      <NuxtPage />
    </UMain>

    <USeparator class="max-w-4xl mx-auto px-3 sm:px-4 lg:px-5" />

    <div
      class="max-w-4xl mx-auto px-3 sm:px-4 lg:px-5 py-4 flex items-center justify-center gap-3">
      <p class="text-sm text-zinc-500 dark:text-zinc-400">
        © {{ new Date().getFullYear() }} · Edwin Samodra Pratama
      </p>
      <ClientOnly>
        <UButton :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'" color="neutral" variant="ghost"
          aria-label="Toggle theme"
          class="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white cursor-pointer"
          @click="isDark = !isDark" />
        <template #fallback>
          <div class="w-8 h-8" />
        </template>
      </ClientOnly>
    </div>
  </UApp>
</template>
