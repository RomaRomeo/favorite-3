<script setup lang="ts">

const props = defineProps<{
  name: string;
  category: string;
  type: string;
}>();

const modal = useModal();

</script>

<template>
  <UModal class="!max-w-[900px]"
    title="Modal with description"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  >
    <!-- <template #header>
      <div class="flex items-center space-x-3">
        <div class="bg-primary/10 p-3 rounded-full text-primary flex items-center justify-center">
          <UIcon name="material-symbols:broadcast-on-personal" class="w-10 h-10 bg-sky-500" />
        </div>
        <div>
          <h2 class="text-xl font-semibold">Підключення тарифу</h2>
          <p class="text-md text-gray-500">
            Заповніть форму, і ми зв’яжемося з вами найближчим часом.
          </p>
        </div>
        <UButton
          icon="line-md:menu-to-close-transition"
          color="neutral"
          variant="ghost"
          @click="modal.close()"
        />
      </div>
    </template> -->

    <template #body>
      <UPlaceholder class="h-48" />
    </template>
  </UModal>
</template>
