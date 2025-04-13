import {
  getDocs,
  collection,
  query,
  getDoc,
  doc
} from "firebase/firestore";
import { db } from "@/firebase";

export const useMerchantsProductsStore = defineStore("merchants-products", {
  state: () => ({
    products: [],
    selectedProduct: null,
  }),

  actions: {
    fetchMerchantProducts() {
      getDocs(query(collection(db, "merchants-products")))
        .then((querySnap) => {
          const allProducts = querySnap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          this.products = allProducts;
          // console.log(this.products);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },


    fetchMerchantProductDetail(productId) {
      if (!productId) return null;
      const docRef = doc(db, "merchants-products", productId);
      return getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const product = { ...docSnap.data(), id: productId };
            this.selectedProduct = product;
            return product;
          } else {
            this.selectedProduct = null;
            return null;
          }
        })
        .catch((error) => {
          return null;
        });
    },
  },

  getters: {},
});
