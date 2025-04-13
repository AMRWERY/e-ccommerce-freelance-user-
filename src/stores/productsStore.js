import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    selectedProduct: null,
  }),

  actions: {
    async fetchAllProducts() {
      try {
        const [productsSnapshot, merchantsSnapshot] = await Promise.all([
          getDocs(query(collection(db, "products"))),
          getDocs(query(collection(db, "merchants-products"))),
        ]);
        const regularProducts = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const merchantProducts = merchantsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.products = [...regularProducts, ...merchantProducts];
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    },

    async fetchProductDetail(productId) {
      if (!productId) {
        this.selectedProduct = null;
        return null;
      }
      try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
          this.selectedProduct = { id: productId, ...productSnap.data() };
          return this.selectedProduct;
        }
        const merchantRef = doc(db, "merchants-products", productId);
        const merchantSnap = await getDoc(merchantRef);
        if (merchantSnap.exists()) {
          this.selectedProduct = { id: productId, ...merchantSnap.data() };
          return this.selectedProduct;
        }
        this.selectedProduct = null;
        return null;
      } catch (error) {
        console.error("Error fetching product details:", error);
        this.selectedProduct = null;
        throw error;
      }
    },
  },

  getters: {
    getProductById: (state) => (id) => state.products.find((p) => p.id === id),
  },
});
