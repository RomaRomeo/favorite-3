<script setup lang="ts">


const { data: settlements, error, status } = await useFetch<{ data: string[] }>(
  "/json/settlements.json",
  { method: "GET", server: false }
);

const props = defineProps<{
  modelValue?: number | string;
  variant?: string;
  placeholder?: string;
  size?: string;
  disabled?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);
const innerValue = ref(props.modelValue);
const updateValue = (newValue: string) => {
  innerValue.value = newValue;
  emit('update:modelValue', newValue); 
};

</script>
<template v-if="settlements?.data.length">
  <USelect
    v-model="innerValue"
    :items="settlements?.data"
    :placeholder="props.placeholder || 'Виберіть зі списку'"
    :variant="props.disabled ? 'subtle' : props.variant"
    :size="props.size"
    :disabled="props.disabled"
    @update:modelValue="updateValue"
  />
</template>