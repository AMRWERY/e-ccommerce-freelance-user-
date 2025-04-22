<template>
  <div>
    <!-- CartSkeleton component -->
    <CartSkeleton v-if="loading" />

    <div v-else class="p-6 mx-auto max-w-7xl max-lg:max-w-4xl">
      <h2 class="text-2xl font-bold text-gray-800">{{ $t('cart.your_cart') }}</h2>

      <div v-if="cartStore.cart.length === 0" class="p-6 text-center bg-white border border-gray-200 rounded-lg">
        <p class="mb-4 text-lg text-gray-900">
          {{ $t('cart.your_cart_is_currently_empty') }}
        </p>
        <router-link to="products" class="text-blue-600 hover:underline">
          {{ $t('cart.continue_shopping') }}
        </router-link>
      </div>

      <div class="relative grid gap-4 mt-8 lg:grid-cols-3" v-else>
        <div class="space-y-4 lg:col-span-2">
          <div class="p-6 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative"
            v-for="item in cartStore.cart" :key="item.id">
            <div class="flex items-center gap-4 max-sm:flex-col max-sm:gap-6">
              <div class="w-52 h-52 shrink-0">
                <img :src="item.imageUrl1" alt="product-cart-img" class="object-cover w-full h-full" />
              </div>

              <div class="w-full sm:border-s sm:ps-4 sm:border-gray-300">
                <h3 class="text-lg font-bold text-gray-800">{{ $i18n.locale ===
                  'ar' ? item.titleAr :
                  item.title }}</h3>

                <ul class="mt-4 space-y-2 text-sm text-gray-500">
                  <li class="flex items-center gap-1">
                    <span>{{ $t('cart.category') }}:</span>
                    <span class="font-medium text-gray-700">
                      {{ $i18n.locale === 'ar' ? getCategoryTitle(item.categoryId).titleAr :
                        getCategoryTitle(item.categoryId).title }}
                    </span>
                  </li>
                  <li v-if="item.discount" class="flex items-center gap-1">
                    <span>{{ $t('cart.discount') }}:</span>
                    <span class="font-medium text-green-600">%{{ item.discount }}</span>
                  </li>
                  <li class="flex items-center gap-1">
                    <span>{{ $t('cart.shipping') }}:</span>
                    <span class="font-medium text-gray-700">
                      {{ formatCurrency(parseFloat(item.shippingCost), currencyLocale) }}
                    </span>
                  </li>
                  <div class="flex items-center justify-between">
                    <p>{{ $t('cart.qty') }} <span>{{ item.quantity }}</span></p>
                    <p class="flex items-center gap-1 text-sm text-gray-500">
                      <iconify-icon icon="material-symbols:check-circle-outline" width="20" height="20"
                        class="text-green-500"></iconify-icon>
                      {{ $t('cart.available') }}
                    </p>
                  </div>
                </ul>

                <hr class="my-6 border-gray-300" />

                <div class="flex flex-wrap items-center justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <button type="button" @click="decrementQuantity(item)"
                      class="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full outline-none">
                      <iconify-icon icon="material-symbols:remove" width="20" height="20"
                        class="text-white"></iconify-icon>
                    </button>
                    <span class="font-bold text-sm leading-[16px]">{{ quantity }}</span>
                    <button type="button" @click="incrementQuantity(item)"
                      @change="updateQuantityInStore(item.id, item.quantity)"
                      class="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full outline-none">
                      <iconify-icon icon="material-symbols:add" width="20" height="20"
                        class="text-white"></iconify-icon>
                    </button>
                  </div>

                  <div class="flex items-center">
                    <h4 class="text-lg font-bold text-gray-800">{{
                      formatCurrency(parseFloat(item.discountedPrice), currencyLocale) }}</h4>
                    <button @click.stop="removeItem(item.docId)"
                      class="text-gray-500 transition duration-100 select-none hover:text-gray-600 active:text-gray-700">
                      <iconify-icon icon="svg-spinners:90-ring" width="24" height="24"
                        class="cursor-pointer shrink-0 text-gray-400 hover:text-gray-500 absolute top-3.5 end-3.5"
                        v-if="removingItem === item.docId"></iconify-icon>
                      <span v-else>
                        <iconify-icon icon="material-symbols:close-small-rounded" width="24" height="24"
                          class="cursor-pointer shrink-0 text-gray-400 hover:text-red-500 absolute top-3.5 end-3.5"></iconify-icon>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
          <h3 class="text-lg font-bold text-gray-800">{{ $t('cart.order_summary') }}</h3>
          <ul class="mt-4 text-sm text-gray-800 divide-y">
            <li class="flex flex-wrap gap-4 py-3">{{ $t('cart.subtotal') }} <span class="font-bold ms-auto">{{
              formatCurrency(parseFloat(totalDsicoutedPrice), currencyLocale) }}</span></li>
            <li class="flex flex-wrap gap-4 py-3">{{ $t('cart.shipping') }} <span class="font-bold ms-auto">{{
              formatCurrency(cartStore.totalShippingCost, currencyLocale) }}</span>
            </li>
            <li class="flex flex-wrap gap-4 py-3 font-bold">{{ $t('cart.total') }} <span class="ms-auto">{{
              formatCurrency(parseFloat(totalAmount), currencyLocale) }}</span>
            </li>
          </ul>

          <router-link to="checkout" role="button"
            class="mt-4 text-sm px-4 py-2.5 tracking-wide w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md block text-center">{{
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
const { t } = useI18n()
const cartStore = useCartStore();
const categoriesStore = useCategoriesStore();
const removingItem = ref(null);
const loading = ref(false)
const { showToast, toastMessage, toastType, toastIcon, triggerToast } = useToast();
const { formatCurrency } = useFormatCurrency();

const removeItem = async (docId) => {
  if (!docId) return;
  try {
    removingItem.value = docId;
    setTimeout(async () => {
      await cartStore.removeFromCart(docId);
      removingItem.value = null;
      triggerToast({
        message: t('toast.product_deleted_successfully'),
        type: 'success',
        icon: 'clarity:shopping-cart-line'
      });
    }, 3000);
  } catch (error) {
    console.error("Error removing item:", error);
    removingItem.value = null;
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
  // Add total shipping cost
  return (itemsTotal + cartStore.totalShippingCost).toFixed(2);
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

const getCategoryTitle = (categoryId) => {
  const category = categoriesStore.getCategoryById(categoryId)
  return category || { title: '', titleAr: '' }
}
</script>