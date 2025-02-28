<script setup lang="ts">
const props = defineProps<{
  icon: string;
  title: string;
  link?: string;
  description: string;
}>();
</script>

<template>
  <NuxtLink
    :to="props.link"
    class="cursor-pointer group flex flex-col items-center p-4 rounded-lg transition transform hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    <UIcon :name="props.icon" class="w-12 h-12 text-gray-800 dark:text-white group-hover:text-blue-500" />
    <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-500">
      {{ props.title }}
    </h1>
    <p class="mt-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
      {{ props.description }}
    </p>
  </NuxtLink>
</template>

