<script setup lang="ts">
defineProps<{ 
  options: string[];
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="max-w-full p-2 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-800">
    <div class="flex flex-wrap gap-3 justify-center">
      <button
        v-for="option in options"
        :key="option"
        @click="emit('update:modelValue', option)"
        class="min-w-[250px] px-6 py-3 text-lg font-semibold uppercase transition-colors duration-300 transform rounded-lg focus:outline-none"
        :class="{
          'bg-blue-500 text-white dark:bg-blue-600': modelValue === option,
          'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600': modelValue !== option
        }"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>
