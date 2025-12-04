import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    current: "en",
    package: "aswan",
  }),

  actions: {
    toggleLang() {
      this.current = this.current === "en" ? "ar" : "en";
    },
    setPackages(pack) {
      this.package = pack;
    },
  },
});
