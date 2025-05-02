import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const useShippingStore = defineStore("shipping", {
  state: () => ({
    shippingCosts: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchShippingCosts() {
      try {
        this.loading = true;
        const docRef = doc(db, "shipping-cost", "cwqaLQhGYdjOpVCBRH0s");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.shippingCosts = docSnap.data();
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },

  getters: {
    getGovernorates: (state) => (countryCode) => {
      return state.shippingCosts?.[countryCode]?.governorates || [];
    },

    getShippingCostByGovernorate: (state) => (countryCode, governorateName) => {
      const governorate = state.shippingCosts?.[
        countryCode
      ]?.governorates?.find((g) => g.title === governorateName);
      return governorate?.cost || 0;
    },
  },
});
