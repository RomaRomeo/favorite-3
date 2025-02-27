<script setup lang="ts">
import { formatCablePlan } from "~/services/format/cable-plan";
import { ModalPlansSubmit } from "#components";

const modal = useModal();
const selectedCategory = ref("ходорів");
const { data, error, status } = useFetch<{ data: IResponseCablePlan[] }>(
  "/json/cable-plans.json",
  { method: "GET", server: false }
);

const plans = computed(() =>
  data.value ? formatCablePlan(data.value.data) : []
);
const filteredPlans = computed(() =>
  plans.value.filter((p) => p.category === selectedCategory.value)
);
const categories = computed(() => [
  ...new Set(plans.value.map((plan) => plan.category)),
]);

function onSelectInternetPlanClick(plan: CablePlan) {
  modal.open(ModalPlansSubmit, plan);
}
</script>

<template>
  <UContainer>
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
      Тарифні плани для кабельного телебачення
    </h2>

    <USeparator orientation="horizontal" class="my-8" />

    <p class="text-lg text-gray-500 dark:text-gray-300 mb-10">
      Обирайте оптимальний тариф для кабельного телебачення! Насолоджуйтесь
      улюбленими телеканалами та вигідними умовами для всієї родини.
    </p>

    <BaseToggle
      v-if="categories.length"
      v-model="selectedCategory"
      :options="categories"
      class="mb-10"
    />

    <BaseList
      :items="filteredPlans"
      :loading="status === 'idle' || status === 'pending'"
      :error="error?.message"
      list-class="flex justify-center gap-2"
    >
      <template #item="{ item }">
        <CardPlan
          class="max-w-[300px]"
          v-bind="item"
          @onCardClick="onSelectInternetPlanClick(item)"
        />
      </template>
      <template #loading>
        <CardPlanSkeleton />
      </template>
    </BaseList>
  </UContainer>
</template>
