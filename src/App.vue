<template>
  <div>
    <!-- Overlay Component -->
    <overlay :visible="localeStore.isOverlayVisible" />

    <!-- progress-bar component -->
    <progress-bar />

    <div :dir="isRTL ? 'rtl' : 'ltr'" :class="{ 'rtl': isRTL, 'ltr': !isRTL }">
      <!-- navbar component -->
      <navbar />

      <main>
        <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>

          <!-- whatsapp-componenet component -->
          <whatsapp-componenet />

          <!-- scroll-to-top component -->
          <scroll-to-top />
        </div>
      </main>

      <!-- footer component -->
      <Footer />
    </div>
  </div>
</template>

<script setup>
const localeStore = useLocaleStore();
const { locale } = useI18n();

const isRTL = computed(() => {
  return locale.value === 'ar';
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>