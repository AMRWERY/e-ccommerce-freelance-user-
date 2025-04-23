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
                                <p>123 Business Street</p>
                                <p>New York, NY 10001</p>
                                <p>United States</p>
                            </div>
                        </div>
                    </div>

                    <!-- Phone Number -->
                    <div class="space-y-2">
                        <h3 class="mb-4 text-lg font-semibold text-white">{{ $t('footer.get_in_touch') }}</h3>
                        <div class="flex items-center">
                            <iconify-icon icon="heroicons-outline:phone" width="20" height="20"
                                class="flex-shrink-0 me-3"></iconify-icon>
                            <a href="tel:+1234567890" class="transition-colors hover:text-white">+1 (234) 567-890</a>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="pt-8 mt-8 text-center border-t border-gray-800">
                    <p class="text-sm">&copy; 2025 Brand Shop. {{ $t('footer.all_rights_reserved') }}</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>