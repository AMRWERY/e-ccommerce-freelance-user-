<template>
    <div>
        <div class="p-6 mx-auto max-w-7xl max-lg:max-w-4xl">
            <div class="w-48 h-8 bg-gray-200 rounded-lg animate-pulse"></div>

            <div class="relative grid gap-4 mt-8 lg:grid-cols-3">
                <!-- Cart Items -->
                <div class="space-y-4 lg:col-span-2">
                    <div v-for="n in 3" :key="n"
                        class="p-6 bg-white rounded-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]">
                        <div class="flex items-center gap-4 max-sm:flex-col max-sm:gap-6">
                            <!-- Product Image -->
                            <div class="bg-gray-200 rounded-lg w-52 h-52 animate-pulse shrink-0"></div>

                            <div class="w-full sm:border-s sm:ps-4 sm:border-gray-300">
                                <!-- Title -->
                                <div class="w-3/4 h-6 bg-gray-200 rounded-lg animate-pulse"></div>

                                <!-- Product Details -->
                                <div class="mt-4 space-y-2">
                                    <div class="w-1/4 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                                    <div class="flex items-center justify-between">
                                        <div class="w-20 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                                        <div class="w-24 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                                    </div>
                                </div>

                                <div class="my-6 border-t border-gray-300"></div>

                                <!-- Bottom Section -->
                                <div class="flex flex-wrap items-center justify-between gap-4">
                                    <div class="flex items-center gap-3">
                                        <div class="w-24 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                                    </div>
                                    <div class="w-32 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
                    <div class="w-40 h-6 mb-6 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <div class="w-20 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="w-24 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="w-20 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="w-24 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="w-20 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="w-24 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                    <div class="w-full h-10 mt-4 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>