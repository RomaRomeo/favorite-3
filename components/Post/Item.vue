<script setup lang="ts">
const props = defineProps<{
  date: string;
  category: {
    name: string;
    url: string;
  };
  title: {
    text: string;
    url: string;
  };
  description: [];
  readMoreUrl?: string;
  author: {
    name: string;
    url: string;
    avatar: string;
  };
}>();
</script>

<template>
  <div class="px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-between">
      <span class="text-sm font-light text-gray-600 dark:text-gray-400">
        {{ props.date }}
      </span>
      <UButton
        v-if="props.category.name"
        :label="props.category.name"
        :to="props.category.url"
        color="neutral"
        variant="soft"
      />
    </div>

    <div class="mt-2">
      <NuxtLink
        :to="props.title.url"
        target="_blank"
        class="text-xl font-bold text-gray-700 dark:text-white"
        :class="{ 'hover:underline': props.title.url }"
      >
        {{ props.title.text }}
      </NuxtLink>
      <div v-if="description && description.length" class="py-4">
        <p
          v-for="(text, index) in description"
          :key="index"
          class="mb-4 text-gray-700 leading-relaxed"
        >
          {{ text }}
        </p>
      </div>
    </div>

    <div v-if="props.readMoreUrl || props.author.avatar || props.author.name" 
      class="flex items-center justify-between mt-4"
    >
      <UButton
        v-if="props.readMoreUrl"
        label="Прочитати детальніше"
        :to="props.readMoreUrl"
        color="secondary"
        variant="outline"
      />

      <div class="flex items-center">
        <img
          v-if="props.author.avatar"
          class="hidden w-10 h-10 mx-4 rounded-full sm:block"
          :src="props.author.avatar"
          alt="avatar"
        />

        <NuxtLink
          :to="props.author.url"
          target="_blank"
          class="font-bold text-gray-700 dark:text-gray-200"
          :class="{ 'hover:underline': props.author.url }"
        >
          {{ props.author.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
