<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'dark'

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: "#1b1718" }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Edwin Samodra Pratama | Personal Website'
const description = 'Personal website of Edwin Samodra Pratama — full-stack developer'
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
  twitterCreator: '@edwinsamodra', // hapus kalau belum punya
  twitterSite: '@edwinsamodra'     // hapus kalau belum punya
})


import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Home',
  to: '/#home',
  active: false
  }, {
  label: 'Experience',
  to: '/#experience',
  active: false
}, {
  label: 'Projects',
  to: '/#projects',
  active: false
}, {
  label: 'About',
  to: '/#about',
  active: false
}])
</script>

<template>
  <UApp>
    <div class="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
      <nav class="pointer-events-auto flex items-center px-2.5 py-0.5 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full shadow-2xl shadow-zinc-950/50 ring-1 ring-white/10 overflow-x-auto max-w-[95vw]">
        <UNavigationMenu
          :items="items"
          variant="link"
          :ui="{
            link: 'px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800/50 whitespace-nowrap',
          }"
        />
      </nav>
    </div>

    <UMain class="max-w-4xl mx-auto px-3 sm:px-4 lg:px-5 pt-24">
      <NuxtPage />
    </UMain>

    <USeparator class="max-w-4xl mx-auto px-3 sm:px-4 lg:px-5" />

    <div class="max-w-4xl mx-auto px-3 sm:px-4 lg:px-5 py-4 flex justify-center">
      <p class="text-sm text-muted my-2">
        © {{ new Date().getFullYear() }} · Edwin Samodra Pratama
      </p>
    </div>
  </UApp>
</template>
