<script setup lang="ts">
const props = defineProps<{
  title: string;
  link?: string;
  description?: string;
  date: string;
  image: string;
}>();
</script>

<template>
  <div>
    <img
      class="relative z-10 object-cover w-full rounded-md h-96"
      :src="props.image"
      alt=""
    />

    <div
      class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900"
    >
      <a
        :href="props.link"
        class="font-semibold text-gray-800 dark:text-white md:text-xl"
        :class="{ 'hover:underline': props.link }"
        >{{ props.title }}</a
      >
      <p v-if="props.description" class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
        {{ props.description }}
      </p>
      <p class="mt-3 text-sm text-blue-500">{{ date }}</p>
    </div>
  </div>
</template>
