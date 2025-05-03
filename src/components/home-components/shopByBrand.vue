<template>
    <div>
        <!-- ShopByBrandSkeleton component -->
        <ShopByBrandSkeleton v-if="isLoading" />

        <section v-else class="max-w-full mx-auto mb-10">
            <div class="flex items-center justify-center mt-2 mb-3">
                <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
                <span class="mx-4 mb-2 text-xl font-semibold text-center capitalize sm:text-2xl md:text-4xl">{{
                    $t('home.shop_by_brand') }}</span>
                <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
            </div>

            <div class="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                <router-link :to="{
                    name: 'product-details',
                    params: {
                        market: currentMarket,
                        id: product.id
                    }
                }" v-for="product in limitedProducts" :key="product.id"
                    class="relative p-4 transition-all bg-white rounded cursor-pointer hover:-translate-y-1">
                    <div class="h-[265px] mb-4 bg-gray-100 rounded">
                        <img :src="product.imageUrl1" :alt="product.title"
                            class="object-cover object-center w-full h-full" />
                    </div>
                    <div>
                        <div class="flex gap-2">
                            <h5 class="text-base font-bold text-gray-800 truncate">{{ $i18n.locale ===
                                'ar' ? product.titleAr :
                                product.title }}</h5>
                        </div>
                        <h6 class="text-base font-bold text-gray-800 ms-auto">{{
                            formatCurrency(product.discountedPrice) }}</h6>
                        <div class="mt-4">
                            <button type="button"
                                class="flex items-center justify-center w-full px-2 mt-4 font-semibold tracking-wide text-white bg-yellow-500 border-none outline-none rounded-3xl ms-auto h-9 hover:bg-yellow-600"
                                @click.prevent="handleAddToCart(product)">
                                <div class="flex items-center justify-center" v-if="!loading[product.id]">
                                    <iconify-icon icon="material-symbols:add-shopping-cart" width="24" height="24"
                                        class="-ms-2 me-2"></iconify-icon>
                                    <span>{{ $t('btn.add_to_cart') }}</span>
                                </div>
                                <iconify-icon icon="svg-spinners:90-ring" width="24" height="24" v-else></iconify-icon>
                            </button>
                            <button type="button" @click.prevent="handleCheckout(product)"
                                class="flex items-center justify-center w-full px-2 mt-2 font-semibold tracking-wide text-white bg-orange-600 border-none outline-none rounded-3xl ms-auto h-9 hover:bg-orange-700">
                                <div class="flex items-center justify-center" v-if="!loadingTwo[product.id]">
                                    <iconify-icon icon="material-symbols-light:shopping-basket-sharp" width="24"
                                        height="24" class="-ms-2 me-2"></iconify-icon>
                                    <span>{{ $t('btn.checkout') }}</span>
                                </div>
                                <iconify-icon icon="svg-spinners:90-ring" width="24" height="24" v-else></iconify-icon>
                            </button>
                        </div>
                    </div>
                </router-link>
            </div>

            <!-- See More Button -->
            <div class="flex justify-center mt-8">
                <router-link :to="{ name: 'products' }"
                    class="px-6 py-3 text-sm font-medium text-indigo-600 transition-all duration-200 bg-transparent border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white">
                    {{ $t('btn.see_more_products') }}
                </router-link>
            </div>
        </section>

        <!-- dynamic-toast component  -->
        <div
            class="fixed z-50 pointer-events-none bottom-5 start-5 sm:w-96 w-full max-w-[calc(100%-2rem)] mx-2 sm:mx-0">
            <div class="pointer-events-auto">
                <dynamic-toast v-if="showToast" :message="toastMessage" :toastType="toastType" :duration="5000"
                    :toastIcon="toastIcon" @toastClosed="showToast = false" />
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const { t } = useI18n()
const productsStore = useProductsStore()
const cartStore = useCartStore();
const { formatCurrency } = useFormatCurrency();
const loading = ref({});
const loadingTwo = ref({});
const isLoading = ref(true);
const { showToast, toastMessage, toastType, toastIcon, triggerToast } = useToast();

const currentMarket = computed(() => Number(route.params.market) || 1);

const filteredProducts = computed(() => {
    return productsStore.products.filter(product => {
        // Check availability first
        if (product.availability === "out_of_stock") return false;

        const market = currentMarket.value;
        // Include products marked as "All" or matching the current market
        if (product.targetMarket === "All" || product.targetMarketAr === "الكل") {
            return true;
        }
        if (market === 1) {
            return product.targetMarket === "Egypt" || product.targetMarketAr === "مصر";
        }
        if (market === 2) {
            return product.targetMarket === "Saudi Arabia" || product.targetMarketAr === "المملكة العربية السعودية";
        }
        return false;
    });
});

const limitedProducts = computed(() => {
    return filteredProducts.value.slice(0, 8);
});

onMounted(async () => {
    isLoading.value = true;
    try {
        await productsStore.fetchAllProducts();
        // Add a minimum loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 3000));
    } finally {
        isLoading.value = false;
    }
})

const handleAddToCart = async (product) => {
    if (!product) return;
    const authStore = useAuthStore();
    if (currentMarket.value === 2 && !authStore.isAuthenticated) {
        triggerToast({
            message: t('toast.please_log_in_first_to_add_to_cart'),
            type: 'warning',
            icon: 'material-symbols:warning-outline-rounded'
        });
        return;
    }
    try {
        loading.value[product.id] = true;
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await cartStore.addToCart({
            ...product,
            quantity: 1
        });
        triggerToast({
            message: t('toast.product_added_to_cart'),
            type: 'success',
            icon: 'clarity:shopping-cart-line'
        });
    } catch (error) {
        triggerToast({
            message: t('toast.failed_to_add_to_cart'),
            type: 'error',
            icon: 'material-symbols:error-outline-rounded'
        });
    } finally {
        loading.value[product.id] = false;
    }
};

const handleCheckout = async (product) => {
    if (!product) return;
    const authStore = useAuthStore();
    if (currentMarket.value === 2 && !authStore.isAuthenticated) {
        triggerToast({
            message: t('toast.please_log_in_first_to_add_to_cart'),
            type: 'warning',
            icon: 'material-symbols:warning-outline-rounded'
        });
        return;
    }
    try {
        loadingTwo.value[product.id] = true;
        const startTime = Date.now();
        cartStore.clearCart();
        await cartStore.addToCart({
            ...product,
            quantity: 1
        });
        const minDelay = 3000;
        const elapsed = Date.now() - startTime;
        const remainingDelay = Math.max(minDelay - elapsed, 0);
        await new Promise(resolve => setTimeout(resolve, remainingDelay));
        await router.push({
            name: 'checkout',
            params: { market: currentMarket.value }
        });
    } catch (error) {
        triggerToast({
            message: t('toast.failed_to_process_checkout'),
            type: 'error',
            icon: 'material-symbols:error-outline-rounded'
        });
    } finally {
        loadingTwo.value[product.id] = false;
    }
};
</script>