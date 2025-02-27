<script setup lang="ts">
const props = defineProps<{
  name: string;
  category: string;
  description: string;
  price: string;
  speed?: string;
  features: string[];
  isRecommended?: boolean;
  isSelected?: boolean;
}>();
const emit = defineEmits(["onCardClick"]);
</script>

<template>
  <div
    class="w-full min-h-[320px] px-6 py-4 border border-sky-200 transition-shadow duration-300 hover:shadow-lg transition-colors duration-300 transform rounded-lg bg-gray-50 dark:bg-gray-800 flex flex-col"
  >
    <div
      v-if="props.isRecommended"
      class="absolute -top-4 right-4 flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white uppercase bg-[#eb5c78] rounded-full shadow-md"
    >
      <UIcon name="material-symbols:star-rounded" class="w-4 h-4" />
      <span>Рекомендовано</span>
    </div>

    <div class="text-center">
      <p class="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {{ props.name }}
      </p>
      <p
        :title="props.description"
        class="mt-4 text-gray-500 dark:text-gray-300 h-12 overflow-hidden break-words line-clamp-2"
      >
        {{ props.description }}
      </p>
      <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
        {{ props.price }}
      </h4>
      <p class="mt-4 text-gray-500 dark:text-gray-300">/в місяць</p>
    </div>

    <div class="my-8 space-y-4 flex flex-col">
      <div
        v-for="feature in props.features"
        :key="feature"
        class="flex items-center inline-block"
      >
        <UIcon name="mdi:check-decagram" class="w-4 h-4 bg-sky-500" />

        <span class="mx-4 text-gray-700 dark:text-gray-300">{{ feature }}</span>
      </div>
    </div>

    <UButton
      label="Вибрати"
      class="mt-auto w-full justify-center uppercase bg-sky-500 px-4 py-2 hover:bg-sky-400"
      @click="$emit('onCardClick')"
    />
  </div>
</template>
