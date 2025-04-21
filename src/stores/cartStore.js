export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
    isLoading: false,
    storedUser: JSON.parse(localStorage.getItem("user")),
  }),

  actions: {
    fetchCart() {
      this.isLoading = true;
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          // Parse and deduplicate cart items based on productId
          const parsedCart = JSON.parse(savedCart);
          const uniqueCart = [];
          const seenProductIds = new Set();
          
          parsedCart.forEach(item => {
            if (!seenProductIds.has(item.productId)) {
              seenProductIds.add(item.productId);
              uniqueCart.push(item);
            }
          });
          
          this.cart = uniqueCart;
        } else {
          this.cart = [];
        }
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

      // Check for existing product and update quantity
      const existingProductIndex = this.cart.findIndex(
        (item) => item.productId === id
      );

      if (existingProductIndex !== -1) {
        // Update existing item quantity
        this.cart[existingProductIndex].quantity += quantity;
      } else {
        // Add new item
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
          uid: this.storedUser?.uid,
        });
      }

      // Persist cart immediately
      this.persistCart();
    },

    updateQuantityInCart(productId, newQuantity) {
      const productIndex = this.cart.findIndex((item) => item.productId === productId);
      if (productIndex !== -1) {
        this.cart[productIndex].quantity = newQuantity;
        this.persistCart();
      }
    },

    removeFromCart(docId) {
      this.cart = this.cart.filter((item) => item.docId !== docId);
      this.persistCart();
    },

    clearCart() {
      this.cart = [];
      localStorage.removeItem("cart");
    },

    persistCart() {
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
