<template>
    <div>
        <section class="max-w-full mx-auto mb-10">
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
                    class="relative overflow-hidden bg-gray-100 rounded-lg cursor-pointer group hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                    <div class="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto">
                        <img :src="product.imageUrl1" :alt="product.title"
                            class="object-cover object-center w-full h-full" />
                    </div>
                    <div
                        class="absolute w-11/12 p-2 mx-auto transition-all duration-300 rounded-lg end-0 start-0 bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white lg:p-3">
                        <div class="text-center">
                            <h3 class="text-sm font-bold text-white lg:text-base lg:text-gray-800">{{ $i18n.locale ===
                                'ar' ? product.titleAr :
                                product.title }}</h3>
                            <div class="flex items-center justify-center gap-3">
                                <p class="text-lg font-semibold text-gray-900">
                                    {{ formatCurrency(product.discountedPrice) }}
                                </p>
                                <p class="text-xs text-gray-500 line-through">
                                    {{ formatCurrency(product.originalPrice) }}
                                </p>
                            </div>
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
    </div>
</template>

<script setup>
const route = useRoute();
const productsStore = useProductsStore()
const { formatCurrency } = useFormatCurrency();

const currentMarket = computed(() => Number(route.params.market) || 1);

const filteredProducts = computed(() => {
    return productsStore.products.filter(product => {
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

onMounted(() => {
    productsStore.fetchAllProducts()
})
</script>