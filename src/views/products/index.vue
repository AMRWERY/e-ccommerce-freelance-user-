<template>
    <div>
        <div class="p-4 mx-auto font-sans lg:max-w-6xl md:max-w-4xl">
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                <router-link :to="{
                    name: 'product-details',
                    params: {
                        market: currentMarket,
                        id: product.id
                    }
                }" v-for="product in paginatedProducts" :key="product"
                    class="flex flex-col overflow-hidden bg-white rounded shadow-md cursor-pointer">
                    <div class="w-full h-64 overflow-hidden">
                        <img :src="product.imageUrl1" alt="product-img"
                            class="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105" />
                    </div>

                    <div class="flex flex-col flex-1 p-4">
                        <div class="flex-1">
                            <h5 class="text-sm font-bold text-gray-800 truncate sm:text-base">{{ $i18n.locale ===
                                'ar' ? product.titleAr :
                                product.title }}</h5>
                            <div class="flex items-center justify-between mt-2">
                                <p class="text-sm font-bold text-gray-800 sm:text-base">
                                    {{ formatCurrency(parseFloat(product.discountedPrice)) }}
                                </p>
                                <p class="text-sm text-gray-500 line-through sm:text-base" v-if="product.originalPrice">
                                    {{ formatCurrency(parseFloat(product.originalPrice)) }}
                                </p>
                                <div v-if="product.discount"
                                    class="flex items-center justify-center w-10 h-8 p-1 bg-green-200 rounded-full cursor-pointer ms-auto">
                                    <p class="font-medium">%{{ product.discount }}</p>
                                </div>
                            </div>
                        </div>
                        <button type="button"
                            class="flex items-center justify-center w-full px-2 mt-4 font-semibold tracking-wide text-white bg-blue-600 border-none rounded outline-none ms-auto h-9 hover:bg-blue-700"
                            @click="handleAddToCart(product)">
                            <div class="flex items-center justify-center" v-if="!loading[product.id]">
                                <iconify-icon icon="material-symbols:add-shopping-cart" width="24" height="24"
                                    class="-ms-2 me-2"></iconify-icon>
                                <span>{{ $t('btn.add_to_cart') }}</span>
                            </div>
                            <iconify-icon icon="svg-spinners:90-ring" width="24" height="24" v-else></iconify-icon>
                        </button>
                    </div>
                </router-link>
            </div>

            <div class="flex flex-col items-center justify-center mt-10">
                <!-- pagination-controls component -->
                <pagination-controls v-show="totalPages > 0" :current-page="currentPage" :total-pages="totalPages"
                    @page-change="handlePageChange" />
            </div>
        </div>

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
const { t } = useI18n()
const route = useRoute();
const productStore = useProductsStore()
const cartStore = useCartStore();
const { showToast, toastMessage, toastType, toastIcon, triggerToast } = useToast();
const { formatCurrency } = useFormatCurrency();
const loading = ref({});

// Pagination
const currentPage = ref(1)
const itemsPerPage = 10

const currentMarket = computed(() => Number(route.params.market));

const filteredProducts = computed(() => {
    return productStore.products.filter(product => {
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

const totalPages = computed(() => {
    const total = Math.max(1, Math.ceil(filteredProducts.value.length / itemsPerPage))
    console.log('Total pages:', total)
    return total
})

const paginatedProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredProducts.value.slice(startIndex, endIndex)
})

const handlePageChange = (page) => {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    productStore.fetchAllProducts()
})

//currency composable
const { currencyLocale } = useCurrencyLocale();

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
</script>