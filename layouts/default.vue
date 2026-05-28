<script setup lang="ts">
import { siteConfig } from '~/config/site';

const color = useColorMode();
color.preference = 'light';

const route = useRoute();
useHead({ link: [{ rel: 'canonical', href: `${siteConfig.url}${route.path}` }] });

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'InternetServiceProvider',
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: siteConfig.phones[0],
        email: siteConfig.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'вул. Шептицького, 9',
          addressLocality: 'Ходорів',
          postalCode: '81750',
          addressCountry: 'UA',
        },
        openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-15:00'],
      }),
    },
  ],
});
</script>
<template>
  <div class="min-h-screen flex flex-col bg-[#F8FAFC]">
    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
