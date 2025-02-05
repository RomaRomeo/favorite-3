<script setup lang="ts">
const items = ref([
  [
    {
      label: "Головна",
      to: "/",
    },
    {
      label: "Оголошення",
      to: "/news",
    },
    {
      label: "Акції",
      to: "/promo",
    },
    {
      label: "Інтернет",
      to: "/internet",
    },
    {
      label: "Телебачення",
      // to: "/tv",
      children: [
        {
          label: "IP TV",
          icon: "i-heroicons-document-text-20-solid",
          description: "Цифрове телебачення.",
          to: "/tv/ip",
        },
        {
          label: "CABLE TV",
          icon: "i-heroicons-document-text-20-solid",
          description: "Кабельне телебачення.",
          to: "/tv/cable",
        },
      ],
    },
    {
      label: "Оплата",
      to: "/payment",
    },
    {
      label: "Налаштування",
      // to: "/config",
      children: [
        {
          label: "Windows",
          icon: "i-heroicons-document-text-20-solid",
          description: "Налаштування ОС Windows.",
          to: "/config/windows",
        },
        {
          label: "Routers",
          icon: "i-heroicons-document-text-20-solid",
          description: "Налаштування роутерів.",
          to: "/config/routers",
        },
      ],
    },
    {
      label: "Контакти",
      to: "/contact",
    },
  ],
]);
</script>
<template>
  <BaseHeader>
    <template #logo>
      <NuxtLink to="/">
        <img src="/public/images/logo/logo-dark.png" width="160" aria-label="Favorite logo" alt="Favorite logo" />
      </NuxtLink>
    </template>

    <template #center>
      <UNavigationMenu :items="items" color="neutral" variant="link" />
    </template>

    <template #right>
      <!-- <UColorModeButton /> -->
      <UButton
        label="Особистий кабінет"
        to="http://my.favorite.lviv.ua"
        target="_blank"
        icon="line-md:account"
        color="neutral"
        variant="ghost"
        size="lg"
      />
    </template>

    <template #panel>
      <UNavigationMenu :items="items" orientation="vertical" color="neutral" variant="link" />
    </template>
  </BaseHeader>
</template>
