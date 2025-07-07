<script setup lang="ts">
const contacts = [
  {
    title: 'Телефон служби підтримки',
    subtitle: 'Ми на зв’язку у робочий час',
    description: `Пн–Пт: 9:00–17:00 (перерва 13:00–14:00)<br/>Сб: 9:00–15:00 (в телефонному режимі)<br/>Нд — вихідний`,
    details: ['+38 (067) 93 610 73', '+38 (093) 93 610 73'],
    icon: 'PhoneIcon',
    isLink: true,
  },
  {
    title: 'Електронна пошта',
    subtitle: 'Відповідаємо упродовж 24 годин',
    details: ['tv.net@ukr.net'],
    icon: 'EnvelopeIcon',
    isLink: true,
  },
  {
    title: 'Фізична адреса офісу',
    subtitle: 'Завітайте особисто або надішліть лист',
    details: ['81750, м. Ходорів, вул. Шептицького, 9'],
    icon: 'MapPinIcon',
    isLink: false,
  },
]
</script>

<template>
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-12 mx-auto">
        <div>
          <p class="font-medium text-blue-500 dark:text-blue-400">Зв’яжіться з нами</p>
          <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Ми на зв’язку</h1>
          <p class="mt-3 text-gray-500 dark:text-gray-400">Наша команда з радістю допоможе вам.</p>
        </div>
  
        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <ContactItem
              v-for="(contact, i) in contacts"
              :key="i"
              :title="contact.title"
              :description="contact.description"
              :details="contact.details"
              :icon="contact.icon"
            />
          </div>
  
          <!-- Map -->
          <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1298.1103473362468!2d24.304825538846732!3d49.40473199285285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDI0JzE3LjAiTiAyNMKwMTgnMjIuMCJF!5e0!3m2!1suk!2sit!4v1746451524648!5m2!1suk!2sit"
              width="100%"
              height="100%"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />

            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Натисніть на мапу для навігації</p>

          </div>
        </div>
  
        <div class="mt-12 text-gray-700 dark:text-gray-300">
          <h2 class="text-xl font-semibold mb-2">Ми можемо допомогти вам з:</h2>
          <ul class="list-disc list-inside space-y-1">
            <li>Подачею заявки на під’єднання до телекомунікаційної мережі.</li>
            <li>Консультаціями щодо роботи провайдера та мережі.</li>
            <li>Замовленням оголошення на «Інфоканалі».</li>
            <li>Викликом фахівця для усунення поломок або монтажу додаткового обладнання.</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  