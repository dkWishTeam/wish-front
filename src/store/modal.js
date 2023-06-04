import { defineStore } from "pinia";

export const modalStore = defineStore({
  id: "modal",
  state: () => ({
    showModal: false,
    mode: "register",
    updateId: 0,
  }),
  actions: {
    openModal(buttonMode, id) {
      this.showModal = true;
      this.updateId = id;
      if (buttonMode === "modify") {
        this.mode = "modify";
      } else {
        this.mode = "register";
      }

      console.log(this.updateId);
    },
    closeModal() {
      this.showModal = false;
    },
  },
  getters: {
    getShowModal() {
      return this.showModal;
    },
    getModalMode() {
      return this.mode;
    },
    getUpdateId() {
      return this.updateId;
    },
  },
});
