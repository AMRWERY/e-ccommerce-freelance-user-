import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
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
        // console.log('all products:', this.products)
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

    async submitProductRating(productId, userId, rating) {
      try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);
        if (!productSnap.exists()) {
          throw new Error("Product not found");
        }
        const productData = productSnap.data();
        const ratings = productData.ratings || [];
        let updatedRatings;
        if (userId) {
          // Authenticated user rating
          updatedRatings = ratings.filter((r) => r.userId !== userId);
          updatedRatings.push({ userId, rating });
        } else {
          // Anonymous rating (add without user ID)
          updatedRatings = [...ratings, { rating }];
        }
        const total = updatedRatings.reduce((sum, r) => sum + r.rating, 0);
        const average = total / updatedRatings.length;
        await updateDoc(productRef, {
          ratings: updatedRatings,
          averageRating: average,
          totalRatings: updatedRatings.length,
        });
        return true;
      } catch (error) {
        console.error("Error submitting rating:", error);
        throw error;
      }
    },
  },

  getters: {
    getProductById: (state) => (id) => state.products.find((p) => p.id === id),
  },
});
