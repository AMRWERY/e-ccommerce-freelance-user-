export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    isLoading: false,
    // storedUser: JSON.parse(localStorage.getItem("user")),
  }),

  actions: {
    fetchCart() {
      this.isLoading = true;
      // const uid = this.storedUser?.uid;
      try {
        const savedCart = localStorage.getItem("cart");
        this.cart = savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        this.cart = [];
      } finally {
        this.isLoading = false;
      }
    },

    async addToCart(cartItem) {
      const {
        id,
        title,
        titleAr,
        discountedPrice,
        originalPrice,
        imageUrl1,
        discount,
        quantity = 1
      } = cartItem;
      // const uid = this.storedUser?.uid;
      const existingProduct = this.cart.find(
        (item) =>
          item.productId === cartItem.productId
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        this.cart.push({
          docId: Date.now().toString(),
          productId: id,
          title,
          titleAr,
          discountedPrice,
          originalPrice,
          imageUrl1,
          discount,
          quantity,
          // uid,
        });
      }
      // this.persistCart(uid);
    },

    updateQuantityInCart(productId, newQuantity) {
      // const uid = this.storedUser?.uid;
      const product = this.cart.find((item) => item.productId === productId);
      if (product) {
        product.quantity = newQuantity;
        // this.persistCart(uid);
      }
    },

    removeFromCart(docId) {
      // const uid = this.storedUser?.uid;
      this.cart = this.cart.filter((item) => item.docId !== docId);
      // this.persistCart(uid);
    },

    clearCart() {
      // const uid = this.storedUser?.uid;
      this.cart = [];
      localStorage.removeItem("cart");
    },

    persistCart(cartKey) {
      try {
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
        if (error.name === "QuotaExceededError") {
          alert("Local storage quota exceeded. Please clear some space.");
        }
      }
    },
  },

  getters: {
    isInCart: (state) => (productId) => {
      return state.cart.some((item) => item.productId === productId);
    },
  },
});
