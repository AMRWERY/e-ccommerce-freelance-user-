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

                    <div class="grid max-w-4xl gap-6 px-6 mx-auto lg:px-8 xl:grid-cols-2">
                        <!-- offerOne Card -->
                        <label class="flex-1 cursor-pointer" v-if="product.offerOne">
                            <input type="radio" name="offer" class="hidden peer" v-model="selectedOffer" :value="product.offerOne" />
                            <div class="p-4 border-2 border-gray-200 rounded-xl peer-checked:ring-2 peer-checked:ring-blue-200"
                                :class="['bg-gradient-to-r from-pink-300 to-pink-100', 'peer-checked:bg-pink-50']">
                                <p class="text-xl font-bold text-gray-800">{{ product.offerOne }}</p>
                            </div>
                        </label>

                        <!-- offerTwo Card -->
                        <label class="flex-1 cursor-pointer" v-if="product.offerTwo">
                            <input type="radio" name="offer" class="hidden peer" v-model="selectedOffer" :value="product.offerTwo" />
                            <div class="p-4 border-2 border-gray-200 rounded-xl peer-checked:ring-2 peer-checked:ring-green-200"
                                :class="['bg-gradient-to-r from-amber-300 to-amber-100', 'peer-checked:bg-amber-50']">
                                <p class="text-xl font-bold text-gray-800">{{ product.offerTwo }}</p>
                            </div>
                        </label>

                        <!-- offerThree Card -->
                        <label class="flex-1 cursor-pointer" v-if="product.offerThree">
                            <input type="radio" name="offer" class="hidden peer" v-model="selectedOffer" :value="product.offerThree" />
                            <div class="p-4 border-2 border-gray-200 rounded-xl peer-checked:ring-2 peer-checked:ring-indigo-200"
                                :class="['bg-gradient-to-r from-indigo-300 to-indigo-100', 'peer-checked:bg-indigo-50']">
                                <p class="text-xl font-bold text-gray-800">{{ product.offerThree }}</p>
                            </div>
                        </label>

                        <!-- offerFour Card -->
                        <label class="flex-1 cursor-pointer" v-if="product.offerFour">
                            <input type="radio" name="offer" class="hidden peer" v-model="selectedOffer" :value="product.offerFour" />
                            <div class="p-4 border-2 border-gray-200 rounded-xl peer-checked:ring-2 peer-checked:ring-teal-200"
                                :class="['bg-gradient-to-r from-emerald-300 to-emerald-100', 'peer-checked:bg-emerald-50']">
                                <p class="text-xl font-bold text-gray-800">{{ product.offerFour }}</p>
                            </div>
                        </label>
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

                        <div class="mt-4 video-embed-container" v-if="product.videoLink">
                            <div class="relative overflow-hidden bg-gray-100 rounded-lg aspect-video">
                                <!-- Loading state -->
                                <div v-if="videoLoading"
                                    class="absolute inset-0 flex items-center justify-center bg-gray-50">
                                    <iconify-icon icon="svg-spinners:90-ring" class="w-8 h-8 text-blue-500" />
                                </div>                                <!-- Error state -->
                                <div v-if="videoError"
                                    class="absolute inset-0 flex flex-col items-center justify-center bg-red-50">
                                    <iconify-icon icon="material-symbols:error-outline" class="w-8 h-8 mb-2 text-red-500" />
                                    <p class="mb-2 text-red-500">{{ $t('product.video_error') }}</p>
                                    <button 
                                        @click="handleRetryVideo"
                                        class="px-4 py-2 text-sm font-medium text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600"
                                    >
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
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

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
            productCode: product.productCode,
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
            productCode: product.productCode,
            quantity: 1
        });
        const orderData = {
            cart: cartStore.cart.map(item => ({
                productId: item.productId,
                productCode: item.productCode,
                title: item.title,
                titleAr: item.titleAr,
                discountedPrice: item.discountedPrice,
                quantity: item.quantity,
                imageUrl1: item.imageUrl1
            })),
            date: new Date().toISOString(),
            market: currentMarket.value === 1 ? 'egypt' : 'ksa',
            statusId: 'pending'
        };
        await addDoc(collection(db, "checkout"), orderData);
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