<template>
    <div>
        <div class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="max-w-screen-md px-4 mx-auto md:px-8">
                <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">{{
                    $t('product.customer_reviews') }}</h2>
                <div class="py-4 mb-4 border-t border-b">
                    <button @click="toggleReviewInput"
                        class="inline-block px-4 py-2 mb-4 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-white border rounded-lg outline-none ring-indigo-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
                        {{ showReviewInput ? $t('btn.send_review') : $t('btn.write_a_review') }}
                    </button>
                    <div v-if="showReviewInput" class="mb-6">
                        <textarea v-model="reviewComment" class="w-full p-3 border rounded-lg"
                            :placeholder="$t('form.write_your_review')" rows="4"></textarea>
                    </div>
                </div>

                <div class="divide-y">
                    <div v-for="rating in product.ratings" :key="rating.userId"
                        class="flex flex-col gap-3 py-4 md:py-8">
                        <div>
                            <span class="block text-sm font-bold">
                                {{ userNames[rating.userId] || t('product.anonymous') }}
                            </span>
                        </div>

                        <div class="flex -ms-1">
                            <iconify-icon v-for="star in 5" :key="star"
                                :icon="star <= rating.rating ? 'heroicons-solid:star' : 'heroicons-outline:star'"
                                class="w-6 h-6 text-blue-400" />
                        </div>

                        <div class="p-3 bg-gray-100 rounded-xl hover:bg-gray-100" v-if="rating.comment">
                            <p class="overflow-hidden leading-relaxed text-gray-600 break-words whitespace-pre-wrap">
                                {{ rating.comment }}
                            </p>
                        </div>
                    </div>
                    <div v-if="!product.ratings?.comment?.length"
                        class="py-8 text-xl font-semibold text-center text-gray-500">
                        {{ $t('product.no_reviews_yet') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const { t } = useI18n()
const userNames = ref({});

// Fetch all user names when component mounts
onMounted(async () => {
    if (!props.product?.ratings) return;
    // Get unique user IDs from ratings
    const userIds = props.product.ratings
        .map(r => r.userId)
        .filter(id => id);
    const uniqueIds = [...new Set(userIds)];
    // Batch fetch user names
    await Promise.all(uniqueIds.map(async (userId) => {
        try {
            const userDoc = await getDoc(doc(db, 'users', userId));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                userNames.value[userId] = `${userData.firstName} ${userData.lastName}`;
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }));
});

const authStore = useAuthStore()
const productStore = useProductsStore()

const showReviewInput = ref(false)
const reviewComment = ref('')

const toggleReviewInput = () => {
    if (showReviewInput.value) {
        submitReview()
    }
    showReviewInput.value = !showReviewInput.value
}

const submitReview = async () => {
    try {
        const userId = authStore.user?.uid
        const productRef = doc(db, "products", props.product.id)
        // Get current product data
        const productSnap = await getDoc(productRef)
        if (!productSnap.exists()) return
        const productData = productSnap.data()
        const ratings = productData.ratings || []
        // Find existing user rating
        const userRatingIndex = ratings.findIndex(r => r.userId === userId)
        if (userRatingIndex > -1) {
            // Update existing rating with comment
            ratings[userRatingIndex].comment = reviewComment.value
            ratings[userRatingIndex].timestamp = new Date()
        } else {
            // Create new rating (requires rating value - set to 0 if not available)
            ratings.push({
                userId,
                rating: 0, // You might want to require a rating first
                comment: reviewComment.value,
                timestamp: new Date()
            })
        }
        await updateDoc(productRef, {
            ratings: ratings
        })
        // Refresh product data
        await productStore.fetchProductDetail(props.product.id)
        reviewComment.value = ''
    } catch (error) {
        console.error('Error submitting review:', error)
    }
}
</script>