<script setup lang="ts">
const props = defineProps<{
  articles: {
    id: string;
    image: string;
    title: string;
    description: string;
    category: string;
    author?: {
      name: string;
      avatar: string;
    };
    date: string;
  }[];
}>();
const emit = defineEmits(["onCardClick"]);
</script>

<template>
  <div class="grid sm:grid-cols-2 grid-cols-1 gap-6 w-full">
    <ArticleCardItem
      v-for="(article, index) in props.articles"
      :key="index"
      v-bind="article"
      @on-card-click="$emit('onCardClick', article.id)"
    />
  </div>
</template>
