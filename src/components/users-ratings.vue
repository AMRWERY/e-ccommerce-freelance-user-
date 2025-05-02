<template>
    <div>
        <div class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="max-w-screen-md px-4 mx-auto md:px-8">
                <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">{{
                    $t('product.customer_reviews') }}</h2>
                <div class="flex items-center justify-between py-4 mb-4 border-t border-b">
                    <router-link to="" role="button"
                        class="inline-block px-4 py-2 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-white border rounded-lg outline-none ring-indigo-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">{{
                            $t('btn.write_a_review') }}</router-link>
                </div>

                <div class="divide-y">
                    <div v-for="rating in product.ratings" :key="rating.userId || rating.timestamp?.toISOString()"
                        class="flex flex-col gap-3 py-4 md:py-8">
                        <div>
                            <span class="block text-sm font-bold">
                                {{ userNames[rating.userId] || t('product.anonymous') }}
                            </span>
                            <span v-if="rating.timestamp" class="block text-sm text-gray-500">
                                {{ formatDate(rating.timestamp) }}
                            </span>
                        </div>

                        <div class="flex -ms-1">
                            <iconify-icon v-for="star in 5" :key="star"
                                :icon="star <= rating.rating ? 'heroicons-solid:star' : 'heroicons-outline:star'"
                                class="w-6 h-6 text-blue-400" />
                        </div>

                        <p v-if="rating.comment" class="text-gray-600">
                            {{ rating.comment }}
                        </p>
                    </div>
                    <div v-if="!product.ratings?.length" class="py-8 text-center text-gray-500">
                        {{ $t('product.no_reviews_yet') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { doc, getDoc } from 'firebase/firestore';
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

const formatDate = (timestamp) => {
    if (!timestamp?.toDate) return '';
    return formatDistanceToNow(timestamp.toDate(), { addSuffix: true });
};
</script>