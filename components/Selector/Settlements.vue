<script setup lang="ts">
const props = defineProps<{
  modelValue?: string;
  variant?: "outline" | "subtle" | "soft" | "ghost" | "none";
  placeholder?: string;
  size?: "sm" | "md" | "xs" | "lg" | "xl";
  disabled?: boolean;
  excludeKhodoriv?: boolean;
}>();

const innerValue = ref(props.modelValue);
const emit = defineEmits(["update:modelValue"]);

const updateValue = (newValue: string) => {
  innerValue.value = newValue;
  emit('update:modelValue', newValue); 
};

const { data: settlements } = await useFetch<{ data: string[] }>(
  "/json/settlements.json",
  { method: "GET", server: false }
);
const formattedSettlements = computed(() => props.excludeKhodoriv ? settlements.value?.data  : settlements.value?.data.filter(i => i !== 'Ходорів'))

</script>
<template v-if="settlements?.data.length">
  <USelect
    v-model="innerValue"
    :items="formattedSettlements"
    :placeholder="props.placeholder || 'Виберіть зі списку'"
    :variant="props.disabled || props.excludeKhodoriv ? 'subtle' : props.variant"
    :size="props.size"
    :disabled="props.disabled || props.excludeKhodoriv"
    @update:modelValue="updateValue"
    icon="mdi:home-city-outline"
  />
</template>