<script setup lang="ts">
// import { link } from '#build/ui';

interface Feature {
  icon: string;
  title: string;
  description: string;
  link?: string; 
}

const props = defineProps<{
  items: Feature[];
}>();
</script>
<template>
  <section class="my-8">
    <div class="container px-6 py-12 mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <FeaturesSimpleItem
          v-for="(feature, index) in props.items"
          :key="index"
          :icon="feature.icon"
          :link="feature.link"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </section>
</template>
