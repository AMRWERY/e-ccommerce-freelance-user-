<template>
    <div>
        <!-- hot-deals-home-skeleton component -->
        <hot-deals-home-skeleton v-if="isLoading" />

        <div v-else>
            <div class="flex items-center justify-center mt-2 mb-3">
                <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
                <span class="mx-4 mb-2 text-xl font-semibold text-center capitalize sm:text-2xl md:text-4xl">{{
                    $t('home.best_offers') }}</span>
                <div class="w-1/12 h-1 border-t-2 border-gray-700"></div>
            </div>

            <div v-if="hotDeals.length === 0" class="flex items-center justify-center py-24 text-center">
                <p class="text-3xl font-semibold text-gray-700">{{ $t('product.no_hot_deals') }}</p>
            </div>

            <div class="mt-6 mb-12 space-y-5" v-else>
                <swiper v-if="hotDeals.length > 0" :slidesPerView="Math.min(4, hotDeals.length)" :spaceBetween="30"
                    :grabCursor="true" :breakpoints="{
                        '640': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }"
                    :modules="modules" class="mySwiper">
                    <swiper-slide v-for="product in hotDeals" :key="product.id">
                        <router-link :to="{
                            name: 'product-details',
                            params: {
                                market: currentMarket,
                                id: product.id
                            }
                        }"
                            class="relative z-50 overflow-hidden bg-gray-100 rounded-lg cursor-pointer group hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                            <div class="flex items-center w-full h-[200px] sm:h-[300px] mx-auto overflow-hidden">
                                <img :src="product.imageUrl1" :alt="product.title"
                                    class="object-cover w-full h-full mx-auto" />
                            </div>
                            <div
                                class="absolute left-0 right-0 w-11/12 p-2 mx-auto transition-all duration-300 rounded-lg bottom-2 lg:-bottom-80 lg:group-hover:bottom-2 bg-black/60 lg:bg-white lg:p-3">
                                <div class="text-center">
                                    <h3 class="text-sm font-bold text-white lg:text-base lg:text-gray-800">{{
                                        $i18n.locale
                                            === 'ar' ? product.titleAr : product.title }}
                                    </h3>
                                    <h4 class="mt-2 text-sm font-bold text-blue-600 lg:text-base">{{
                                        formatCurrency(parseFloat(product.discountedPrice)) }}</h4>
                                </div>
                            </div>
                        </router-link>
                    </swiper-slide>
                </swiper>

                <div class="flex justify-center mt-8">
                    <router-link :to="{ name: 'hot-deals' }"
                        class="px-6 py-3 text-sm font-medium text-indigo-600 transition-all duration-200 bg-transparent border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white">
                        {{ $t('btn.see_more_offers') }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const modules = [Autoplay];

const route = useRoute()
const productsStore = useProductsStore();
const swiperKey = ref(0);
const isLoading = ref(true);

const currentMarket = computed(() => Number(route.params.market) || 1);

const hotDeals = computed(() => {
    const filtered = productsStore.products.filter(product => {
        if (!product.isHotDeal || product.availability === "out_of_stock") return false;
        if (product.endDate) {
            const endDate = product.endDate.toDate();
            if (endDate < new Date()) return false;
        }
        const market = currentMarket.value;
        if (product.targetMarket === "All" || product.targetMarketAr === "الكل") return true;
        if (market === 1) {
            return product.targetMarket === "Egypt" || product.targetMarketAr === "مصر";
        }
        if (market === 2) {
            return product.targetMarket === "Saudi Arabia" || product.targetMarketAr === "المملكة العربية السعودية";
        }
        return false;
    });

    return shuffleArray(filtered).slice(0, 5);
});

// const hotDeals = computed(() => {
//     const hotProducts = productsStore.products.filter(product => product.isHotDeal === true &&
//         product.targetMarket === currentMarket.value);
//     return shuffleArray(hotProducts).slice(0, 5);
// });

// Force Swiper re-render when hotDeals change
watch(hotDeals, () => {
    swiperKey.value++;
});

function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

onMounted(async () => {
    isLoading.value = true;
    try {
        await productsStore.fetchAllProducts();
        await new Promise(resolve => setTimeout(resolve, 3000));
    } finally {
        isLoading.value = false;
    }
});

//currency composable
const { formatCurrency } = useFormatCurrency();
</script>