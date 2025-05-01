<template>
    <div>
        <!-- ProductSkeleton component -->
        <ProductSkeleton v-if="isLoading" />

        <div v-else class="p-4 mx-auto font-sans lg:max-w-7xl md:max-w-5xl">
            <!-- Search bar for mobile -->
            <div class="mb-6 lg:hidden">
                <div class="relative">
                    <input type="text" :placeholder="$t('form.search_for_product')" v-model="filters.search"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <iconify-icon icon="heroicons:magnifying-glass-20-solid"
                        class="absolute text-gray-400 transform -translate-y-1/2 end-3 top-1/2" width="20"
                        height="20" />
                </div>
            </div>

            <div class="lg:grid lg:grid-cols-4 lg:gap-x-8">
                <!-- ProductFilters component -->
                <ProductFilters v-model:filters="filters" class="col-span-1" />

                <!-- Product grid -->
                <div class="mt-6 lg:col-span-3 lg:mt-0">
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
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
                                    <h5 class="text-sm font-bold text-gray-800 truncate sm:text-base">{{ $i18n.locale
                                        ===
                                        'ar' ? product.titleAr : product.title }}</h5>
                                    <div class="flex items-center justify-between mt-2">
                                        <p class="text-sm font-bold text-gray-800 sm:text-base">
                                            {{ formatCurrency(parseFloat(product.discountedPrice)) }}
                                        </p>
                                        <p class="text-sm text-gray-500 line-through sm:text-base"
                                            v-if="product.originalPrice">
                                            {{ formatCurrency(parseFloat(product.originalPrice)) }}
                                        </p>
                                        <div v-if="product.discount"
                                            class="flex items-center justify-center w-10 h-8 p-1 bg-green-200 rounded-full cursor-pointer ms-auto">
                                            <p class="font-medium">%{{ product.discount }}</p>
                                        </div>
                                    </div>
                                </div>
                                <button type="button"
                                    class="flex items-center justify-center w-full px-2 mt-4 font-semibold tracking-wide text-white bg-yellow-500 border-none outline-none rounded-3xl ms-auto h-9 hover:bg-yellow-600"
                                    @click.prevent="handleAddToCart(product)">
                                    <div class="flex items-center justify-center" v-if="!loading[product.id]">
                                        <iconify-icon icon="material-symbols:add-shopping-cart" width="24" height="24"
                                            class="-ms-2 me-2"></iconify-icon>
                                        <span>{{ $t('btn.add_to_cart') }}</span>
                                    </div>
                                    <iconify-icon icon="svg-spinners:90-ring" width="24" height="24"
                                        v-else></iconify-icon>
                                </button>
                                <button type="button" @click.prevent="handleCheckout(product)"
                                    class="flex items-center justify-center w-full px-2 mt-2 font-semibold tracking-wide text-white bg-orange-600 border-none outline-none rounded-3xl ms-auto h-9 hover:bg-orange-700">
                                    <div class="flex items-center justify-center" v-if="!loadingTwo[product.id]">
                                        <iconify-icon icon="material-symbols-light:shopping-basket-sharp" width="24"
                                            height="24" class="-ms-2 me-2"></iconify-icon>
                                        <span>{{ $t('btn.checkout') }}</span>
                                    </div>
                                    <iconify-icon icon="svg-spinners:90-ring" width="24" height="24"
                                        v-else></iconify-icon>
                                </button>
                            </div>
                        </router-link>
                    </div>

                    <!-- Show message when no products found -->
                    <div v-if="filteredProducts.length === 0" class="flex flex-col items-center justify-center py-12">
                        <iconify-icon icon="heroicons:magnifying-glass-20-solid" width="48" height="48"
                            class="text-gray-400" />
                        <h3 class="mt-4 text-lg font-medium text-gray-900">{{ $t('product.no_products_found') }}</h3>
                    </div>

                    <div class="flex flex-col items-center justify-center mt-10">
                        <!-- pagination-controls component -->
                        <pagination-controls v-show="totalPages > 0" :current-page="currentPage"
                            :total-pages="totalPages" @page-change="handlePageChange" />
                    </div>
                </div>
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
const router = useRouter();
const productStore = useProductsStore()
const cartStore = useCartStore();
const { showToast, toastMessage, toastType, toastIcon, triggerToast } = useToast();
const { formatCurrency } = useFormatCurrency();
const loading = ref({});
const loadingTwo = ref({});
const isLoading = ref(true);

// Filters state
const filters = ref({
    search: '',
    categories: [],
    priceRange: {
        min: null,
        max: null
    }
})

// Pagination
const currentPage = ref(1)
const itemsPerPage = 10

const currentMarket = computed(() => Number(route.params.market));

// Watch filters to reset pagination
watch(filters, () => {
    currentPage.value = 1
}, { deep: true })

const filteredProducts = computed(() => {
    return productStore.products.filter(product => {
        // Availability filter
        if (product.availability === "out_of_stock") return false;

        // Market filter
        const market = currentMarket.value;
        const marketMatch = product.targetMarket === "All" || product.targetMarketAr === "الكل" ||
            (market === 1 && (product.targetMarket === "Egypt" || product.targetMarketAr === "مصر")) ||
            (market === 2 && (product.targetMarket === "Saudi Arabia" || product.targetMarketAr === "المملكة العربية السعودية"));
        if (!marketMatch) return false;
        // Search filter
        const searchMatch = !filters.value.search ||
            product.title.toLowerCase().includes(filters.value.search.toLowerCase()) ||
            product.titleAr.toLowerCase().includes(filters.value.search.toLowerCase());
        if (!searchMatch) return false;
        // Category filter
        const categoryMatch = filters.value.categories.length === 0 ||
            filters.value.categories.includes(product.categoryId);
        if (!categoryMatch) return false;
        // Price range filter
        const price = parseFloat(product.discountedPrice);
        const priceMatch = (!filters.value.priceRange.min || price >= filters.value.priceRange.min) &&
            (!filters.value.priceRange.max || price <= filters.value.priceRange.max);

        return priceMatch;
    });
});

const totalPages = computed(() => {
    return Math.max(1, Math.ceil(filteredProducts.value.length / itemsPerPage))
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

onMounted(async () => {
    isLoading.value = true;
    try {
        await productStore.fetchAllProducts();
        // Simulate loading time for better UX
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