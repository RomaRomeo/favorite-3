<template>
  <footer class="bg-[#f0fbff] shadow">
    <div class="container p-6 mx-auto">
      <div class="lg:flex">
        <div class="w-full -mx-6 lg:w-2/5">
          <div class="px-4">
            <slot name="left" />
          </div>
        </div>

        <slot name="middle" />
      </div>

      <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

      <div>
        <p class="text-center text-gray-500 dark:text-gray-400">
          © 2024 Favorite - All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>
