<script lang="ts" setup>
const alertMap = reactive(
  new Map<
    number,
    {
      type: "success" | "error";
      title?: string;
      message: string;
    }
  >()
);

function addToast(toast: { type: "success" | "error"; message: string; title?: string }) {
  const key = Date.now();
  alertMap.set(key, toast);
  setTimeout(() => alertMap.delete(key), 7000);
}

const addErrorToast = (message: string, title?: string) => addToast({ type: "error", title, message });
const addSuccessToast = (message: string, title?: string) => addToast({ type: "success", title, message });

provideToast({ error: addErrorToast, success: addSuccessToast });
</script>

<template>
  <div v-if="alertMap.size !== 0" class="z-[99] w-full md:w-[560px] text-black toast toast-top toast-center">
    <UAlert
      v-for="[key, alert] in alertMap"
      :key="key"
      :title="alert.title"
      :description="alert.message"
      :color="alert.type"
      variant="subtle"
      class="mx-auto animate-fade-in"
      closable
      @close="alertMap.delete(key)"
    />
  </div>
</template>

<style>
/* Toast Styles */
.toast {
  position: fixed;
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  gap: 8px;
  padding: 16px;
  right: 0;
  left: auto;
  top: auto;
  bottom: 0;
  transform: translateX(0) translateY(0);
}

.toast > * {
  animation: toast-pop 0.25s ease-out;
}

/* Position Variants */
.toast-start {
  right: auto;
  left: 0;
}

.toast-center {
  right: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.toast-end {
  right: 0;
  left: auto;
}

.toast-bottom {
  top: auto;
  bottom: 0;
}

.toast-middle {
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
}

.toast-top {
  top: 0;
  bottom: auto;
}

/* Toast Animation */
@keyframes toast-pop {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
