<script setup lang="ts">
import { formatInternetPlans } from "~/services/format/internet-plans";
import { ModalInternetPlansSubmit } from "#components";

const modal = useModal();
const selectedCategory = ref("ходорів");
const { data, error, status } = useFetch<{ data: IResponseInternetPlans[] }>(
  "/json/internet-plans.json",
  { method: "GET", server: false }
);

const plans = computed(() =>
  data.value ? formatInternetPlans(data.value.data) : []
);
const filteredPlans = computed(() =>
  plans.value.filter((p) => p.category === selectedCategory.value)
);
const categories = computed(() => [
  ...new Set(plans.value.map((plan) => plan.category)),
]);

function onSelectInternetPlanClick (planName: string, category: string) {
  modal.open(ModalInternetPlansSubmit, { planName, category })
}
</script>

<template>
  <UContainer>
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
      Тарифні плани для інтернету
    </h2>
    <p class="text-lg text-gray-500 dark:text-gray-300 mb-10">
      Оберіть оптимальний тариф для вашого використання інтернету. Ми пропонуємо
      різні варіанти швидкості та ціни для кожного користувача.
    </p>

    <BaseToggle v-if="categories.length" v-model="selectedCategory" :options="categories" class="mb-10" />

    <BaseList
      :items="filteredPlans"
      :loading="status === 'idle' || status === 'pending'"
      :error="error?.message"
      list-class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <template #item="{ item }">
        <InternetPricingCard v-bind="item" @click="onSelectInternetPlanClick(item.name, item.category)" />
      </template>
      <template #loading>
        <InternetSkeletonPricingCard />
      </template>
    </BaseList>
  </UContainer>
</template>
