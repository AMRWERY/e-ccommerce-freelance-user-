<template>
    <div>
        <div class="pb-6 bg-white sm:pb-8 lg:pb-12">
            <section
                class="relative flex items-center justify-center flex-1 py-16 overflow-hidden bg-gray-100 shadow-lg min-h-96 shrink-0 md:py-20 xl:py-48">
                <!-- new appliance‑related image -->
                <img src="/hero-banner.jpg" loading="lazy" alt="modern-kitchen-appliances"
                    class="absolute inset-0 object-cover object-center w-full h-full" />

                <!-- overlay -->
                <div class="absolute inset-0 bg-indigo-200 opacity-[0.55] mix-blend-multiply"></div>

                <div class="flex flex-col w-full gap-8">
                    <div class="px-4 mx-auto sm:max-w-4xl">
                        <!-- Card with new heading & copy -->
                        <div class="relative flex flex-col items-center p-8 bg-[#ffffff99] rounded-lg">
                            <h1 class="mb-6 text-4xl font-bold text-center text-[#333333] sm:text-5xl md:text-6xl">
                                {{ $t('home.elevate_your_kitchen_essentials') }}
                            </h1>
                            <p class="text-lg text-center text-[#555555] sm:text-xl">
                                {{
                                    $t('home.shop_our_curated_collection_of_compact_blenders_kettles_toasters_and_more_designed_for_performance_and_style')
                                }}
                            </p>
                            <!-- <div class="flex flex-col w-full gap-3 sm:flex-row sm:justify-center">
                                <router-link to=""
                                    class="px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                                    Shop Now
                                </router-link>
                                <router-link to=""
                                    class="px-8 py-4 text-base font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-indigo-300">
                                    Learn More
                                </router-link>
                            </div> -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>

</script>