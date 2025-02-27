<script setup lang="ts">
import { formatInternetPlan } from "~/services/format/internet-plan";
import { ModalPlansSubmit } from "#components";

const modal = useModal();
const selectedCategory = ref("ходорів");
const { data, error, status } = useFetch<{ data: IResponseInternetPlan[] }>(
  "/json/internet-plans.json",
  { method: "GET", server: false }
);

const plans = computed(() =>
  data.value ? formatInternetPlan(data.value.data) : []
);
const filteredPlans = computed(() =>
  plans.value.filter((p) => p.category === selectedCategory.value)
);
const categories = computed(() => [
  ...new Set(plans.value.map((plan) => plan.category)),
]);

function onSelectInternetPlanClick(plan: InternetPlan) {
  modal.open(ModalPlansSubmit, plan);
}
</script>

<template>
  <UContainer>
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
      Тарифні плани для інтернету
    </h2>

    <USeparator orientation="horizontal" class="my-8" />

    <p class="text-lg text-gray-500 dark:text-gray-300 mb-10">
      Оберіть оптимальний тариф для вашого використання інтернету. Ми пропонуємо
      різні варіанти швидкості та ціни для кожного користувача.
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
      list-class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <template #item="{ item }">
        <CardPlan
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
