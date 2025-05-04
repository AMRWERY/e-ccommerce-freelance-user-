<template>
    <div>
        <footer class="text-gray-300 bg-gray-900">
            <div class="container px-4 py-12 mx-auto">
                <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <!-- Logo and Website Name -->
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <img src="/brand-logo.jpg" alt="Website-Logo" class="w-16 h-16 rounded-full me-2">
                            <span class="text-2xl font-bold text-white logo-label">{{ settingsStore.settings?.logo?.name
                            }}</span>
                        </div>
                        <!-- <p class="text-sm">{{ $t('footer.your_trusted_partner_for_quality_services') }}</p> -->
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
                        <div class="flex items-center" v-if="settingsStore.settings?.contactNumbers?.phone">
                            <iconify-icon icon="heroicons-outline:phone" width="20" height="20"
                                class="flex-shrink-0 me-3"></iconify-icon>
                            <a :href="`tel:${settingsStore.settings.contactNumbers.phone}`"
                                class="transition-colors hover:text-white rtl:rotate-0 text-start inline-block [direction:ltr] [unicode-bidi:isolate]">
                                {{ settingsStore.settings.contactNumbers.phone }}
                            </a>
                        </div>
                        <div class="flex items-center" v-if="settingsStore.settings?.contactNumbers?.anotherPhone">
                            <iconify-icon icon="heroicons-outline:phone" width="20" height="20"
                                class="flex-shrink-0 me-3"></iconify-icon>
                            <a :href="`tel:${settingsStore.settings.contactNumbers.anotherPhone}`"
                                class="transition-colors hover:text-white rtl:rotate-0 text-start inline-block [direction:ltr] [unicode-bidi:isolate]">
                                {{ settingsStore.settings.contactNumbers.anotherPhone }}
                            </a>
                        </div>
                        <div class="flex items-center" v-if="settingsStore.settings?.contactNumbers?.anotherWhatsapp">
                            <img src="/whatsapp.svg" alt="whatsapp-icon" class="flex-shrink-0 w-5 h-5 me-3">
                            <a :href="`https://wa.me/${whatsappNumber}`"
                                class="transition-colors hover:text-white rtl:rotate-0 text-start inline-block [direction:ltr] [unicode-bidi:isolate]">
                                {{ settingsStore.settings.contactNumbers.anotherWhatsapp }}
                            </a>
                        </div>
                    </div>

                    <!-- Links -->
                    <div class="space-y-2">
                        <nav class="flex flex-col gap-4">
                            <div>
                                <router-link :to="{ name: 'exchange-policy', params: { market: selected } }"
                                    class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                                        $t('footer.exchange_and_return_policy') }}</router-link>
                            </div>
                            <div>
                                <router-link :to="{ name: 'shipping-policy', params: { market: selected } }"
                                    class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                                        $t('footer.shipping_policy') }}</router-link>
                            </div>
                            <div>
                                <router-link :to="{ name: 'terms-of-use', params: { market: selected } }"
                                    class="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600">{{
                                        $t('footer.terms_of_use') }}</router-link>
                            </div>
                        </nav>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="pt-8 mt-8 text-center border-t border-gray-800">
                    <div class="flex justify-center mb-5 space-s-6">
                        <a v-if="settingsStore.settings?.socialMedia?.facebook"
                            :href="settingsStore.settings.socialMedia.facebook" target="_blank"
                            class="w-8 h-8 border-none outline-none">
                            <span class="sr-only">Facebook</span>
                            <img src="/facebook.svg" alt="facebook-icon" class="w-full h-full">
                        </a>

                        <a v-if="settingsStore.settings?.socialMedia?.instagram"
                            :href="settingsStore.settings.socialMedia.instagram" target="_blank"
                            class="w-8 h-8 border-none outline-none">
                            <span class="sr-only">Instagram</span>
                            <img src="/instagram.svg" alt="instagram-icon" class="w-full h-full">
                        </a>

                        <a v-if="settingsStore.settings?.socialMedia?.snapchat"
                            :href="settingsStore.settings.socialMedia.snapchat" target="_blank"
                            class="w-8 h-8 border-none outline-none">
                            <span class="sr-only">Snapchat</span>
                            <img src="/snapchat.svg" alt="snapchat-icon" class="w-full h-full">
                        </a>

                        <a v-if="settingsStore.settings?.socialMedia?.tiktok"
                            :href="settingsStore.settings.socialMedia.tiktok" target="_blank"
                            class="w-8 h-8 text-gray-100 border-none outline-none">
                            <span class="sr-only">Tiktok</span>
                            <img src="/tiktok-outline.svg" alt="tiktok-icon" class="w-full h-full">
                        </a>
                    </div>
                    <p class="text-sm">&copy; 2025 {{ settingsStore.settings?.logo?.name }}. {{
                        $t('footer.all_rights_reserved') }}</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const { t } = useI18n();
const route = useRoute();
const settingsStore = useSettingsStore()

onMounted(() => {
    settingsStore.fetchSettings()
})

const countries = computed(() => [
    {
        id: 1,
        code: 'eg',
        name: t('countries_menu.egypt'),
        avatar: '/egypt-flag.svg',
    },
    {
        id: 2,
        code: 'sa',
        name: t('countries_menu.ksa'),
        avatar: '/ksa-flag.svg',
    },
]);

const selected = computed({
    get() {
        const marketId = Number(route.params.market);
        return countries.value.find(c => c.id === marketId) || countries.value[0];
    },
    set(newValue) {
        authStore.isOverlayVisible = true;
        localStorage.setItem('selectedMarket', newValue.id.toString());
        router.push({
            ...route,
            params: { ...route.params, market: newValue.id }
        }).then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    }
})

const whatsappNumber = computed(() => {
    if (!settingsStore.settings?.contactNumbers?.anotherWhatsapp) return null;
    // Ensure number is in international format without spaces/special characters
    return settingsStore.settings.contactNumbers.anotherWhatsapp
        .replace(/\D/g, '') // Remove all non-digit characters
        .replace(/^0/, '+20') // Convert Egyptian numbers to international format
        .replace(/^/, '+'); // Add leading + if missing
});
</script>