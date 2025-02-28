<script setup lang="ts">
import { formatNews } from "~/services/format/news";
const { data, error, status } = useFetch<{ data: IResponseNews[] }>("/json/news.json", { method: "GET", server: false });
const news = computed(() => (data.value ? formatNews(data.value.data) : []));
</script>

<template>
  <UContainer>
    <BaseList
      :items="news"
      :loading="status === 'idle' || status === 'pending'"
      :error="error?.message"
      list-class="grid gap-4"
      title="Оголошення"
    >
      <template #item="{ item }">
        <PostCardItem v-bind="item" />
      </template>
      <template #loading>
        <PostCardsSkeleton />
      </template>
    </BaseList>
  </UContainer>
</template>
