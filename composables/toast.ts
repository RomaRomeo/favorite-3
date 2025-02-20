const [provideToast, useToaster] = useSingleton<{
  error: (msg: string, title?: string) => void;
  success: (msg: string, title?: string) => void;
}>();

export { provideToast, useToaster };
