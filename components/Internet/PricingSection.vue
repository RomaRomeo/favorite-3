<script setup lang="ts">

const selectedCategory = ref("ходорів");

const plans = [
  {
    name: 'Базовий',
    description: 'Оптимальний вибір для перегляду веб-сторінок та соцмереж',
    newPrice: '200 грн',
    speed: 'до 200 Мбіт/с',
    features: [
      'Безлімітний трафік',
      'Стабільне з’єднання',
      'Підтримка HD-відео',
      '1 пристрій у мережі без втрати швидкості',
      'Швидкість до 200 Мбіт/с',
    ],
    category: 'ходорів',
    isRecommended: false,
  },
  {
    name: 'Стандартний',
    description: 'Ідеально підходить для сімейного користування та стрімінгу',
    newPrice: '250 грн',
    speed: 'до 300 Мбіт/с',
    features: [
      'Безлімітний трафік',
      'Швидке завантаження файлів',
      'Full HD стрімінг без затримок',
      'До 3 пристроїв у мережі',
      'Швидкість до 300 Мбіт/с',
    ],
    category: 'ходорів',
    isRecommended: false,
  },
  {
    name: 'Преміум',
    description: 'Для геймерів і активних користувачів',
    newPrice: '300 грн',
    speed: 'до 400 Мбіт/с',
    features: [
      'Низький пінг для онлайн-ігор',
      '4K стрімінг без буферизації',
      'Розширена техпідтримка',
      'До 5 пристроїв у мережі',
      'Швидкість до 400 Мбіт/с',
    ],
    category: 'ходорів',
    isRecommended: true,
  },
  {
    name: 'Ультра',
    description: 'Максимальна швидкість та стабільність для найвибагливіших користувачів',
    newPrice: '500 грн',
    speed: 'до 1 Гбіт/с',
    features: [
      'Гігабітний інтернет без обмежень',
      'Підтримка до 10 пристроїв одночасно',
      'Пріоритетна підтримка 24/7',
      'до 1 Гбіт/с',
      'Швидкість до 500 Мбіт/с',
    ],
    category: 'ходорів',
    isRecommended: false,
  },
  {
    name: 'Базовий',
    description: 'Оптимальний вибір для перегляду веб-сторінок та соцмереж',
    newPrice: '250 грн',
    speed: 'до 100 Мбіт/с',
    features: [
      'Безлімітний трафік',
      'Стабільне з’єднання',
      'Підтримка HD-відео',
      '1 пристрій у мережі без втрати швидкості',
      'Швидкість до 100 Мбіт/с',
    ],
    category: 'регіон',
    isRecommended: false,
  },
  {
    name: 'Стандартний',
    description: 'Ідеально підходить для сімейного користування та стрімінгу',
    newPrice: '200 грн',
    speed: 'до 300 Мбіт/с',
    features: [
      'Безлімітний трафік',
      'Швидке завантаження файлів',
      'Full HD стрімінг без затримок',
      'До 3 пристроїв у мережі',
      'Швидкість до 300 Мбіт/с',
    ],
    category: 'регіон',
    isRecommended: true,
  },
  {
    name: 'Преміум',
    description: 'Для геймерів і активних користувачів',
    newPrice: '300 грн',
    speed: 'до 350 Мбіт/с',
    features: [
      'Низький пінг для онлайн-ігор',
      '4K стрімінг без буферизації',
      'Розширена техпідтримка',
      'До 5 пристроїв у мережі',
      'Швидкість до 350 Мбіт/с',
    ],
    category: 'регіон',
    isRecommended: false,
  },
  {
    name: 'Ультра',
    description: 'Максимальна швидкість та стабільність для найвибагливіших користувачів',
    newPrice: '500 грн',
    speed: 'до 500 Мбіт/с',
    features: [
      'Гігабітний інтернет без обмежень',
      'Підтримка до 10 пристроїв одночасно',
      'Пріоритетна підтримка 24/7',
      'Швидкість до 500 Мбіт/с',
    ],
    category: 'регіон',
    isRecommended: false,
  },
];
const filteredPlans = computed(() => plans.filter(p => p.category === selectedCategory.value));
const categories = computed(() => [...new Set(plans.map(plan => plan.category))]);
</script>

<template>
  <div>
    <BaseToggle v-model="selectedCategory" :options="categories" />
    
    <div v-if="filteredPlans.length" class="flex flex-col items-center justify-center mt-16 gap-4 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
        <InternetPricingCard v-for="plan in filteredPlans" :key="plan.category" v-bind="plan" />
      </div>
      <p v-else class="text-gray-500 mt-4">No plans available.</p>
  </div>
</template>