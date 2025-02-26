<script setup lang="ts">
defineProps<{ 
  options: string[];
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="p-2 mx-auto max-w-[540px] overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800">
    <div class="flex gap-3 justify-center">
      <UButton
        v-for="option in options"
        :key="option"
        @click="emit('update:modelValue', option)"
        :label="option"
        class="w-full flex shrink justify-center px-6 py-3 text-lg font-semibold uppercase transition-colors duration-300 transform rounded-lg focus:outline-none hover:bg-sky-400"
        :class="{
          'bg-sky-500 text-white dark:bg-blue-600': modelValue === option,
          'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600': modelValue !== option
        }"
      />
    </div>
  </div>
</template>
