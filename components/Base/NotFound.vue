<script setup lang="ts">
export interface BaseNotFoundProps {
  text?: string | null;
}
const color = useColorMode();
const props = withDefaults(defineProps<BaseNotFoundProps>(), {
  text: "Data not found or server not responding.. Please try again later.",
});
const isDarkTheme = computed(() => color.value === 'dark');
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-16 pb-32">
    <slot name="icon" :is-dark-theme="isDarkTheme">
      <BaseIconNotFound :is-dark-theme="isDarkTheme" class="mx-auto mb-16" />
    </slot>

    <slot name="text">
      <div class="text-secondary">
        {{ props.text }}
      </div>
    </slot>
    <slot />
  </div>
</template>
