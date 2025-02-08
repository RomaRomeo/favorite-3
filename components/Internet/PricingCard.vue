<script setup lang="ts">
defineProps<{
  name: string;
  category: string;
  description: string;
  newPrice: string;
  speed: string;
  features: string[];
  isRecommended?: boolean;
  isSelected?: boolean;
}>();
</script>

<template>
  <div
    class="w-full min-h-[520px] px-6 py-4 border border-blue-200 transition-colors duration-300 transform rounded-lg md:w-96 bg-gray-50 dark:bg-gray-800 flex flex-col"
  >
  <div
      v-if="isRecommended"
      class="absolute -top-4 right-4 flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white uppercase bg-blue-500 rounded-full shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 2c.3 0 .6.1.8.4l3 6.2 6.8 1c.7.1 1 .6 1 .9 0 .3-.2.8-.7 1.1l-5 4.8 1.2 7c.1.7-.4 1.2-.9 1.2-.2 0-.4 0-.6-.2L12 19.8l-6.1 3.2c-.2.1-.4.2-.6.2-.5 0-1-.5-.9-1.2l1.2-7-5-4.8c-.5-.3-.7-.8-.7-1.1 0-.3.3-.8 1-.9l6.8-1 3-6.2c.2-.3.5-.4.8-.4z"
        />
      </svg>
      <span>Рекомендовано</span>
    </div>

    <div class="text-center">
      <p class="text-2xl font-semibold text-gray-800 dark:text-gray-100">{{ name }}</p>
      <p class="mt-4 text-gray-500 dark:text-gray-300 h-12">{{ description }}</p>
      <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">{{ newPrice }}</h4>
      <p class="mt-4 text-gray-500 dark:text-gray-300">/в місяць</p>
    </div>

    <div class="mt-8 space-y-4">
      <div v-for="feature in features" :key="feature" class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="mx-4 text-gray-700 dark:text-gray-300">{{ feature }}</span>
      </div>
    </div>

    <button
      class="mt-auto w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Вибрати
    </button>
  </div>
</template>
