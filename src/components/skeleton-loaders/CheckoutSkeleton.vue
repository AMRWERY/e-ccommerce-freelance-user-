<template>
    <div>
        <section class="py-4 bg-white md:py-8">
            <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <!-- Left Column -->
                    <div class="flex-1 min-w-0 space-y-8">
                        <!-- Delivery Details Section -->
                        <div class="space-y-4">
                            <div class="w-48 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div v-for="n in 6" :key="n" class="space-y-2">
                                    <div class="w-32 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                                    <div class="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                                </div>
                            </div>
                            <!-- Full Address -->
                            <div class="space-y-2">
                                <div class="w-32 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                                <div class="w-full h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                            </div>
                        </div>

                        <!-- Payment Section -->
                        <div class="space-y-4">
                            <div class="w-32 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 ps-4">
                                    <div class="flex items-start gap-3">
                                        <div class="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
                                        <div class="space-y-2">
                                            <div class="w-32 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                                            <div class="w-40 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Order Summary -->
                    <div class="w-full mt-6 space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                        <div class="flow-root">
                            <div class="-my-3 divide-y divide-gray-200">
                                <div v-for="n in 4" :key="n" class="flex items-center justify-between gap-4 py-3">
                                    <div class="w-24 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                                    <div class="w-20 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>