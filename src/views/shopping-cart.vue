<template>
  <div>
    <div class="py-6 bg-white sm:py-8 lg:py-12">
      <div class="max-w-screen-lg px-4 mx-auto md:px-8">
        <div class="mb-6 sm:mb-10 lg:mb-16">
          <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-6 lg:text-3xl">{{ $t('cart.your_cart') }}
          </h2>
        </div>

        <div v-if="cartStore.cart.length === 0" class="p-6 text-center bg-white border border-gray-200 rounded-lg">
          <p class="mb-4 text-lg text-gray-900">
            {{ $t('cart.your_cart_is_currently_empty') }}
          </p>
          <router-link to="/products" class="text-blue-600 hover:underline">
            {{ $t('cart.continue_shopping') }}
          </router-link>
        </div>

        <div class="flex flex-col mb-5 sm:mb-8 sm:divide-y sm:border-t sm:border-b" v-else
          v-for="item in cartStore.cart" :key="item.id">
          <div class="py-5 sm:py-8">
            <div class="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div class="sm:-my-2.5">
                <router-link to=""
                  class="relative block w-24 h-40 overflow-hidden bg-gray-100 rounded-lg group sm:h-56 sm:w-40">
                  <img :src="item.imageUrl1" loading="lazy" alt="product-cart-img"
                    class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
                </router-link>
              </div>

              <div class="flex flex-col justify-between flex-1">
                <div>
                  <router-link to=""
                    class="inline-block mb-1 text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">{{
                      $i18n.locale ===
                        'ar' ? item.titleAr :
                        item.title }}</router-link>
                  <!-- don't delete it 😁😂 -->
                  <!-- <span class="block text-gray-500">{{ $t('cart.category') }} S</span> -->
                  <span class="block text-gray-500" v-if="item.discount">{{ $t('cart.discount') }} %{{ item.discount
                  }}</span>
                </div>

                <div>
                  <span class="flex items-center gap-1 text-sm text-gray-500">
                    <iconify-icon icon="material-symbols:check-circle-outline" width="20" height="20"
                      class="text-green-500"></iconify-icon>
                    {{ $t('cart.available') }}
                  </span>
                </div>
              </div>

              <div class="flex justify-between w-full pt-4 border-t sm:w-auto sm:border-none sm:pt-0">
                <div class="flex flex-col items-start gap-2">
                  <div class="flex w-20 h-12 overflow-hidden border rounded">
                    <input type="number" v-model="quantity"
                      class="w-full px-4 py-2 transition duration-100 outline-none ring-inset ring-indigo-300 focus:ring" />
                    <div class="flex flex-col border-l divide-y">
                      <button @click="incrementQuantity(item)" @change="updateQuantityInStore(item.id, item.quantity)"
                        class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none hover:bg-gray-100 active:bg-gray-200">
                        <iconify-icon icon="ic:baseline-plus" width="15" height="15"></iconify-icon>
                      </button>
                      <button @click="decrementQuantity(item)"
                        class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none hover:bg-gray-100 active:bg-gray-200">
                        <iconify-icon icon="ic:baseline-minus" width="15" height="15"></iconify-icon>
                      </button>
                    </div>
                  </div>

                  <button @click.stop="removeItem(item.docId)"
                    class="text-sm font-semibold text-indigo-500 transition duration-100 select-none hover:text-indigo-600 active:text-indigo-700">
                    <iconify-icon icon="svg-spinners:90-ring" width="24" height="24"
                      v-if="removingItem === item.docId"></iconify-icon>
                    <span v-else>{{ $t('btn.delete') }}</span>
                  </button>
                </div>

                <div class="pt-3 ms-4 sm:pt-2 md:ms-8 lg:ms-16">
                  <span class="block font-bold text-gray-800 md:text-lg">{{
                    $n(parseFloat(item.discountedPrice),
                      'currency', currencyLocale) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-end gap-4" v-if="cartStore.cart.length > 0">
          <div class="w-full p-4 bg-gray-100 rounded-lg sm:max-w-xs">
            <div class="space-y-1">
              <div class="flex justify-between gap-4 text-gray-500">
                <span>{{ $t('cart.subtotal') }}</span>
                <span>{{ $n(parseFloat(totalDsicoutedPrice),
                  'currency', currencyLocale) }}</span>
              </div>

              <!-- don't delete it 😁😂 -->
              <!-- <div class="flex justify-between gap-4 text-gray-500">
                <span>{{ $t('cart.shipping') }}</span>
                <span>$4.99</span>
              </div> -->
            </div>
            <div class="pt-4 mt-4 border-t">
              <div class="flex items-start justify-between gap-4 text-gray-800">
                <span class="text-lg font-bold">{{ $t('cart.total') }}</span>
                <span class="flex flex-col items-end">
                  <span class="text-lg font-bold">{{ $n(parseFloat(totalAmount),
                    'currency', currencyLocale) }}</span>
                  <span class="text-sm text-gray-500">{{ $t('cart.including_vat') }}</span>
                </span>
              </div>
            </div>
          </div>
          <router-link to="/checkout" role="button"
            class="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">{{
              $t('btn.checkout') }}</router-link>
        </div>
      </div>
    </div>

    <!-- dynamic-toast component  -->
    <div class="fixed z-50 pointer-events-none bottom-5 start-5 sm:w-96 w-full max-w-[calc(100%-2rem)] mx-2 sm:mx-0">
      <div class="pointer-events-auto">
        <dynamic-toast v-if="showToast" :message="toastMessage" :toastType="toastType" :duration="5000"
          :toastIcon="toastIcon" @toastClosed="showToast = false" />
      </div>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
const removingItem = ref(null);
const { t } = useI18n()
const loading = ref(false)
const { showToast, toastMessage, toastType, toastIcon, triggerToast } = useToast();

const removeItem = async (docId) => {
  if (!docId) {
    return;
  }
  try {
    removingItem.value = docId;
    await cartStore.removeFromCart(docId);
    setTimeout(() => {
      removingItem.value = null;
    }, 3000);
    triggerToast({
      message: t('toast.product_deleted_successfully'),
      type: 'success',
      icon: 'clarity:shopping-cart-line'
    });
  } catch (error) {
    console.error("Error removing item:", error);
    triggerToast({
      message: t('toast.failed_to_delete_product'),
      type: 'error',
      icon: 'material-symbols:error-outline-rounded'
    });
  }
};

const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cartStore.cart));
};

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    cartStore.fetchCart();
    saveCartToLocalStorage();
    loading.value = false;
  }, 3000);
});

const totalAmount = computed(() => {
  const itemsTotal = cartStore.cart.reduce((total, item) => {
    const discountedPrice = parseFloat(item.discountedPrice) || 0;
    const quantity = item.quantity || 1;
    return total + (discountedPrice * quantity);
  }, 0);
  const storePickup = 15;
  const tax = 12;
  return (itemsTotal + storePickup + tax).toFixed(2);
});

const quantity = ref(1);

const incrementQuantity = (item) => {
  item.quantity++;
  updateQuantityInStore(item.productId, item.quantity);
  saveCartToLocalStorage();
};

const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
    updateQuantityInStore(item.productId, item.quantity);
    saveCartToLocalStorage();
  }
};

const updateQuantityInStore = (productId, newQuantity) => {
  if (productId) {
    cartStore.updateQuantityInCart(productId, newQuantity);
  }
};

const totalDsicoutedPrice = computed(() => {
  return cartStore.cart.reduce((total, item) => {
    return total + (parseFloat(item.discountedPrice) || 0) * item.quantity;
  }, 0).toFixed(2);
});

//currency composable
const { currencyLocale } = useCurrencyLocale();
</script>