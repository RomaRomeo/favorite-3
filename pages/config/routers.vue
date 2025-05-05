<script setup lang="ts">
import { ModalRouterConfig } from "#components";
const modal = useModal();

const articles = [
  {
    image: "/images/banners/tp-link_wr841n.jpg",
    title: "Налаштування роутера TP-Link WR841N",
    description: "Покрокова інструкція з налаштування Wi-Fi роутера TP-Link WR841N: як підключити пристрій, зайти в панель керування, налаштувати інтернет-з’єднання та забезпечити безпеку мережі.",
    category: "Інтернет та мережі",
    date: "04 Травня 2025",
    id: 'tp-link'
  },
  {
    image: "/images/banners/netis-wf2411.jpg",
    title: "Налаштування роутера Netis WF2411",
    description: "Детальна інструкція з налаштування роутера Netis WF2411: як підключити пристрій, увійти в веб-інтерфейс, встановити параметри інтернету та Wi-Fi, а також захистити мережу паролем.",
    category: "Інтернет та мережі",
    date: "04 Травня 2025",
    id: 'netis'
  },
];
function onSelectRouterClick(id: string) {
  modal.open(ModalRouterConfig, { type: id });
}
</script>
<template>
  <UContainer>
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
      Як налаштувати Wi-Fi роутер: покрокові інструкції для популярних моделей
    </h2>

    <USeparator orientation="horizontal" class="my-8" />

    <p class="text-lg text-gray-500 dark:text-gray-300 mb-10">
      Найдетальніший гід із налаштування домашніх Wi-Fi роутерів — від підключення до інтернету до захисту мережі. 
      Доступні інструкції для TP-Link, Netis, та інших моделей з прикладами, скріншотами та порадами.
    </p>

    <ArticleCardsList :articles="articles" @on-card-click="onSelectRouterClick" />
  </UContainer>
</template>
