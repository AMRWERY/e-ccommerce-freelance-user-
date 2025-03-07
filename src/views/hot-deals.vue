<template>
    <div>
        <div class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl">
                <!-- text - start -->
                <div class="flex justify-center mb-10 md:mb-16">
                    <iconify-icon icon="material-symbols:local-fire-department" width="35" height="35"
                        class="text-red-500 ms-1">
                    </iconify-icon>
                    <p class="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-4xl">Hot Deals
                    </p>
                    <iconify-icon icon="material-symbols:local-fire-department" width="35" height="35"
                        class="text-red-500 ms-1">
                    </iconify-icon>
                </div>
                <!-- text - end -->

                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <!-- product - start -->
                    <div>
                        <router-link to="" class="relative block overflow-hidden bg-gray-100 rounded-t-lg group h-96">
                            <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                loading="lazy" alt="Photo by Austin Wade"
                                class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />

                            <span
                                class="absolute start-0 top-3 rounded-e-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
                        </router-link>

                        <div class="flex items-start justify-between gap-2 p-4 bg-gray-100 rounded-b-lg">
                            <div class="flex flex-col">
                                <router-link to=""
                                    class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Fancy
                                    Outfit</router-link>
                                <span class="text-sm text-gray-500 lg:text-base">by Fancy Brand</span>
                            </div>

                            <div class="flex flex-col items-end">
                                <span class="font-bold text-gray-600 lg:text-lg">$19.99</span>
                                <span class="text-sm text-red-500 line-through">$39.99</span>
                            </div>
                        </div>
                    </div>
                    <!-- product - end -->

                    <!-- product - start -->
                    <div>
                        <router-link to="" class="relative block overflow-hidden bg-gray-100 rounded-t-lg group h-96">
                            <img src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                loading="lazy" alt="Photo by Nick Karvounis"
                                class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
                        </router-link>

                        <div class="flex items-start justify-between gap-2 p-4 bg-gray-100 rounded-b-lg">
                            <div class="flex flex-col">
                                <router-link to=""
                                    class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Cool
                                    Outfit</router-link>
                                <span class="text-sm text-gray-500 lg:text-base">by Cool Brand</span>
                            </div>

                            <div class="flex flex-col items-end">
                                <span class="font-bold text-gray-600 lg:text-lg">$29.99</span>
                            </div>
                        </div>
                    </div>
                    <!-- product - end -->

                    <!-- product - start -->
                    <div>
                        <router-link to="" class="relative block overflow-hidden bg-gray-100 rounded-t-lg group h-96">
                            <img src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                loading="lazy" alt="Photo by Austin Wade"
                                class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
                        </router-link>

                        <div class="flex items-start justify-between gap-2 p-4 bg-gray-100 rounded-b-lg">
                            <div class="flex flex-col">
                                <router-link to=""
                                    class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Nice
                                    Outfit</router-link>
                                <span class="text-sm text-gray-500 lg:text-base">by Nice Brand</span>
                            </div>

                            <div class="flex flex-col items-end">
                                <span class="font-bold text-gray-600 lg:text-lg">$35.00</span>
                            </div>
                        </div>
                    </div>
                    <!-- product - end -->

                    <!-- product - start -->
                    <div>
                        <router-link to="" class="relative block overflow-hidden bg-gray-100 rounded-t-lg group h-96">
                            <img src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                loading="lazy" alt="Photo by Vladimir Fedotov"
                                class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
                        </router-link>

                        <div class="flex items-start justify-between gap-2 p-4 bg-gray-100 rounded-b-lg">
                            <div class="flex flex-col">
                                <router-link to=""
                                    class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg">Lavish
                                    Outfit</router-link>
                                <span class="text-sm text-gray-500 lg:text-base">by Lavish Brand</span>
                            </div>

                            <div class="flex flex-col items-end">
                                <span class="font-bold text-gray-600 lg:text-lg">$49.99</span>
                            </div>
                        </div>
                    </div>
                    <!-- product - end -->
                </div>
            </div>

            <div class="flex justify-center mt-10 sm:mt-10 md:mt-20">
                <!-- pagination component -->
                <pagination />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>