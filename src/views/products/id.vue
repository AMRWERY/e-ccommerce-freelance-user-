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
                        <img v-if="product.imageUrl9" :src="product.imageUrl9" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl9 }"
                            @click="selectedImage = product.imageUrl9">
                        <img v-if="product.imageUrl10" :src="product.imageUrl10" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl10 }"
                            @click="selectedImage = product.imageUrl10">
                        <img v-if="product.imageUrl11" :src="product.imageUrl11" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl11 }"
                            @click="selectedImage = product.imageUrl11">
                        <img v-if="product.imageUrl12" :src="product.imageUrl12" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl12 }"
                            @click="selectedImage = product.imageUrl12">
                        <img v-if="product.imageUrl13" :src="product.imageUrl13" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl13 }"
                            @click="selectedImage = product.imageUrl13">
                        <img v-if="product.imageUrl14" :src="product.imageUrl14" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl14 }"
                            @click="selectedImage = product.imageUrl14">
                        <img v-if="product.imageUrl15" :src="product.imageUrl15" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl15 }"
                            @click="selectedImage = product.imageUrl15">
                        <img v-if="product.imageUrl17" :src="product.imageUrl17" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl17 }"
                            @click="selectedImage = product.imageUrl17">
                        <img v-if="product.imageUrl18" :src="product.imageUrl18" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl18 }"
                            @click="selectedImage = product.imageUrl18">
                        <img v-if="product.imageUrl19" :src="product.imageUrl19" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl19 }"
                            @click="selectedImage = product.imageUrl19">
                        <img v-if="product.imageUrl20" :src="product.imageUrl20" :alt="product.title"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500"
                            :class="{ 'border-blue-500': selectedImage === product.imageUrl20 }"
                            @click="selectedImage = product.imageUrl20">
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
                                {{ $t('product.available') }} <span class="text-lg font-semibold text-blue-600">{{
                                    product.numberOfStock }}</span> {{ $t('product.pieces') }}
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

                    <div class="grid grid-cols-1 gap-4">
                        <!-- offerOne Card -->
                        <div class="relative" v-if="product.offerOne">
                            <input class="hidden peer" id="radio_1" type="radio" name="radio" checked
                                v-model="selectedOffer" />
                            <span
                                class="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 end-4 top-1/2"></span>
                            <span
                                class="absolute top-0 z-10 hidden px-2 py-1 text-xs font-bold text-white transform translate-x-3 -translate-y-2 bg-red-600 rounded-md start-0 peer-checked:block">
                                {{ $t('product.save') }} {{ formatCurrency(calculateSavings(product.offerOne) || 0) }}
                            </span>
                            <label
                                class="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                                for="radio_1">
                                <div>
                                    <span class="mt-2 font-semibold">{{ product.offerOne }}</span>
                                </div>
                            </label>
                        </div>

                        <!-- offerTwo Card -->
                        <div class="relative" v-if="product.offerTwo">
                            <input class="hidden peer" id="radio_2" type="radio" name="radio" checked
                                v-model="selectedOffer" />
                            <span
                                class="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 end-4 top-1/2"></span>
                            <span
                                class="absolute top-0 z-10 hidden px-2 py-1 text-xs font-bold text-white transform translate-x-3 -translate-y-2 bg-red-600 rounded-md start-0 peer-checked:block">
                                {{ $t('product.save') }} {{ formatCurrency(calculateSavings(product.offerTwo) || 0) }}
                            </span>
                            <label
                                class="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                                for="radio_2">
                                <div>
                                    <span class="mt-2 font-semibold">{{ product.offerTwo }}</span>
                                </div>
                            </label>
                        </div>

                        <!-- offerThree Card -->
                        <div class="relative" v-if="product.offerThree">
                            <input class="hidden peer" id="radio_3" type="radio" name="radio" checked
                                v-model="selectedOffer" />
                            <span
                                class="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 end-4 top-1/2"></span>
                            <span
                                class="absolute top-0 z-10 hidden px-2 py-1 text-xs font-bold text-white transform translate-x-3 -translate-y-2 bg-red-600 rounded-md start-0 peer-checked:block">
                                {{ $t('product.save') }} {{ formatCurrency(calculateSavings(product.offerThree) || 0) }}
                            </span>
                            <label
                                class="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                                for="radio_3">
                                <div>
                                    <span class="mt-2 font-semibold">{{ product.offerThree }}</span>
                                </div>
                            </label>
                        </div>

                        <!-- offerFour Card -->
                        <div class="relative" v-if="product.offerFour">
                            <input class="hidden peer" id="radio_4" type="radio" name="radio" checked
                                v-model="selectedOffer" />
                            <span
                                class="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 end-4 top-1/2"></span>
                            <span
                                class="absolute top-0 z-10 hidden px-2 py-1 text-xs font-bold text-white transform translate-x-3 -translate-y-2 bg-red-600 rounded-md start-0 peer-checked:block">
                                {{ $t('product.save') }} {{ formatCurrency(calculateSavings(product.offerFour) || 0) }}
                            </span>
                            <label
                                class="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                                for="radio_4">
                                <div>
                                    <span class="mt-2 font-semibold">{{ product.offerFour }}</span>
                                </div>
                            </label>
                        </div>
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
                        <div class="flex items-center gap-3" v-if="!hasOffers">
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

                        <div class="mt-4 video-embed-container" v-if="product.videoLink">
                            <div class="relative overflow-hidden bg-gray-100 rounded-lg aspect-video">
                                <!-- Loading state -->
                                <div v-if="videoLoading"
                                    class="absolute inset-0 flex items-center justify-center bg-gray-50">
                                    <iconify-icon icon="svg-spinners:90-ring" class="w-8 h-8 text-blue-500" />
                                </div> <!-- Error state -->
                                <div v-if="videoError"
                                    class="absolute inset-0 flex flex-col items-center justify-center bg-red-50">
                                    <iconify-icon icon="material-symbols:error-outline"
                                        class="w-8 h-8 mb-2 text-red-500" />
                                    <p class="mb-2 text-red-500">{{ $t('product.video_error') }}</p>
                                    <button @click="handleRetryVideo"
                                        class="px-4 py-2 text-sm font-medium text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600">
                                        {{ $t('btn.retry') }}
                                    </button>
                                </div>

                                <!-- Embedded content -->
                                <iframe v-show="!videoLoading && !videoError" :src="safeVideoUrl" class="w-full h-full"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen @load="videoLoading = false" @error="handleVideoError"
                                    :title="$t('product.video_preview')"></iframe>
                            </div>
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

const selectedOffer = ref(null);

// Check if product has any offers
const hasOffers = computed(() => {
    return !!product.value && (product.value.offerOne || product.value.offerTwo || product.value.offerThree || product.value.offerFour);
});

// Calculate savings based on multi-piece offers compared to buying individual pieces
const calculateSavings = (offerText) => {
    if (!offerText || !product.value) return 0;
    // Always log the offer text to help debug
    // console.log('Calculating savings for offer:', offerText);
    // Extract the number of pieces from the offer text
    // This handles both Arabic and English text formats
    let pieces = 1;
    const piecesRegexes = [
        /(\d+)\s*(?:قطعة|قطع)/i,  // Arabic pieces
        /(\d+)\s*(?:pieces?|pcs)/i,  // English pieces
        /^(?:اطلب|أطلب|احصل|إحصل|order|get)\s+(\d+)/i  // "Order X" or "Get X" format
    ];
    for (const regex of piecesRegexes) {
        const match = offerText.match(regex);
        if (match && match[1]) {
            pieces = parseInt(match[1]);
            // console.log('Found pieces:', pieces);
            break;
        }
    }
    // Extract the price from the offer text
    // Look for numbers followed by currency indicators
    const priceRegexes = [
        /(\d+)\s*(?:جنية|جنيه)/i,  // Arabic currency
        /(\d+)\s*(?:EGP|LE|L\.E)/i,  // English currency abbreviations
        /بسعر\s+(\d+)/i,  // "for price X" in Arabic
        /price\s+(\d+)/i,  // "for price X" in English
        // If no currency indicator, try to find the last number in the string
        /(\d+)(?![^\d]*\d)/  // Last number in string
    ];

    let offerPrice = 0;
    for (const regex of priceRegexes) {
        const match = offerText.match(regex);
        if (match && match[1]) {
            offerPrice = parseInt(match[1]);
            // console.log('Found price:', offerPrice);
            break;
        }
    }
    if (pieces === 0 || offerPrice === 0) {
        // console.log('Could not extract valid pieces or price');
        return 0;
    }
    const singlePrice = product.value.discountedPrice;
    // console.log('Single item price:', singlePrice);
    // Calculate what it would cost to buy these items individually
    const regularCost = singlePrice * pieces;
    // console.log('Regular cost for', pieces, 'pieces:', regularCost);
    // The savings is the difference (only show positive savings)
    const savings = regularCost - offerPrice;
    // console.log('Calculated savings:', savings);
    return savings > 0 ? savings : 0;
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
            categoryTitleAr: category.titleAr,
            // productCode: product.productCode,
            productCode: product.value.productCode,
            selectedOffer: selectedOffer.value
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
            productCode: product.productCode,
            quantity: quantity.value,
            selectedOffer: selectedOffer.value
        });
        const orderData = {
            cart: cartStore.cart.map(item => ({
                productId: item.productId,
                productCode: item.productCode,
                title: item.title,
                titleAr: item.titleAr,
                discountedPrice: item.discountedPrice,
                quantity: item.quantity,
                imageUrl1: item.imageUrl1,
                selectedOffer: item.selectedOffer
            })),
            date: new Date().toISOString(),
            market: currentMarket.value === 1 ? 'egypt' : 'ksa',
            statusId: 'pending'
        };
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

// Add to script setup
const videoLoading = ref(false);
const videoError = ref(false);

const safeVideoUrl = computed(() => {
    if (!product.value?.videoLink) return '';

    try {
        const url = new URL(product.value.videoLink);
        const handlers = {
            'youtube.com': (url) => {
                const videoId = url.searchParams.get('v') || url.pathname.split('/').pop();
                return `https://www.youtube-nocookie.com/embed/${videoId}`;
            },
            'vimeo.com': (url) => {
                const videoId = url.pathname.split('/').pop();
                return `https://player.vimeo.com/video/${videoId}`;
            },
            'facebook.com': (url) => {
                // Handle both /videos/ and /watch/ URLs
                const videoId = url.pathname.includes('/videos/')
                    ? url.pathname.split('/videos/')[1]?.split('/')[0]
                    : url.searchParams.get('v');

                if (videoId) {
                    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url.href)}&show_text=0&width=560&height=315`;
                }
                return '';
            },
            // Add more platforms as needed
        };
        for (const [domain, handler] of Object.entries(handlers)) {
            if (url.hostname.includes(domain)) {
                return handler(url);
            }
        }
        // Fallback for direct video links
        if (url.pathname.match(/\.(mp4|webm|ogg|mov)$/i)) {
            return product.value.videoLink;
        }
        return product.value.videoLink;
    } catch {
        return product.value.videoLink;
    }
});

const handleVideoError = () => {
    videoLoading.value = false;
    videoError.value = true;
};

const handleRetryVideo = () => {
    if (!product.value?.videoLink) return;
    videoLoading.value = true;
    videoError.value = false;
    // Force reload by temporarily clearing and resetting the URL
    const currentUrl = product.value.videoLink;
    product.value.videoLink = '';
    nextTick(() => {
        product.value.videoLink = currentUrl;
    });
};

watch(() => product.value?.videoLink, (newVal) => {
    if (newVal) {
        videoLoading.value = true;
        videoError.value = false;
    }
});
</script>