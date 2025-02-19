<script setup lang="ts">
import { inject } from 'vue'
const modalState = inject(modalInjectionKey)
const { isOpen } = useModal()
</script>

<template>
  <component
    :is="modalState.component"
    v-if="modalState"
    v-bind="modalState.props"
    v-model:open="isOpen"
  />
</template>