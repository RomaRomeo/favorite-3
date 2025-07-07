<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  description?: string
  details: string[]
  icon: any
  isLink?: boolean
}>()

const makeLink = (value: string) => {
  if (value.includes('@')) return `mailto:${value}`
  if (value.match(/^\+?[0-9\s\-()]+$/)) return `tel:${value.replace(/\s/g, '')}`
  return '#'
}
</script>

<template>
    <div class="group transition hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-xl">
      <div class="flex items-center gap-4">
        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
          <component :is="icon" class="w-6 h-6" />
        </span>
        <div>
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white">{{ title }}</h2>
          <p v-if="subtitle" class="text-sm text-gray-500 dark:text-gray-400">{{ subtitle }}</p>
        </div>
      </div>
      <div class="mt-3 space-y-1">
        <p
          v-if="description"
          class="text-sm text-gray-500 dark:text-gray-400"
          v-html="description"
        />
        <div v-for="(text, index) in details" :key="index">
          <a
            v-if="isLink"
            :href="makeLink(text)"
            class="block text-sm text-blue-500 dark:text-blue-400 hover:underline"
          >
            {{ text }}
          </a>
          <p v-else class="text-sm text-gray-700 dark:text-gray-300">{{ text }}</p>
        </div>
      </div>
    </div>
  </template>
  