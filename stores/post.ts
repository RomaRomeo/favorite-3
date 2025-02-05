import { defineStore } from "pinia";

const usePostStore = defineStore("post", {
  state: () => ({
    post: [{ id: 1 }],
  }),

  getters: {},

  actions: {}
});

export default usePostStore;
