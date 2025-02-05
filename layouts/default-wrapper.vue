<script setup lang="ts">
// remove in future
const color = useColorMode();
color.preference = 'light';
</script>
<template>
  <div class="min-h-screen bg-gray-100">
    <main class="flex-1 p-6 h-full min-h-[calc(100vh-136px)]">
      <slot />
    </main>
  </div>
</template>