<script lang="ts" setup>
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <NuxtLayout name="default-wrapper">
    <BaseError :error="props.error" />
  </NuxtLayout>
</template>
