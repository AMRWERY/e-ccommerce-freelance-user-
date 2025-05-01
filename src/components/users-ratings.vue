<template>
    <div>
        <div class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="max-w-screen-md px-4 mx-auto md:px-8">
                <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Customer
                    Reviews</h2>
                <div class="flex items-center justify-between py-4 mb-4 border-t border-b">
                    <router-link to="" role="button"
                        class="inline-block px-4 py-2 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-white border rounded-lg outline-none ring-indigo-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Write
                        a review</router-link>
                </div>

                <div class="divide-y">
                    <div class="flex flex-col gap-3 py-4 md:py-8">
                        <div>
                            <span class="block text-sm font-bold">John McCulling</span>
                            <span class="block text-sm text-gray-500">August 28, 2021</span>
                        </div>
                        <div class="flex -ms-1">
                            <iconify-icon icon="heroicons-outline:star" class="w-6 h-6 text-blue-400"></iconify-icon>
                            <iconify-icon icon="heroicons-outline:star" class="w-6 h-6 text-blue-400"></iconify-icon>
                            <iconify-icon icon="heroicons-outline:star" class="w-6 h-6 text-blue-400"></iconify-icon>
                            <iconify-icon icon="heroicons-outline:star" class="w-6 h-6 text-blue-400"></iconify-icon>
                            <iconify-icon icon="heroicons-outline:star" class="w-6 h-6 text-blue-400"></iconify-icon>
                        </div>
                        <p class="text-gray-600">This is a section of some simple filler text, also known as
                            placeholder text. It shares some characteristics of a real written text but is random or
                            otherwise generated. It may be used to display a sample of fonts or generate text for
                            testing.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>