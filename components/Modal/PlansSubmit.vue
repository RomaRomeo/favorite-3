<script setup lang="ts">
import type { FormError } from "#ui/types";

const props = defineProps<{
  name: string;
  category: string;
  type: string;
}>();

const toast = useToaster()
const modal = useModal();
const state = reactive({
  name: "",
  settlement: "",
  street: "",
  email: "",
  phone: "",
  comment: "",
});
const loading = ref(false);

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ name: "name", message: "Поле <Ваше ім’я та прізвище> є обовʼязковим" });
  if (!state.phone) errors.push({ name: "phone", message: "Поле <Номер телефону> є обовʼязковим" });
  return errors;
};

function onSubmit() {
  loading.value = true;

  useFetch("https://getform.io/f/ayvkkqqb", {
    method: "POST",
    body: JSON.stringify({ ...state, type: props.type, plan: props.name, category: props.category }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.data?.value) {
        toast.success("Дякуємо! Ваша заявка успішно відправлена. Ми зв’яжемося з вами найближчим часом.", "Заявку успішно відправлено!");
      } else {
        toast.error("Сталася помилка під час відправки заявки. Будь ласка, спробуйте ще раз або зв’яжіться з нами.", "Помилка відправки!");
      }
    })
    .catch(() => toast.error("Сталася помилка під час відправки заявки. Будь ласка, спробуйте ще раз або зв’яжіться з нами.", "Помилка відправки!"))
    .finally(() => {
      loading.value = false;
      modal.close();
    });
}

watch(
  () => props.category,
  (c) => state.settlement = c === 'ходорів' ? 'Ходорів' : '',
  { immediate: true }
);

</script>

<template>
  <UModal >
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
        <UButton
          icon="line-md:menu-to-close-transition"
          color="neutral"
          variant="ghost"
          @click="modal.close()"
        />
      </div>
    </template>

    <template #body>
      <div class="p-4">
        <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center mb-4">
          <p class="text-lg text-gray-700 dark:text-gray-300 gap-2">
            Ви обрали тариф:
            <span class="font-semibold text-primary">{{ name }}</span>
            <span class="font-semibold text-primary capitalize">({{ category }})</span>
          </p>
        </div>

        <UForm :validate="validate" :state="state" @submit="onSubmit">
          <UFormField name="name" class="mb-4" label="Ваше ім’я та прізвище" required>
            <UInput v-model="state.name" placeholder="Введіть ваше ім’я та прізвище" variant="outline" size="xl" color="secondary" class="w-full" icon="material-symbols:person-edit-outline-sharp"/>
          </UFormField>
          <UFormField name="settlement" class="mb-4" label="Назва населеного пункту" required>
            <SelectorSettlements v-model="state.settlement" :exclude-khodoriv="props.category === 'ходорів'" placeholder="Оберіть населений пункт" variant="outline" size="xl" class="w-full" />
          </UFormField>
          <UFormField name="email" class="mb-4" required label="Вулиця та номер будинку (квартири)" >
            <UInput v-model="state.street" placeholder="Введіть вулицю та номер будинку (квартири)" variant="outline" size="xl" color="secondary" class="w-full" icon="streamline:street-sign" />
          </UFormField>
          <UFormField name="email" class="mb-4" label="Електронна пошта" hint="Необов’язкове поле">
            <UInput v-model="state.email" placeholder="Введіть електронну пошту" variant="outline" size="xl" color="secondary" class="w-full" icon="ic:outline-email" />
          </UFormField>
          <UFormField name="phone" class="mb-4" required label="Номер телефону">
            <UInput v-model="state.phone" placeholder="Введіть номер телефону" variant="outline" size="xl" color="secondary" class="w-full" icon="bi:telephone" />
          </UFormField>
          <UFormField name="comment" label="Коментар" class="mb-8" hint="Необов’язкове поле">
            <UTextarea v-model="state.comment" variant="outline" size="xl" color="secondary" class="w-full"  />
          </UFormField>

          <UButton
            :disabled="!state.name || !state.settlement || !state.street || !state.phone || loading"
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
