<template>
    <div>
        <!-- Mobile Filter Dialog -->
        <div class="relative lg:hidden">
            <button type="button" @click="mobileFiltersOpen = true"
                class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-50">
                <iconify-icon icon="heroicons:funnel-20-solid" width="20" height="20" />
                {{ $t('product.filter_options') }}
            </button>
        </div>

        <!-- Mobile filter dialog -->
        <TransitionRoot as="template" :show="mobileFiltersOpen">
            <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 z-40 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                        enter-from="translate-x-full" enter-to="translate-x-0"
                        leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                        leave-to="translate-x-full">
                        <DialogPanel
                            class="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl">
                            <div class="flex items-center justify-between px-4">
                                <h2 class="text-lg font-medium text-gray-900">{{ $t('product.filter_options') }}</h2>
                                <button type="button"
                                    class="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 hover:text-gray-500"
                                    @click="mobileFiltersOpen = false">
                                    <span class="sr-only">Close menu</span>
                                    <iconify-icon icon="heroicons:x-mark-20-solid" width="20" height="20" />
                                </button>
                            </div>

                            <!-- Filters -->
                            <form class="mt-4">
                                <div class="px-4 border-t border-gray-200">
                                    <!-- Search -->
                                    <div class="py-6">
                                        <div class="relative">
                                            <input type="text" :placeholder="$t('form.search_for_product')"
                                                v-model="searchQuery"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                            <iconify-icon icon="heroicons:magnifying-glass-20-solid"
                                                class="absolute text-gray-400 transform -translate-y-1/2 end-3 top-1/2"
                                                width="20" height="20" />
                                        </div>
                                    </div>

                                    <!-- Categories -->
                                    <div class="py-6 border-t border-gray-200">
                                        <h3 class="text-sm font-medium text-gray-900">{{ $t('product.categories') }}
                                        </h3>
                                        <div class="pt-3 space-y-4">
                                            <div class="flex items-center" v-for="category in categories"
                                                :key="category.id">
                                                <input :id="'category-' + category.id" :value="category.id"
                                                    type="checkbox" v-model="selectedCategories"
                                                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                                <label :for="'category-' + category.id"
                                                    class="text-sm text-gray-600 cursor-pointer ms-3">
                                                    {{ $i18n.locale === 'ar' ? category.titleAr : category.title }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Price Range -->
                                    <div class="py-6 border-t border-gray-200">
                                        <h3 class="text-sm font-medium text-gray-900">{{ $t('product.price_range') }}
                                        </h3>
                                        <div class="pt-3">
                                            <div class="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label class="text-sm text-gray-600">{{ $t('product.min_price')
                                                        }}</label>
                                                    <input type="number" v-model="priceRange.min" min="0"
                                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                                </div>
                                                <div>
                                                    <label class="text-sm text-gray-600">{{ $t('product.max_price')
                                                        }}</label>
                                                    <input type="number" v-model="priceRange.max" min="0"
                                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Desktop Filters -->
        <div class="hidden lg:block">
            <div class="sticky space-y-6 divide-y divide-gray-200 top-4">
                <!-- Search -->
                <div class="pb-6">
                    <div class="relative">
                        <input type="text" :placeholder="$t('form.search_for_product')" v-model="searchQuery"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <iconify-icon icon="heroicons:magnifying-glass-20-solid"
                            class="absolute text-gray-400 transform -translate-y-1/2 end-3 top-1/2" width="20"
                            height="20" />
                    </div>
                </div>

                <!-- Categories -->
                <div class="py-6">
                    <h3 class="text-sm font-medium text-gray-900">{{ $t('product.categories') }}</h3>
                    <div class="pt-3 space-y-4">
                        <div class="flex items-center" v-for="category in categories" :key="category.id">
                            <input :id="'desktop-category-' + category.id" :value="category.id" type="checkbox"
                                v-model="selectedCategories"
                                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <label :for="'desktop-category-' + category.id"
                                class="text-sm text-gray-600 cursor-pointer ms-3">
                                {{ $i18n.locale === 'ar' ? category.titleAr : category.title }}
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Price Range -->
                <div class="py-6">
                    <h3 class="text-sm font-medium text-gray-900">{{ $t('product.price_range') }}</h3>
                    <div class="pt-3">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="text-sm text-gray-600">{{ $t('product.min_price')
                                    }}</label>
                                <input type="number" v-model="priceRange.min" min="0"
                                    class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div>
                                <label class="text-sm text-gray-600">{{ $t('product.max_price')
                                    }}</label>
                                <input type="number" v-model="priceRange.max" min="0"
                                    class="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:filters'])

const categoriesStore = useCategoriesStore()
const mobileFiltersOpen = ref(false)
const searchQuery = ref('')
const selectedCategories = ref([])
const priceRange = ref({
    min: '',
    max: ''
})

const categories = computed(() => categoriesStore.categories)

// Watch for changes in filters and emit updates
watch([searchQuery, selectedCategories, priceRange], () => {
    emit('update:filters', {
        search: searchQuery.value,
        categories: selectedCategories.value,
        priceRange: {
            min: priceRange.value.min ? Number(priceRange.value.min) : null,
            max: priceRange.value.max ? Number(priceRange.value.max) : null
        }
    })
}, { deep: true })

onMounted(() => {
    categoriesStore.fetchCategories()
})
</script>