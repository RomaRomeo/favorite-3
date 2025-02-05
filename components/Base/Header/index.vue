<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const isPanelOpen = ref(false);
const headerElRef = ref(null);

function togglePanel() {
  isPanelOpen.value = !isPanelOpen.value;
}

const onClose = () => isPanelOpen.value = false;

onClickOutside(headerElRef, () => onClose());
</script>

<template>
  <header ref="headerElRef" class="bg-[#f0fbff] shadow sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="flex items-center">
        <slot name="logo" />
      </div>

      <nav class="hidden lg:flex items-center space-x-4">
        <slot name="center" />
      </nav>

      <div class="lg:hidden">
        <UButton
          :icon="isPanelOpen ? 'line-md:menu-to-close-transition' : 'line-md:menu'"
          color="neutral"
          variant="ghost"
          @click="togglePanel"
        />
      </div>

      <div class="hidden lg:flex items-center space-x-4">
        <slot name="right" />
      </div>
    </div>

    <transition name="fade">
      <div v-if="isPanelOpen" class="absolute top-full left-0 w-full bg-[#f0fbff] shadow-lg z-40 lg:hidden">
        <div class="container mx-auto p-4">
          <slot name="panel" />
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}
</style>
