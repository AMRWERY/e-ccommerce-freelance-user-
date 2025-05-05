<template>
    <div>
        <div class="w-full pb-6 bg-white sm:pb-8 lg:pb-12">
            <!-- Carousel wrapper (we measure its width) -->
            <div ref="wrapperRef" class="relative w-full overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[40rem]">
                <!-- Slides track, absolutely positioned -->
                <div class="absolute top-0 left-0 flex transition-transform duration-500 ease-in-out"
                    :style="slideTrackStyle" @mouseenter="pauseSlider" @mouseleave="resumeSlider">
                    <div v-for="(banner, idx) in orderedSlides" :key="banner.id" class="flex-shrink-0"
                        :style="{ width: wrapperWidth + 'px' }">
                        <img :src="banner.fileUrl" :alt="`Home slider ${idx + 1}`"
                            class="object-cover object-center w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[40rem]" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const settingsStore = useSettingsStore()

// Build an ordered array of slide URLs
const orderedSlides = computed(() => {
    const map = settingsStore.settings?.homeSliders || {}
    return Object.entries(map)
        .filter(([key, url]) => key.startsWith('imageUrl') && url)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([id, fileUrl]) => ({ id, fileUrl }))
})

// Reactive state
const currentSlide = ref(0)
const autoPlay = ref(true)
let interval = null

// Refs for measuring
const wrapperRef = ref(null)
const wrapperWidth = ref(0)

// On mount: fetch data, measure width, start autoplay
onMounted(async () => {
    await settingsStore.fetchSettings()
    await nextTick()
    wrapperWidth.value = wrapperRef.value?.clientWidth || 0
    startAutoPlay()
})

// Cleanup when component unmounts
onBeforeUnmount(() => {
    clearInterval(interval)
})

// Compute the transform style in pixels
const slideTrackStyle = computed(() => ({
    transform: `translateX(-${currentSlide.value * wrapperWidth.value}px)`
}))

// Autoplay controls
function startAutoPlay() {
    clearInterval(interval)
    if (orderedSlides.value.length < 2) return
    interval = setInterval(() => {
        if (autoPlay.value) {
            currentSlide.value = (currentSlide.value + 1) % orderedSlides.value.length
        }
    }, 3000)
}
function pauseSlider() { autoPlay.value = false }
function resumeSlider() { autoPlay.value = true }
</script>

<style scoped>
.transition-transform {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>