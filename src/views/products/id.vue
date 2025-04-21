<template>
    <div>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div v-if="loading" class="flex items-center justify-center min-h-[60vh]">
                <iconify-icon icon="svg-spinners:90-ring" width="40" height="40"></iconify-icon>
            </div>

            <div v-else-if="product" class="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
                    </div>
                </div>

                <!-- Product Details Section -->
                <div class="space-y-8">
                    <!-- Product Title -->
                    <div>
                        <h1 class="text-4xl font-bold text-gray-800">
                            {{ $i18n.locale === 'ar' ? product.titleAr : product.title }}
                        </h1>
                        <div class="flex items-center justify-between gap-5 mt-2">
                            <p class="text-sm text-gray-600">{{ $t('cart.category') }} {{ $i18n.locale === 'ar' ?
                                product.categoryAr : product.category }}</p>

                            <p class="text-sm text-gray-600">{{ $t('product.availability') }}: {{ $t('cart.available')
                                }}</p>
                        </div>
                    </div>

                    <!-- Pricing -->
                    <div class="flex items-center space-s-4">
                        <span class="text-3xl font-bold text-gray-800">{{ formatPrice(product.discountedPrice) }}</span>
                        <span class="text-lg text-gray-400 line-through">{{ formatPrice(product.originalPrice) }}</span>
                        <span v-if="product.discount" class="font-medium text-green-600">{{ $t('product.save') }} {{
                            product.discount }}%</span>
                    </div>

                    <!-- Description -->
                    <div>
                        <h2 class="text-lg font-semibold text-gray-800">{{ $t('product.description') }}</h2>
                        <div class="p-3 bg-gray-50 hover:bg-gray-100">
                            <p class="mt-2 text-gray-600">
                                {{ $i18n.locale === 'ar' ? product.descriptionAr : product.description }}
                            </p>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="space-y-4">
                        <div class="flex items-center space-s-4">
                            <label for="quantity" class="text-gray-600">{{ $t('product.quantity') }}:</label>
                            <div class="flex items-center border rounded-lg">
                                <button @click="decrementQuantity"
                                    class="px-4 py-2 text-gray-600 hover:bg-gray-100">-</button>
                                <input id="quantity" type="number" v-model="quantity" min="1"
                                    class="w-12 text-center border-none focus:ring-0">
                                <button @click="incrementQuantity"
                                    class="px-4 py-2 text-gray-600 hover:bg-gray-100">+</button>
                            </div>
                        </div>

                        <!-- Add to Cart Button -->
                        <button @click="handleAddToCart"
                            class="w-full py-3 text-lg font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                            :disabled="loading">
                            <div class="flex items-center justify-center">
                                <iconify-icon v-if="loading" icon="svg-spinners:90-ring" width="24" height="24"
                                    class="me-2"></iconify-icon>
                                <span>{{ $t('btn.add_to_cart') }}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Toast -->
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
const { showToast, toastMessage, toastType, toastIcon, triggerToast } = useToast();
const { currencyLocale } = useCurrencyLocale();

const loading = ref(false);
const quantity = ref(1);
const product = ref(null);
const selectedImage = ref(null);

const currentMarket = computed(() => Number(route.params.market));

const formatPrice = (value) => {
    if (!value) return new Intl.NumberFormat(currencyLocale.value.locale, {
        ...currencyLocale.value.currencyConfig
    }).format(0);

    return new Intl.NumberFormat(currencyLocale.value.locale, {
        ...currencyLocale.value.currencyConfig
    }).format(parseFloat(value));
};

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
        await cartStore.addToCart({
            ...product.value,
            quantity: quantity.value
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
    loading.value = true;
    try {
        const productData = await productStore.fetchProductDetail(route.params.id);
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
        loading.value = false;
    }
});
</script>