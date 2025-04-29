<template>
    <div>
        <footer class="text-gray-300 bg-gray-900">
            <div class="container px-4 py-12 mx-auto">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <!-- Logo and Website Name -->
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <img src="/brand-logo.jpg" alt="Website-Logo" class="w-16 h-16 rounded-full me-2">
                            <span class="text-2xl font-bold text-white logo-label">Brand Shop</span>
                        </div>
                        <p class="text-sm">{{ $t('footer.your_trusted_partner_for_quality_services') }}</p>
                    </div>

                    <!-- Contact Info -->
                    <div class="space-y-2">
                        <h3 class="mb-4 text-lg font-semibold text-white">{{ $t('footer.contact_us') }}</h3>
                        <div class="flex items-start">
                            <iconify-icon icon="heroicons-outline:location-marker" width="20" height="20"
                                class="flex-shrink-0 me-3"></iconify-icon>
                            <div>
                                <p>{{ $t('footer.pyramids_gardens') }}</p>
                                <p>{{ $t('footer.gize') }}</p>
                                <p>{{ $t('footer.egypt') }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Phone Number -->
                    <div class="space-y-2">
                        <h3 class="mb-4 text-lg font-semibold text-white">{{ $t('footer.get_in_touch') }}</h3>
                        <div class="flex items-center">
                            <iconify-icon icon="heroicons-outline:phone" width="20" height="20"
                                class="flex-shrink-0 me-3"></iconify-icon>
                            <a href="tel:+201006312544"
                                class="transition-colors hover:text-white rtl:rotate-0 text-start inline-block [direction:ltr] [unicode-bidi:isolate]">
                                +20 100 631 2544
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="pt-8 mt-8 text-center border-t border-gray-800">
                    <div class="flex justify-center mb-5 space-s-6">
                        <a href="https://www.facebook.com/BRAND.SHOP250" target="_blank"
                            class="w-8 h-8 border-none outline-none">
                            <span class="sr-only">Facebook</span>
                            <img src="/facebook.svg" alt="facebook-icon" class="w-full h-full">
                        </a>
                        <a href="https://www.instagram.com/3mr_wery/" target="_blank"
                            class="w-8 h-8 border-none outline-none">
                            <span class="sr-only">Instagram</span>
                            <img src="/instagram.svg" alt="instagram-icon" class="w-full h-full">
                        </a>
                        <a href="https://www.snapchat.com/add/dummy-account123" target="_blank"
                            class="w-8 h-8 border-none outline-none">
                            <span class="sr-only">Snapchat</span>
                            <img src="/snapchat.svg" alt="snapchat-icon" class="w-full h-full">
                        </a>
                        <a href="https://www.tiktok.com/@dummy_tiktok_account" target="_blank"
                            class="w-8 h-8 text-gray-100 border-none outline-none">
                            <span class="sr-only">Tiktok</span>
                            <img src="/tiktok-outline.svg" alt="tiktok-icon" class="w-full h-full">
                        </a>
                    </div>
                    <p class="text-sm">&copy; 2025 Brand Shop. {{ $t('footer.all_rights_reserved') }}</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>