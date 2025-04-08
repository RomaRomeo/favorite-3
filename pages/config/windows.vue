<script setup lang="ts">
import { ModalWindowsConfig } from "#components";
const modal = useModal();

const articles = [
  {
    image: "/images/banners/windows-10-logo.jpg",
    title: "Налаштування PPPoE підключення у Windows 10",
    description: "Детальна інструкція з налаштування PPPoE-з'єднання у Windows 10. Дізнайтесь, як створити підключення, ввести дані провайдера та усунути можливі проблеми з мережею.",
    category: "Інтернет та мережі",
    date: "28 Лютого 2025",
  },
  {
    image: "/images/banners/windows-7-logo.jpg",
    title: "Налаштування PPPoE підключення у Windows 7",
    description: "Покроковий гід із налаштування PPPoE-з'єднання у Windows 7. Як правильно створити з'єднання, внести параметри та вирішити можливі проблеми з підключенням.",
    category: "Інтернет та мережі",
    date: "28 Лютого 2025",
  },
];
function onSelectInternetPlanClick(plan: InternetPlan) {
  modal.open(ModalWindowsConfig, plan);
}
</script>
<template>
  <UContainer>
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
      Як налаштувати PPPoE підключення у Windows: покрокова інструкція
    </h2>

    <USeparator orientation="horizontal" class="my-8" />

    <p class="text-lg text-gray-500 dark:text-gray-300 mb-10">
      Налаштування PPPoE підключення у Windows дозволяє отримати доступ до
      інтернету. У цих статтях ви знайдете покрокову інструкцію зі створення та
      налаштування PPPoE-з'єднання, поради щодо усунення можливих проблем та
      оптимізації підключення для стабільної роботи.
    </p>

    <ArticleCardsList :articles="articles" @on-card-click="onSelectInternetPlanClick()" />
  </UContainer>
</template>
