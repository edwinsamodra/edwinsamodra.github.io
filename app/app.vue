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
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',

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
  to: '/#',
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
}, {
  label: 'Contact Me',
  to: 'mailto:hi@edwinsamodra.com',
}])
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <NuxtLink to="/">
          <p class="font-extrabold text-4xl font-sans tracking-tighter subpixel-antialiased">ED</p>
        </NuxtLink>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />

        <UButton
          to="https://www.linkedin.com/in/edwinsamodra/"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="LinkedIn"
          color="neutral"
          variant="ghost"
        />
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="w-full"
          :ui="{
            item: 'p-1 mb-2 bg-zinc-800 rounded font-medium'
          }"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #default>
        <p class="text-sm text-muted my-2">
          © {{ new Date().getFullYear() }} · Edwin Samodra Pratama
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
