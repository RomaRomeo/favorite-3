<script setup lang="ts">
import type { FormError } from "#ui/types";

const props = defineProps<{
  planName: string;
  category: string;
}>();

const modal = useModal();
const state = reactive({
  name: "",
  email: "",
  phone: "",
  comment: "",
});
const loading = ref(false);

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ name: "name", message: "Поле <Ваше ім’я> є обовʼязковим" });
  if (!state.phone) errors.push({ name: "phone", message: "Поле <Номер телефону> є обовʼязковим" });
  return errors;
};

async function onSubmit() {
  loading.value = true;

  const requestData = {
    ...state,
    planName: props.planName,
    category: props.category,
  };

  const { data, error } = await useFetch("https://getform.io/f/bejrjqda", {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: { "Content-Type": "application/json" },
  });

  if (error.value) {
    console.error("Error submitting form:", error.value);
    loading.value = false;
  } else {
    loading.value = false;
    console.log("Form submitted successfully", data.value);
    modal.close();
  }
}
</script>

<template>
  <UModal>
    <template #header>
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
      </div>
    </template>

    <template #body>
      <div class="p-4">
        <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center mb-4">
          <p class="text-lg text-gray-700 dark:text-gray-300 gap-2">
            Ви обрали тариф:
            <span class="font-semibold text-primary">{{ planName }}</span>
            <span class="font-semibold text-primary capitalize">({{ category }})</span>
          </p>
        </div>

        <UForm :validate="validate" :state="state" @submit="onSubmit">
          <UFormField name="name" class="mb-4">
            <template #label>
              <div class="flex items-center gap-2">
                <UIcon name="material-symbols:person-edit-outline-sharp" class="w-4 h-4 text-gray-500" />
                <div>Ваше ім’я*</div>
              </div>
            </template>
            <UInput v-model="state.name" variant="outline" size="xl" color="secondary" class="w-full" />
          </UFormField>

          <UFormField name="email" class="mb-4">
            <template #label>
              <div class="flex items-center gap-2">
                <UIcon name="ic:outline-email" class="w-4 h-4 text-gray-500" />
                <div>Email</div>
              </div>
            </template>
            <UInput v-model="state.email" variant="outline" size="xl" color="secondary" class="w-full" />
          </UFormField>

          <UFormField name="phone" class="mb-4">
            <template #label>
              <div class="flex items-center gap-2">
                <UIcon name="bi:telephone" class="w-4 h-4 text-gray-500" />
                <span>Номер телефону*</span>
              </div>
            </template>
            <UInput v-model="state.phone" variant="outline" size="xl" color="secondary" class="w-full" />
          </UFormField>

          <UFormField name="comment" class="mb-8">
            <template #label>
              <div class="flex items-center gap-2">
                <UIcon name="iconamoon:comment-check-light" class="w-4 h-4 text-gray-500" />
                <span>Коментар (необов’язково)</span>
              </div>
            </template>
            <UTextarea v-model="state.comment" variant="outline" size="xl" color="secondary" class="w-full" />
          </UFormField>

          <UButton
            :disabled="!state.phone || !state.name || loading"
            type="submit"
            label="Відправити заявку"
            class="mt-auto w-full justify-center uppercase bg-sky-500 px-4 py-2 hover:bg-sky-400 disabled:bg-grey-100"
          >
            {{ loading ? "Завантаження..." : "Відправити заявку" }}
          </UButton>
        </UForm>
      </div>
    </template>
  </UModal>
</template>
