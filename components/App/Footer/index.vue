<script setup lang="ts">
const links = [
  {
    title: "Продукти",
    links: [
      { label: "Інтернет", url: "/internet" },
      { label: "Цифрове ТБ", url: "/tv/ip" },
      { label: "Кабельне ТБ", url: "/tv/cable" },
    ],
  },
  {
    title: "Налаштування",
    links: [
      { label: "Компʼютера", url: "/config/windows" },
      { label: "Роутера", url: "/config/routers" },
    ],
  },
  {
    title: "Підтримка",
    links: [
      { label: "Центр підтримки", url: "/contact/" },
      { label: "Спосіб оплати", url: "/payment" },
    ],
  },
  {
    title: "Контакти",
    links: [
      { label: "+38 (067) 93 610 73" }, 
      { label: "+38 (093) 93 610 73" }],
  },
];
</script>

<template>
  <BaseFooter>
    <template #left>
      <NuxtLink to="/">
        <img
          src="/public/images/logo/logo-dark.png"
          width="160"
          aria-label="Favorite logo"
          alt="Favorite logo"
        />
      </NuxtLink>

      <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400 text-xs">
        Connecting You to the World.
      </p>

      <BaseMessengerButtonList size="sm" class="mt-6 gap-2" />
    </template>

    <template #middle>
      <BaseFooterLinks :sections="links" />
    </template>
  </BaseFooter>
</template>
