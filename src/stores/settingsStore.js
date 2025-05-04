import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    settings: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchSettings() {
      try {
        this.loading = true;
        const docRef = doc(db, "settings", "appSettings");
        const docSnap = await getDoc(docRef);
        this.settings = docSnap.exists()
          ? docSnap.data()
          : {
              socialMedia: {},
              contactNumbers: {},
              logo: {},
              homeSliders: {},
            };
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
