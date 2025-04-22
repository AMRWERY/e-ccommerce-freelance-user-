<template>
    <div>
        <div class="p-4 mx-auto font-sans lg:max-w-7xl md:max-w-5xl">
            <!-- Search bar skeleton for mobile -->
            <div class="mb-6 lg:hidden">
                <div class="w-full h-10 bg-gray-200 rounded-md animate-pulse"></div>
            </div>

            <div class="lg:grid lg:grid-cols-4 lg:gap-x-8">
                <!-- Filters skeleton -->
                <div class="hidden col-span-1 lg:block">
                    <div class="space-y-4">
                        <div class="w-3/4 h-8 bg-gray-200 rounded-md animate-pulse"></div>
                        <div class="space-y-2">
                            <div class="h-6 bg-gray-200 rounded-md animate-pulse"></div>
                            <div class="h-6 bg-gray-200 rounded-md animate-pulse"></div>
                            <div class="h-6 bg-gray-200 rounded-md animate-pulse"></div>
                        </div>
                        <div class="w-3/4 h-8 mt-6 bg-gray-200 rounded-md animate-pulse"></div>
                        <div class="space-y-2">
                            <div class="h-6 bg-gray-200 rounded-md animate-pulse"></div>
                            <div class="h-6 bg-gray-200 rounded-md animate-pulse"></div>
                        </div>
                    </div>
                </div>

                <!-- Product grid skeleton -->
                <div class="mt-6 lg:col-span-3 lg:mt-0">
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                        <div v-for="n in 9" :key="n" class="flex flex-col overflow-hidden bg-white rounded shadow-md">
                            <!-- Image skeleton -->
                            <div class="w-full h-64 bg-gray-200 animate-pulse"></div>

                            <!-- Content skeleton -->
                            <div class="flex flex-col flex-1 p-4 space-y-3">
                                <div class="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
                                <div class="flex justify-between">
                                    <div class="w-1/4 h-5 bg-gray-200 rounded animate-pulse"></div>
                                    <div class="w-1/4 h-5 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div class="mt-2 bg-gray-200 rounded h-9 animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination skeleton -->
                    <div class="flex justify-center mt-10">
                        <div class="flex space-s-2">
                            <div v-for="n in 5" :key="n" class="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>