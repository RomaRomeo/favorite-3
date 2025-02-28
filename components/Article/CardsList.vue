<script setup lang="ts">
const props = defineProps<{
  articles: {
    image: string;
    title: string;
    description: string;
    category: string;
    author: {
      name: string;
      avatar: string;
    };
    date: string;
  }[];
}>();
</script>

<template>
  <div class="flex gap-4 w-full">
    <ArticleCardItem
      v-for="(article, index) in props.articles"
      :key="index"
      v-bind="article"
    />
  </div>
</template>
