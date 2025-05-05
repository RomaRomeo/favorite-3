<script setup lang="ts">
const props = defineProps<{
  type: string;
}>();

const guides = {
  "tp-link": {
    title: "Налаштування роутера TP-Link WR841N — покрокова інструкція",
    description: "Детальний посібник з налаштування Wi-Fi роутера TP-Link WR841N: підключення, вхід у панель керування, налаштування інтернету та безпеки мережі.",
    steps: [
      {
        hideStepper: false, // fixed error in template
        image: "/images/guides/tp-link-wr841n/step1.png",
        description: "Підключити кабель від провайдера в синій порт, а локальні підлючення (комп’ютер, інші пристрої) у жовті.",
      },
      {
        image: "/images/guides/tp-link-wr841n/step2.png",
        description: "У браузері відкрити адресу 192.168.1.1. Для входу в систему налаштувань ввести користувача admin і пароль admin. Зліва в меню обрати Мережа WAN, потім Тип підключення WAN вказати PPPoE.",
      },
      {
        image: "/images/guides/tp-link-wr841n/step3.png",
        description: "Потім ввести Ім’я користувача (логін) та Пароль для підключення до інтернету, надані провайдером, і знову Підтвердити пароль. Натиснути Зберегти.",
      },
      {
        image: "/images/guides/tp-link-wr841n/step4.png",
        description: "В меню Безпровідний режим вказати Назву мережі. Цю назву буде видно на мобільних пристроях при пошуку Wi-Fi мережі. Регіон можна вказати Україна. Натиснути Зберегти.",
      },
      {
        image: "/images/guides/tp-link-wr841n/step5.png",
        description: "Потім у підменю Захист безпровідного режиму вибрати пункт WPA/WPA2 - Personal та вписати Пароль безпровідної мережі. Натиснути Зберегти.",
      },
      {
        image: "/images/guides/tp-link-wr841n/step6.png",
        description: "У підменю Розширені налаштування можна встановити Потужність передавача в залежності від бажаного покриття. Рекомендовано встановлювати мінімально необхідну, щоб не створювати завад для інших пристроїв. Натиснути Зберегти.",
      },
      {
        image: "/images/guides/tp-link-wr841n/step7.png",
        description: "Для задіяння змін, відкрити меню Системні інструменти, підменю Перезавантаження, та Перезавантажити пристрій. Протягом хвилини пристрій запуститься з новою конфігурацією.",
      },
    ],
  },
  "netis": {
    title: "Налаштування роутера TP-Link WR841N — покрокова інструкція",
    description: "Детальний посібник з налаштування Wi-Fi роутера TP-Link WR841N: підключення, вхід у панель керування, налаштування інтернету та безпеки мережі.",
    steps: [
      {
        hideStepper: false, // fixed error in template
        image: "/images/guides/netis-wf2411/step1.png",
        description: "Підключити кабель від провайдера в синій порт, а локальні підлючення (комп’ютер, інші пристрої) у чорні.",
      },
      {
        image: "/images/guides/netis-wf2411/step2.png",
        description: "У браузері відкрити адресу 192.168.1.1. Відкриється інтерфейс для налаштувань.  Зверху на сторінці можна обрати 1 мову. Потім необхідно вибрати 2 тип підключення PPPoE. Ввести 3 логін та 4 пароль для підлючення до інтернету, надані провайдером. Потім вказати 5 назву Wi-Fi мережі, 6 активувати її, а також встановити 7 пароль на підключення до цієї Wi-Fi мережі. Натиснути Зберегти.",
      },
      {
        image: "/images/guides/netis-wf2411/step3.png",
      },
      {
        image: "/images/guides/netis-wf2411/step4.png",
        hideStepper: true,
        description: "В додаткових налаштуваннях (верхня права кнопка), можна змінити потужність радіопередавача. Рекомендовано встановлювати мінімально необхідну, щоб не створювати завад для інших пристроїв. Також можна встановити пароль на підключення до роутера та інше.",
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
        <div v-if="!step.hideStepper" class="text-lg font-semibold text-primary">Крок {{ index + 1 }}</div>
        <img
          v-if="step.image"
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
