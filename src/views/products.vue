<template>
    <div>
        <div class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
                <!-- text - start -->
                <div class="mb-10 md:mb-16">
                    <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-6 lg:text-3xl">Collections</h2>

                    <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">This is a section of some
                        simple filler text, also known as placeholder text. It shares some characteristics of a real
                        written text but is random or otherwise generated.</p>
                </div>
                <!-- text - end -->

                <div class="grid gap-6 sm:grid-cols-2">
                    <!-- product - start -->
                    <router-link to=""
                        class="relative flex items-end p-4 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-80">
                        <img src="https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750"
                            loading="lazy" alt="Photo by Fakurian Design"
                            class="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />

                        <div
                            class="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent">
                        </div>

                        <div class="relative flex flex-col">
                            <span class="text-gray-300">Home</span>
                            <span class="text-lg font-semibold text-white lg:text-xl">Decoration</span>
                        </div>
                    </router-link>
                    <!-- product - end -->

                    <!-- product - start -->
                    <router-link to=""
                        class="relative flex items-end p-4 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-80">
                        <img src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
                            loading="lazy" alt="Photo by Fakurian Design"
                            class="absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />

                        <div
                            class="absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent">
                        </div>

                        <div class="relative flex flex-col">
                            <span class="text-gray-300">Modern</span>
                            <span class="text-lg font-semibold text-white lg:text-xl">Furniture</span>
                        </div>
                    </router-link>
                    <!-- product - end -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>