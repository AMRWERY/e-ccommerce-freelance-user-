<template>
    <div>
        <div class="max-w-4xl p-6 mx-auto my-10 bg-white rounded-lg shadow-lg">
            <!-- Header Section -->
            <div class="flex items-center justify-between mb-12">
                <div class="space-y-2">
                    <div class="w-48 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div class="h-5 bg-gray-200 rounded-lg w-36 animate-pulse"></div>
                </div>
                <div class="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            </div>

            <!-- Product Items -->
            <div class="space-y-6">
                <div v-for="n in 3" :key="n" class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
                    <!-- Product Image -->
                    <div class="col-span-3">
                        <div class="w-full h-20 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                    <!-- Product Details -->
                    <div class="col-span-6">
                        <div class="space-y-3">
                            <div class="w-3/4 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="w-1/2 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                    <!-- Quantity -->
                    <div class="col-span-3">
                        <div class="flex items-center gap-2">
                            <div class="w-20 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div class="w-8 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Summary Section -->
            <div class="space-y-6">
                <!-- Subtotal -->
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-8">
                        <div class="w-24 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                    <div class="col-span-4 text-end">
                        <div class="w-24 h-5 bg-gray-200 rounded-lg ms-auto animate-pulse"></div>
                    </div>
                </div>

                <!-- Savings -->
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-8">
                        <div class="w-24 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                    <div class="col-span-4 text-end">
                        <div class="w-24 h-5 bg-gray-200 rounded-lg ms-auto animate-pulse"></div>
                    </div>
                </div>

                <!-- Total -->
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-8">
                        <div class="w-32 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                    <div class="col-span-4 text-end">
                        <div class="w-32 h-8 bg-gray-200 rounded-lg ms-auto animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>