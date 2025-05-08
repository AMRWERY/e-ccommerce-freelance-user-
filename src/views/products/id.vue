<template>
    <div>
        <!-- ProductDetailSkeleton component -->
        <ProductDetailSkeleton v-if="isLoading" />

        <div v-else-if="product" class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <!-- Product Image Section -->
                <div class="space-y-6">
                    <div class="relative w-full overflow-hidden bg-gray-100 rounded-lg h-96">
                        <img :src="selectedImage || product.imageUrl1" :alt="product.title"
                            class="object-cover object-center w-full h-full">
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                        <img v-if="product.imageUrl1" :src="product.imageUrl1" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl1 }"
                            @click="selectedImage = product.imageUrl1">
                        <img v-if="product.imageUrl2" :src="product.imageUrl2" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl2 }"
                            @click="selectedImage = product.imageUrl2">
                        <img v-if="product.imageUrl3" :src="product.imageUrl3" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl3 }"
                            @click="selectedImage = product.imageUrl3">
                        <img v-if="product.imageUrl4" :src="product.imageUrl4" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl4 }"
                            @click="selectedImage = product.imageUrl4">
                        <img v-if="product.imageUrl5" :src="product.imageUrl5" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl5 }"
                            @click="selectedImage = product.imageUrl5">
                        <img v-if="product.imageUrl6" :src="product.imageUrl6" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl6 }"
                            @click="selectedImage = product.imageUrl6">
                        <img v-if="product.imageUrl7" :src="product.imageUrl7" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl7 }"
                            @click="selectedImage = product.imageUrl7">
                        <img v-if="product.imageUrl8" :src="product.imageUrl8" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl8 }"
                            @click="selectedImage = product.imageUrl8">
                    </div>
                </div>

                <div class="space-y-8">
                    <div>
                        <h1
                            class="overflow-hidden text-4xl font-bold text-gray-800 break-words max-w-prose line-clamp-3">
                            {{ $i18n.locale === 'ar' ? product.titleAr : product.title }}
                        </h1>
                        <div class="flex items-center justify-between gap-5 mt-4">
                            <div class="flex items-center gap-2">
                                <p class="text-sm text-gray-600">
                                    {{ $t('cart.category') }}:
                                    <span class="font-medium text-gray-800">
                                        {{ $i18n.locale === 'ar' ? getCategoryTitle(product.categoryId).titleAr :
                                            getCategoryTitle(product.categoryId).title }}
                                    </span>
                                </p>
                            </div>

                            <p class="flex items-center gap-1 p-2 text-sm text-gray-500 bg-[#f0fdf4] rounded-lg">
                                <iconify-icon icon="material-symbols:check-circle-outline" width="20" height="20"
                                    class="text-green-500"></iconify-icon>
                                {{ $t('product.available') }}
                            </p>
                        </div>
                    </div>

                    <div>
                        <!-- product-rating component -->
                        <product-rating :product-id="product.id" :average-rating="product.averageRating || 0"
                            :total-ratings="product.totalRatings || 0" @rating-updated="handleRatingUpdate" />
                        <!-- <product-rating /> -->
                    </div>

                    <div class="flex items-center space-s-4">
                        <span class="text-3xl font-bold text-gray-800">{{ formatCurrency(product.discountedPrice)
                        }}</span>
                        <span class="text-lg text-gray-400 line-through">{{ formatCurrency(product.originalPrice)
                        }}</span>
                        <span v-if="product.discount"
                            class="px-2 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                            {{ $t('product.save') }} {{ product.discount }}%
                        </span>
                    </div>

                    <div class="p-4 rounded-lg animate-fancy-bg" v-if="product.moreDetailsOffer">
                        <p class="text-center text-gray-100">{{ product.moreDetailsOffer }}</p>
                    </div>

                    <div class="p-3 bg-gray-50 rounded-xl hover:bg-gray-100">
                        <h2 class="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                            {{ $t('product.description') }}
                        </h2>
                        <p class="overflow-hidden leading-relaxed text-gray-600 break-words whitespace-pre-wrap">
                            {{ $i18n.locale === 'ar' ? product.descriptionAr : product.description }}
                        </p>
                    </div>

                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <p class="text-gray-600">{{ $t('product.quantity') }}:</p>
                            <button type="button" @click="decrementQuantity"
                                class="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full outline-none">
                                <iconify-icon icon="material-symbols:remove" width="20" height="20"
                                    class="text-white"></iconify-icon>
                            </button>
                            <span class="font-bold text-sm leading-[16px]">{{ quantity }}</span>
                            <button type="button" @click="incrementQuantity"
                                class="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full outline-none">
                                <iconify-icon icon="material-symbols:add" width="20" height="20"
                                    class="text-white"></iconify-icon>
                            </button>
                        </div>

                        <!-- Add to Cart Button -->
                        <button @click="handleAddToCart"
                            class="w-full py-3 text-lg font-semibold text-white transition-colors bg-yellow-500 rounded-3xl hover:bg-yellow-600 disabled:bg-gray-400"
                            :disabled="loading">
                            <div class="flex items-center justify-center">
                                <iconify-icon v-if="loading" icon="svg-spinners:90-ring" width="24" height="24"
                                    class="me-2"></iconify-icon>
                                <span>{{ $t('btn.add_to_cart') }}</span>
                            </div>
                        </button>
                        <button type="button" @click="handleCheckout(product)"
                            class="w-full py-3 text-lg font-semibold text-white transition-colors bg-orange-600 rounded-3xl hover:bg-orange-700 disabled:bg-gray-400"
                            :disabled="loadingTwo[product.id]">
                            <div class="flex items-center justify-center">
                                <iconify-icon v-if="loadingTwo[product.id]" icon="svg-spinners:90-ring" width="24"
                                    height="24" class="me-2"></iconify-icon>
                                <span>{{ $t('btn.checkout') }}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <!-- users-ratings component -->
            <users-ratings v-if="product" :product="product" />
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
const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const productStore = useProductsStore();
const cartStore = useCartStore();
const categoriesStore = useCategoriesStore();
const { showToast, toastMessage, toastType, toastIcon, triggerToast } = useToast();
const { formatCurrency } = useFormatCurrency();

const loading = ref(false);
const loadingTwo = ref({});
const isLoading = ref(true);
const quantity = ref(1);
const product = ref(null);
const selectedImage = ref(null);

const currentMarket = computed(() => Number(route.params.market));

const getCategoryTitle = (categoryId) => {
    const category = categoriesStore.getCategoryById(categoryId)
    return category || { title: '', titleAr: '' }
}

const incrementQuantity = () => {
    quantity.value++;
};

const decrementQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};

const handleAddToCart = async () => {
    if (!product.value) return;
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
        loading.value = true;
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const category = getCategoryTitle(product.value.categoryId);
        await cartStore.addToCart({
            ...product.value,
            quantity: quantity.value,
            categoryTitle: category.title,
            categoryTitleAr: category.titleAr
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
        loading.value = false;
    }
};

// Update meta title when product changes
watch(() => product.value, (newProduct) => {
    if (newProduct) {
        const title = locale.value === 'ar' ? newProduct.titleAr : newProduct.title;
        router.currentRoute.value.meta.title = title;
        document.title = title;
    }
}, { immediate: true });

onMounted(async () => {
    isLoading.value = true;
    try {
        const [productData] = await Promise.all([
            productStore.fetchProductDetail(route.params.id),
            categoriesStore.fetchCategories()
        ]);
        // Add a minimum loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 3000));
        if (productData) {
            // Verify product belongs to current market
            const market = currentMarket.value;
            const isValidMarket =
                productData.targetMarket === "All" ||
                productData.targetMarketAr === "الكل" ||
                (market === 1 && (productData.targetMarket === "Egypt" || productData.targetMarketAr === "مصر")) ||
                (market === 2 && (productData.targetMarket === "Saudi Arabia" || productData.targetMarketAr === "المملكة العربية السعودية"));
            if (isValidMarket) {
                product.value = productData;
            } else {
                // Redirect to products page if product doesn't belong to current market
                router.push({ name: 'products' });
            }
        }
    } catch (error) {
        console.error('Error fetching product:', error);
    } finally {
        isLoading.value = false;
    }
});

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

const handleRatingUpdate = async ({ newRating, productId }) => {
    try {
        const authStore = useAuthStore();
        if (currentMarket.value === 2 && (!authStore.isAuthenticated || !authStore.user)) {
            triggerToast({
                message: t('toast.please_log_in_first_to_rate_product'),
                type: 'warning',
                icon: 'material-symbols:warning-outline-rounded'
            });
            return;
        }
        await productStore.submitProductRating(
            productId,
            authStore.user?.uid,
            newRating
        );
        product.value = await productStore.fetchProductDetail(productId);
        triggerToast({
            message: t('toast.rating_submitted'),
            type: 'success',
            icon: 'mdi:check-circle'
        });
    } catch (error) {
        triggerToast({
            message: t('toast.rating_failed'),
            type: 'error',
            icon: 'mdi:alert-circle'
        });
    }
};
</script>

<style scoped>
@keyframes fancyBg {
    0% {
        background-color: #8b5cf6;
    }

    /* violet‑500 */
    25% {
        background-color: #ec4899;
    }

    /* pink‑500 */
    50% {
        background-color: #f59e0b;
    }

    /* amber‑500 */
    75% {
        background-color: #10b981;
    }

    /* emerald‑500 */
    100% {
        background-color: #8b5cf6;
    }
}

.animate-fancy-bg {
    animation: fancyBg 6s ease-in-out infinite;
}
</style>