<template>
    <div>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <!-- Product Image Section Skeleton -->
                <div class="space-y-6">
                    <div class="relative w-full overflow-hidden bg-gray-200 rounded-lg animate-pulse h-96"></div>
                    <div class="grid grid-cols-4 gap-4">
                        <div v-for="n in 4" :key="n" class="w-full h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                </div>

                <!-- Product Info Section Skeleton -->
                <div class="space-y-8">
                    <!-- Title and Category -->
                    <div>
                        <div class="w-3/4 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div class="flex items-center justify-between gap-5 mt-4">
                            <div class="w-32 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="w-24 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                    </div>

                    <!-- Price Section -->
                    <div class="flex items-center space-s-4">
                        <div class="w-32 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div class="w-24 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div class="w-20 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>

                    <!-- Description Section -->
                    <div class="p-6 bg-gray-50 rounded-xl">
                        <div class="w-40 h-6 mb-4 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div class="space-y-2">
                            <div class="w-full h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="w-full h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="w-3/4 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                    </div>

                    <!-- Quantity and Add to Cart Section -->
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="w-20 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="flex items-center gap-2">
                                <div class="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                                <div class="w-8 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                                <div class="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                        <div class="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>