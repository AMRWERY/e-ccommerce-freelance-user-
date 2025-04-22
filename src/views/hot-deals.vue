<template>
    <div>
        <div class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="max-w-6xl py-6 mx-auto sm:px-6 lg:px-8">
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

                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <!-- product - start -->
                    <div v-for="product in paginatedHotDeals" :key="product.id">
                        <router-link :to="'/product/' + product.id"
                            class="relative block overflow-hidden bg-gray-100 rounded-t-lg group h-96">
                            <img :src="product.imageUrl1" loading="lazy" :alt="product.title"
                                class="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105" />
                            <span v-if="product.discount"
                                class="absolute start-0 top-3 rounded-e-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-{{
                                    product.discount }}%</span>
                        </router-link>

                        <div class="flex items-start justify-between gap-2 p-4 bg-gray-100 rounded-b-lg">
                            <div class="flex flex-col">
                                <router-link :to="'/product/' + product.id"
                                    class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">{{
                                        $i18n.locale ===
                                            'ar' ? product.titleAr :
                                            product.title }}</router-link>
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
                    </div>
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

//currency composable
const { formatCurrency } = useFormatCurrency();

const currentPage = ref(1)
const itemsPerPage = 10

const hotDeals = computed(() => {
    const deals = productsStore.products.filter(product => product.isHotDeal === true)
    console.log('Hot Deals count:', deals.length)
    return deals
})

const totalPages = computed(() => {
    const total = Math.max(1, Math.ceil(hotDeals.value.length / itemsPerPage))
    console.log('Total pages:', total)
    return total
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

onMounted(() => {
    productsStore.fetchAllProducts()
    categoriesStore.fetchCategories()
})
</script>