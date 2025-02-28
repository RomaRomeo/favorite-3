<script setup lang="ts">
const privatbankLink = ref("https://next.privat24.ua/payments/form/%7B%22token%22:%22d528cb2a2eba97aa53e0d9235b5d9857s8xtxq29%22%7D?lang");
const easyPayLink = ref("https://easypay.ua/ua/catalog/internet/favoryt-tvnet");
const qrCodeLink = ref(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${privatbankLink.value}`);
const items = ref([
  {
    label: "Які переваги онлайн-оплати?",
    icon: "material-symbols-light:star-rounded",
    content:
      "Онлайн-оплата займає лише кілька секунд і не потребує візиту до банку.",
  },
  {
    label: "Чи є додаткові комісії?",
    icon: "material-symbols-light:star-rounded",
    content: "Ні, оплата проходить без додаткових комісій.",
  },
  {
    label: "Що робити, якщо платіж не пройшов?",
    icon: "material-symbols-light:star-rounded",
    content:
      "Зв’яжіться з нашою підтримкою, і ми допоможемо вирішити проблему.",
  },
]);
</script>

<template>
  <div class="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-6">
    <div class="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl text-center">
      <div class="w-full flex justify-center">
        <img src="/images/banners/payment-2.png" alt="Оплата Інтернет Послуг" class="w-48"/>
      </div>

      <h1 class="text-3xl font-bold text-gray-800 mb-4">
        Оплата Інтернет Послуг
      </h1>
      <p class="text-gray-600 mb-6 text-lg">
        Швидко, безпечно та без комісій – оберіть зручний спосіб оплати:
      </p>

      <div class="space-y-4">
        <a
          :href="privatbankLink"
          target="_blank"
          class="flex items-center justify-between p-5 bg-green-100 rounded-2xl shadow hover:bg-green-200 transition flex-col sm:flex-row"
        >
          <img
            src="/svg/privat24.svg"
            alt="ПриватБанк"
            class="w-32 h-16 md:w-40 md:h-20"
          />
          <span
            class="text-lg md:text-xl font-semibold text-green-700 text-center sm:text-left"
            >Оплатити через ПриватБанк</span
          >
        </a>
        <a
          :href="easyPayLink"
          target="_blank"
          class="flex items-center justify-between p-5 bg-blue-100 rounded-2xl shadow hover:bg-blue-200 transition flex-col sm:flex-row"
        >
          <img
            src="/svg/easypay.svg"
            alt="EasyPay"
            class="w-32 h-16 md:w-40 md:h-20"
          />
          <span
            class="text-lg md:text-xl font-semibold text-blue-700 text-center sm:text-left"
            >Оплатити через EasyPay</span
          >
        </a>
      </div>

      <div class="mt-8">
        <p class="text-gray-600 mb-4 text-lg">
          Або відскануйте QR-код для швидкої оплати:
        </p>
        <img
          :src="qrCodeLink"
          alt="QR-код для оплати"
          class="mx-auto w-40 h-40 rounded-lg shadow animate-pulse"
        />
      </div>

      <div class="my-10 text-left">
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Часті питання</h2>
        <UAccordion :items="items" />
      </div>

      <UButton
        label="Зв’язатися з підтримкою"
        class="uppercase"
        to="/contact"
        color="error"
        variant="solid"
        size="xl"
      />
    </div>
  </div>
</template>
