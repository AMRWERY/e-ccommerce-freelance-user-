<template>
    <div>
        <a v-if="whatsappNumber" :href="`https://wa.me/${whatsappNumber}`" target="_blank" role="button"
            class="fixed z-50 flex items-center justify-center py-3.5 px-3.5 bg-[#25D366] text-white transition-all duration-300 rounded-full shadow-lg bottom-[150px] end-8 focus:ring-4 active:scale-90">
            <img src="/whatsapp.svg" alt="whatsapp-icon" class="w-[30px] h-[30px]">
        </a>
    </div>
</template>

<script setup>
const settingsStore = useSettingsStore();

const whatsappNumber = computed(() => {
    if (!settingsStore.settings?.contactNumbers?.whatsapp) return null;
    // Ensure number is in international format without spaces/special characters
    return settingsStore.settings.contactNumbers.whatsapp
        .replace(/\D/g, '') // Remove all non-digit characters
        .replace(/^0/, '+20') // Convert Egyptian numbers to international format
        .replace(/^/, '+'); // Add leading + if missing
});

onMounted(() => {
    settingsStore.fetchSettings()
});
</script>