<script setup lang="ts">
interface BaseListProps<T> {
  items?: T[];
  loading?: boolean;
  error?: string | null;
  title?: string;
  seeAll?: string;
  loadMore?: boolean;
}

const props = defineProps<BaseListProps<any>>();
const emit = defineEmits(["loadMore"]);
</script>

<template>
  <div v-if="props.items?.length || props.loading || props.error">
    <div v-if="props.title || props.seeAll" class="flex justify-between items-center mb-4">
      <h2 v-if="props.title" class="text-2xl font-bold">{{ props.title }}</h2>

      <NuxtLink
        v-if="props.seeAll"
        :to="props.seeAll"
        class="text-blue-500 hover:underline"
      >
        See all
      </NuxtLink>
    </div>

    <slot name="error" v-if="props.error">
      <BaseNotFound text="Сталася помилка сервера. Будь-ласка спробуйте пізніше" />
    </slot>

    <div v-else class="grid gap-4">
      <slot
        v-for="(item, index) in props.items"
        :key="index"
        :item="item"
        :index="index"
        name="item"
      />
      <slot v-if="props.loading" name="loading" />
    </div>

    <button
      v-if="props.loadMore && !props.loading"
      @click="emit('loadMore')"
      class="mt-4 w-full text-center text-blue-500 hover:underline"
    >
      Завантажити ще
    </button>
  </div>

  <template v-else>
    <slot name="empty">
      <BaseNotFound text="Оголошень ще немає" />
    </slot>
  </template>
</template>
