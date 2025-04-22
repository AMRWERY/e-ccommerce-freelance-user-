<template>
    <div>
        <section class="max-w-full mx-auto mb-10">
            <!-- Title skeleton -->
            <div class="flex items-center justify-center mt-2 mb-3">
                <div class="w-1/12 h-1 border-t-2 border-gray-300"></div>
                <div class="w-48 h-8 mx-4 mb-2 bg-gray-200 rounded-md animate-pulse sm:w-56 md:w-64"></div>
                <div class="w-1/12 h-1 border-t-2 border-gray-300"></div>
            </div>

            <!-- Products grid skeleton -->
            <div class="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                <div v-for="n in 8" :key="n" class="relative overflow-hidden bg-gray-100 rounded-lg">
                    <!-- Image skeleton -->
                    <div class="w-full h-[200px] sm:h-[300px] bg-gray-200 animate-pulse"></div>

                    <!-- Content skeleton -->
                    <div class="absolute w-11/12 p-2 mx-auto rounded-lg end-0 start-0 bottom-2 bg-gray-200/60">
                        <div class="flex flex-col items-center gap-2">
                            <div class="w-3/4 h-4 bg-gray-300 rounded animate-pulse"></div>
                            <div class="flex items-center justify-center w-full gap-3">
                                <div class="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
                                <div class="w-12 h-3 bg-gray-300 rounded animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- See More Button skeleton -->
            <div class="flex justify-center mt-8">
                <div class="w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>