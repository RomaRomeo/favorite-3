<script setup lang="ts">
import { formatPromo } from "~/services/format/promo";
const { data, error, status } = useFetch<{ data: IResponseNews[] }>("/json/promo.json", { method: "GET", server: false });
const news = computed(() => (data.value ? formatPromo(data.value.data) : []));
</script>

<template>
  <UContainer>
    <BaseList
      :items="news"
      :loading="status === 'idle' || status === 'pending'"
      :error="error?.message"
      list-class="grid gap-4"
      title="Акції"
    >
      <template #item="{ item }">
        <PostItem v-bind="item" />
      </template>
      <template #loading>
        <PostSkeletonItem />
      </template>
    </BaseList>
  </UContainer>
</template>
