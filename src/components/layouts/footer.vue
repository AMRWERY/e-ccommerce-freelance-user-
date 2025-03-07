<template>
    <div>
        <div class="pt-4 bg-[#1f2937] sm:pt-10 lg:pt-12 text-white">
            <footer class="px-4 mx-auto max-w-screen-2xl md:px-8">
                <div class="flex flex-col items-center justify-between gap-4 py-6 border-t border-b md:flex-row">
                    <!-- nav - start -->
                    <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                        <router-link to=""
                            class="transition duration-100 hover:text-gray-200 active:text-gray-300">About</router-link>
                        <router-link to=""
                            class="transition duration-100 hover:text-gray-200 active:text-gray-300">Investor
                            Relations</router-link>
                        <router-link to=""
                            class="transition duration-100 hover:text-gray-200 active:text-gray-300">Jobs</router-link>
                        <router-link to=""
                            class="transition duration-100 hover:text-gray-200 active:text-gray-300">Press</router-link>
                        <router-link to=""
                            class="transition duration-100 hover:text-gray-200 active:text-gray-300">Blog</router-link>
                    </nav>
                    <!-- nav - end -->

                    <!-- social - start -->
                    <div class="flex gap-4">
                        <router-link to="" target="_blank"
                            class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <iconify-icon icon="mynaui:brand-instagram" width="24" height="24"></iconify-icon>
                        </router-link>

                        <router-link to="" target="_blank"
                            class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <iconify-icon icon="mynaui:brand-facebook-solid" width="24" height="24"></iconify-icon>
                        </router-link>

                        <router-link to="" target="_blank"
                            class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            <iconify-icon icon="ic:twotone-whatsapp" width="24" height="24"></iconify-icon>
                        </router-link>
                    </div>
                    <!-- social - end -->
                </div>

                <div class="py-8 text-sm text-center text-gray-100">© 2025 - Present Flowrift. All rights reserved.
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>

</script>