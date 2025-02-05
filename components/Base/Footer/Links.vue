<script setup lang="ts">
type Link = { label: string; url?: string };
type Section = { title: string; links: Link[] };

const props = defineProps<{
  sections: Section[];
}>();
</script>

<template>
  <div class="mt-6 lg:mt-0 lg:flex-1">
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div v-for="(section, index) in sections" :key="index">
        <h3 class="text-gray-700 uppercase dark:text-white">
          {{ section.title }}
        </h3>
        <template v-for="(link, i) in section.links" :key="i">
          <NuxtLink
            v-if="link.url"
            :to="link.url"
            class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            {{ link.label }}
          </NuxtLink>
          <span
            v-else
            class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
          >
            {{ link.label }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>
