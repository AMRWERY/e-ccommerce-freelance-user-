<template>
    <div>
        <div class="flex items-center mt-1">
            <div class="flex items-center">
                <button v-for="star in 5" :key="star" @click="rateProduct(star)" @mouseover="hoverRating = star"
                    @mouseleave="hoverRating = null" class="transition-colors duration-200">
                    <iconify-icon :icon="getStarIcon(star)"
                        :class="[star <= effectiveRating ? 'text-purple-600' : 'text-gray-300']" />
                </button>
            </div>
            <p class="text-gray-500 ms-2 mb-0.5">({{ totalRatings }} {{ $t('product.ratings') }})</p>
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
const route = useRoute()
const { t } = useI18n()

const props = defineProps({
    productId: {
        type: String,
        required: true
    },
    averageRating: {
        type: Number,
        default: 0
    },
    totalRatings: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(['rating-updated']);

const authStore = useAuthStore();
const hoverRating = ref(null);
const selectedRating = ref(0);

const effectiveRating = computed(() => {
    return hoverRating.value || selectedRating.value || props.averageRating;
});

const getStarIcon = (star) => {
    return star <= effectiveRating.value ? 'heroicons-solid:star' : 'heroicons-outline:star';
};

const currentMarket = computed(() => Number(route.params.market));

const { showToast, toastMessage, toastType, toastIcon, triggerToast } = useToast();

const rateProduct = async (rating) => {
    if (currentMarket.value === 2) {
        if (!authStore.isAuthenticated || !authStore.user) {
            triggerToast({
                message: t('toast.please_log_in_first_to_rate_product'),
                type: 'warning',
                icon: 'material-symbols:warning-outline-rounded'
            });
            return;
        }
    }
    try {
        // console.log(`Rating ${rating} submitted for product ${props.productId}`);
        selectedRating.value = rating;
        emit('rating-updated', {
            newRating: rating,
            productId: props.productId
        });
    } catch (error) {
        console.error('Error submitting rating:', error);
    }
};
</script>