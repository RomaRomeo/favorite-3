<script setup lang="ts">
interface CardsItem {
  id: number;
  title: string;
  link?: string;
  description?: string;
  date: string;
  image: string;
}

const props = defineProps<{
  title: string;
  description: string;
  posts: CardsItem[];
}>();
</script>

<template>
  <section class="my-8">
    <div class="container px-6 py-10 mx-auto bg-[#f0fbff] shadow rounded-lg">
      <div class="text-center">
        <h1
          class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
        >
          {{ props.title }}
        </h1>
        <p class="max-w-lg mx-auto mt-4 text-gray-500">{{ props.description }}</p>
      </div>
      <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
        <BlogCardsItem
          v-for="post in props.posts"
          :key="post.id"
          :title="post.title"
          :link="post.link"
          :description="post.description"
          :date="post.date"
          :image="post.image"
        />
      </div>
    </div>
  </section>
</template>
