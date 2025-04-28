<script setup lang="ts">
const props = defineProps<{
  type: string;
}>();

const guides = {
  "windows-7": {
    title: "Налаштування PPPoE підключення на Windows 7",
    description: "Покрокова інструкція для створення підключення PPPoE у Windows 7.",
    steps: [
      {
        image: "/images/guides/windows7/step1.png",
        description: "Натисніть кнопку 'Пуск', потім відкрийте 'Панель керування'.",
      },
      {
        image: "/images/guides/windows7/step2.png",
        description: "Перейдіть до розділу 'Мережа й Інтернет'.",
      },
      {
        image: "/images/guides/windows7/step3.png",
        description: "Відкрийте 'Центр мережних підключень і спільного доступу'.",
      },
      {
        image: "/images/guides/windows7/step4.png",
        description: "Натисніть 'Настроїти нове підключення або мережу'.",
      },
      {
        image: "/images/guides/windows7/step5.png",
        description: "Виберіть 'Підключитися до Інтернету'.",
      },
      {
        image: "/images/guides/windows7/step6.png",
        description: "Оберіть варіант 'Широкосмугове (PPPoE)'.",
      },
      {
        image: "/images/guides/windows7/step7.png",
        description: "У формі введіть ваш логін і пароль. Поставте галочку 'Запам’ятати цей пароль'. Назву підключення можна залишити без змін. Натисніть 'Підключити'.",
      },
      {
        image: "/images/guides/windows7/step8.png",
        description: "Якщо виникне помилка, натисніть 'Усе одно встановити підключення'.",
      },
      {
        image: "/images/guides/windows7/step9.png",
        description: "Закрийте вікно налаштувань після завершення підключення.",
      },
      {
        image: "/images/guides/windows7/step10.png",
        description: "Для подальшої активації підключення використовуйте іконку 'Мережа' у системному треї.",
      },
    ],
  },
  "windows-10": {
    title: "Налаштування PPPoE підключення у Windows 10",
    description: "Покрокова інструкція для створення підключення PPPoE у Windows 10.",
    steps: [
      {
        image: "/images/guides/windows10/step1.png",
        description: "Правою кнопкою миші натисніть 'Пуск' та виберіть 'Мережеві підключення'.",
      },
      {
        image: "/images/guides/windows10/step2.png",
        description: "У розділі 'Комутоване з’єднання' натисніть 'Установити нове підключення'.",
      },
      {
        image: "/images/guides/windows10/step3.png",
        description: "У новому вікні оберіть 'Підключитися до Інтернету'.",
      },
      {
        image: "/images/guides/windows10/step4.png",
        description: "Оберіть тип підключення 'Широкосмугове (PPPoE)'.",
      },
      {
        image: "/images/guides/windows10/step5.png",
        description: "У формі введіть логін і пароль. Поставте галочку 'Запам’ятати цей пароль'. Назву підключення можна залишити без змін. Натисніть 'Підключити'.",
      },
      {
        image: "/images/guides/windows10/step6.png",
        description: "Якщо з’явиться помилка, натисніть 'Усе одно встановити підключення'.",
      },
      {
        image: "/images/guides/windows10/step7.png",
        description: "Закрийте вікно налаштувань після завершення підключення.",
      },
      {
        image: "/images/guides/windows10/step8.png",
        description: "У розділі 'Комутоване з’єднання' з’явиться новостворене підключення.",
      },
    ],
  },
  "windows-11": {
    title: "Налаштування PPPoE підключення у Windows 11",
    description: "Покрокова інструкція для створення підключення PPPoE у Windows 11.",
    steps: [
      {
        image: "/images/guides/windows11/step1.png",
        description: "Натисніть правою кнопкою миші на 'Пуск' і оберіть 'Налаштування'.",
      },
      {
        image: "/images/guides/windows11/step2.png",
        description: "У розділі 'Мережа та Інтернет' перейдіть до 'Комутовані мережі'.",
      },
      {
        image: "/images/guides/windows11/step3.png",
        description: "Натисніть 'Додати нове підключення'.",
      },
      {
        image: "/images/guides/windows11/step4.png",
        description: "Оберіть 'Підключення до Інтернету'.",
      },
      {
        image: "/images/guides/windows11/step5.png",
        description: "Виберіть тип 'PPPoE (Широкосмугове)'.",
      },
      {
        image: "/images/guides/windows11/step6.png",
        description: "Введіть логін і пароль. Увімкніть опцію 'Запам’ятати цей пароль' і натисніть 'Підключити'.",
      },
      {
        image: "/images/guides/windows11/step7.png",
        description: "У випадку помилки натисніть 'Усе одно встановити підключення'.",
      },
      {
        image: "/images/guides/windows11/step8.png",
        description: "Після успішного підключення нове з’єднання з’явиться у списку 'Комутовані мережі'.",
      },
    ],
  },
};
const guide = computed(() => guides[props.type as keyof typeof guides]);
</script>

<template>
  <UModal
  class="!max-w-[900px]"
  :title="guide?.title"
  :description="guide?.description"
>
  <template #body>
    <div class="flex flex-col space-y-8 max-h-[70vh] overflow-y-auto">
      <div
        v-for="(step, index) in guide?.steps"
        :key="index"
        class="flex flex-col items-center space-y-2"
      >
        <div class="text-lg font-semibold text-primary">Крок {{ index + 1 }}</div>
        <img
          :src="step.image"
          alt="Крок налаштування"
          class="max-w-full rounded-xl shadow-md"
        />
        <p class="text-center text-gray-700 max-w-md">
          {{ step.description }}
        </p>
      </div>
    </div>
  </template>
</UModal>
</template>
