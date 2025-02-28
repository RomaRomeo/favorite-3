<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
  description: string
  category: string
  author?: {
    name: string
    avatar: string
  }
  date: string
}>();
</script>

<template>
  <div class="w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img class="object-cover w-full h-64" :src="props.image" alt="Article Image">

    <div class="p-6">
      <div>
        <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
          {{ props.category }}
        </span>
        <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">
          {{ props.title }}
        </a>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {{ props.description }}
        </p>
      </div>

      <div v-if="props.author" class="mt-4 flex items-center">
        <img class="object-cover h-10 rounded-full" :src="props.author.avatar" alt="Author Avatar">
        <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200">
          {{ props.author.name }}
        </a>
        <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{{ props.date }}</span>
      </div>
    </div>
  </div>
</template>
