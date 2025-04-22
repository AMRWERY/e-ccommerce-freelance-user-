<template>
    <div>
        <div class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <!-- Title Section -->
                <div class="flex justify-center mb-10 md:mb-16">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div class="w-48 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div class="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                </div>

                <!-- Products Grid -->
                <div class="grid gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div v-for="n in 6" :key="n" class="flex flex-col overflow-hidden bg-white rounded shadow-md">
                        <!-- Image Section -->
                        <div class="relative block overflow-hidden bg-gray-100 rounded-t-lg h-96">
                            <div class="w-full h-full bg-gray-200 animate-pulse"></div>
                            <div class="absolute w-16 bg-gray-200 h-7 rounded-e-lg animate-pulse start-0 top-3"></div>
                        </div>

                        <!-- Content Section -->
                        <div class="flex items-start justify-between gap-2 p-4 bg-gray-100 rounded-b-lg">
                            <div class="flex flex-col gap-2">
                                <div class="w-40 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                                <div class="w-32 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                            </div>
                            <div class="flex flex-col items-end gap-2">
                                <div class="w-24 h-6 bg-gray-200 rounded-lg animate-pulse"></div>
                                <div class="w-20 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <div class="flex justify-center mt-10 sm:mt-10 md:mt-20">
                    <div class="flex gap-2">
                        <div v-for="n in 5" :key="n" class="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>