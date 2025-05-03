<template>
    <div>
        <!-- Title Section -->
        <div class="flex items-center justify-center mt-2 mb-3">
            <div class="w-1/12 h-1 border-t-2 border-gray-300"></div>
            <div class="w-48 h-8 mx-4 mb-2 bg-gray-200 rounded-md animate-pulse sm:w-56 md:w-64"></div>
            <div class="w-1/12 h-1 border-t-2 border-gray-300"></div>
        </div>

        <!-- Products skeleton -->
        <div class="mt-6 mb-12 space-y-5">
            <div class="flex gap-6">
                <div v-for="i in 3" :key="i" class="swiper-slide !h-auto">
                    <div class="relative z-50 p-3 overflow-hidden bg-gray-100 rounded-lg cursor-pointer group">
                        <div class="w-full h-[200px] sm:h-[300px] overflow-hidden mx-auto bg-gray-200 animate-pulse">
                        </div>
                        <div
                            class="absolute left-0 right-0 w-11/12 p-2 mx-auto transition-all duration-300 rounded-lg bottom-2 bg-gray-300/60">
                            <div class="space-y-2 text-center">
                                <div class="w-3/4 h-4 mx-auto bg-gray-400 rounded animate-pulse"></div>
                                <div class="w-1/3 h-4 mx-auto bg-gray-400 rounded animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- See More Button skeleton -->
        <div class="flex justify-center mt-8">
            <div class="w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.swiper-slide {
    width: calc((100% - 60px) / 3) !important;
    margin-right: 30px !important;
}

@media (max-width: 768px) {
    .swiper-slide {
        width: calc((100% - 40px) / 2) !important;
        margin-right: 20px !important;
    }
}

@media (max-width: 640px) {
    .swiper-slide {
        width: 100% !important;
        margin-right: 0 !important;
    }
}
</style>