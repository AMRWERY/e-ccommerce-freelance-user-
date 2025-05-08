<template>
    <div>
        <!-- HotDealsSkeleton component -->
        <HotDealsSkeleton v-if="isLoading" />

        <div v-else-if="hotDeals.length === 0" class="flex items-center justify-center min-h-screen text-center">
            <p class="text-3xl font-semibold text-gray-700">{{ $t('product.no_hot_deals') }}</p>
        </div>

        <div v-else class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div class="flex justify-center mb-10 md:mb-16">
                    <iconify-icon icon="material-symbols:local-fire-department" width="35" height="35"
                        class="text-red-500 ms-1">
                    </iconify-icon>
                    <p class="mb-3 text-2xl font-bold text-center text-gray-800 lg:text-4xl">{{ $t('home.hot_deals') }}
                    </p>
                    <iconify-icon icon="material-symbols:local-fire-department" width="35" height="35"
                        class="text-red-500 ms-1">
                    </iconify-icon>
                </div>

                <div class="grid gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
                    <!-- product - start -->
                    <router-link v-for="product in paginatedHotDeals" :key="product.id" :to="{
                        name: 'product-details',
                        params: {
                            market: currentMarket,
                            id: product.id
                        }
                    }" class="flex flex-col overflow-hidden bg-white rounded shadow-md cursor-pointer">
                        <div class="relative block overflow-hidden bg-gray-100 rounded-t-lg group h-96">
                            <img :src="product.imageUrl1" loading="lazy" :alt="product.title"
                                class="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105" />
                            <div class="space-y-9">
                                <span v-if="product.discount"
                                    class="absolute start-0 top-3 rounded-e-lg bg-red-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">{{
                                        product.discount }}%</span>
                                <span v-if="product.endDate"
                                    class="absolute start-0 top-3 rounded-e-lg bg-green-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">{{
                                        $t('product.ends_in') }} {{
                                        formatEndDate(product.endDate) }}</span>
                            </div>
                        </div>

                        <div class="flex items-start justify-between gap-2 p-4 bg-gray-100 rounded-b-lg">
                            <div class="flex flex-col">
                                <h3
                                    class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">
                                    {{
                                        $i18n.locale === 'ar' ? product.titleAr : product.title }}</h3>
                                <span class="text-sm text-gray-500 lg:text-base">{{
                                    $i18n.locale === 'ar' ?
                                        getCategoryTitle(product.categoryId).titleAr :
                                        getCategoryTitle(product.categoryId).title
                                }}</span>
                            </div>

                            <div class="flex flex-col items-end">
                                <span class="font-bold text-gray-600 lg:text-lg">{{
                                    formatCurrency(parseFloat(product.discountedPrice)) }}</span>
                                <span class="text-sm text-red-500 line-through" v-if="product.originalPrice">{{
                                    formatCurrency(parseFloat(product.originalPrice)) }}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="flex justify-center mt-10 sm:mt-10 md:mt-20">
                <!-- pagination-controls component -->
                <pagination-controls v-show="totalPages > 0" :current-page="currentPage" :total-pages="totalPages"
                    @page-change="handlePageChange" />
            </div>
        </div>
    </div>
</template>

<script setup>
const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()
const route = useRoute()
const isLoading = ref(true);

//currency composable
const { formatCurrency } = useFormatCurrency();

const currentPage = ref(1)
const itemsPerPage = 10

const currentMarket = computed(() => Number(route.params.market) || 1)

const formatEndDate = (firestoreTimestamp) => {
    if (!firestoreTimestamp) return '';
    const date = firestoreTimestamp.toDate();
    return date.toLocaleDateString('en-GB'); // Formats as DD/MM/YYYY
};

const hotDeals = computed(() => {
    return productsStore.products.filter(product => {
        if (product.availability === "out_of_stock") return false;
        if (!product.isHotDeal) return false;
        if (product.endDate) {
            const endDate = product.endDate.toDate();
            if (endDate < new Date()) return false;
        }
        // Then check market compatibility
        if (product.targetMarket === "All" || product.targetMarketAr === "الكل") {
            return true;
        }
        if (currentMarket.value === 1) {
            return product.targetMarket === "Egypt" || product.targetMarketAr === "مصر";
        }
        if (currentMarket.value === 2) {
            return product.targetMarket === "Saudi Arabia" || product.targetMarketAr === "المملكة العربية السعودية";
        }
        return false;
    })
})

const totalPages = computed(() => {
    return Math.max(1, Math.ceil(hotDeals.value.length / itemsPerPage))
})

const paginatedHotDeals = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return hotDeals.value.slice(startIndex, endIndex)
})

const handlePageChange = (page) => {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

const getCategoryTitle = (categoryId) => {
    const category = categoriesStore.getCategoryById(categoryId)
    return category || { title: '', titleAr: '' }
}

onMounted(async () => {
    isLoading.value = true;
    try {
        await Promise.all([
            productsStore.fetchAllProducts(),
            categoriesStore.fetchCategories()
        ]);
        await new Promise(resolve => setTimeout(resolve, 3000));
    } finally {
        isLoading.value = false;
    }
});
</script>