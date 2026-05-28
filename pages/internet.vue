<script setup lang="ts">
import { ModalPlansSubmit } from "#components";
import { internetPlans } from "~/data/internet-plans";

useSeoMeta({
  title: 'Тарифи на інтернет у Ходорові | Фаворит ТВ/НЕТ',
  description: 'Тарифи на інтернет у Ходорові та регіоні від 250 грн/міс. Швидкість до 1 Гбіт/с. Безлімітний трафік.',
  ogTitle: 'Тарифні плани Інтернет | Фаворит ТВ/НЕТ',
  ogDescription: 'Оберіть оптимальний тариф для інтернету. Швидкість до 1 Гбіт/с від 250 грн/міс.',
  ogImage: '/images/slides/seo_banner.png',
})

const modal = useModal();
const selectedCategory = ref("ходорів");

const plans = computed(() => internetPlans);
const filteredPlans = computed(() => plans.value.filter((p) => p.category === selectedCategory.value));
const categories = computed(() => [...new Set(plans.value.map((plan) => plan.category))]);

const promoPlans = computed(() =>
  filteredPlans.value.filter((p) => p.badge)
);
const regularPlans = computed(() =>
  filteredPlans.value.filter((p) => !p.badge)
);

function onSelectInternetPlanClick(plan: Plan) {
  modal.open(ModalPlansSubmit, plan);
}
</script>

<template>
  <UContainer class="pt-10 md:pt-12 pb-16">
    <h1 class="text-3xl font-semibold text-slate-900 mb-4">
      Тарифні плани для інтернету
    </h1>

    <USeparator orientation="horizontal" class="my-8" />

    <p class="text-lg text-slate-500 mb-10">
      Оберіть оптимальний тариф для вашого використання інтернету. Ми пропонуємо
      різні варіанти швидкості та ціни для кожного користувача.
    </p>

    <BaseToggle
      v-if="categories.length"
      v-model="selectedCategory"
      :options="categories"
      class="mb-12"
    />

    <BaseList
      :items="regularPlans"
      :loading="false"
      :error="undefined"
      :list-class="`grid grid-cols-1 sm:grid-cols-2 gap-5 ${
        regularPlans.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
      }`"
    >
      <template #item="{ item }">
        <CardPlan v-bind="item" @onCardClick="onSelectInternetPlanClick(item)" />
      </template>
      <template #loading>
        <CardPlanSkeleton />
      </template>
    </BaseList>

    <div
      v-if="promoPlans.length"
      class="mt-5 flex justify-center"
    >
      <div class="w-full max-w-sm">
        <CardPlan
          v-for="plan in promoPlans"
          :key="plan.id"
          v-bind="plan"
          @onCardClick="onSelectInternetPlanClick(plan)"
        />
      </div>
    </div>

    <CalculatorPlanRecommendation :category="selectedCategory" />
  </UContainer>
</template>
