<template>
    <div>
        <div class="p-4 mx-auto font-sans lg:max-w-6xl md:max-w-4xl">
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                <div v-for="product in productStore.products" :key="product"
                    class="flex flex-col overflow-hidden bg-white rounded shadow-md cursor-pointer">
                    <div class="w-full h-64 overflow-hidden">
                        <img :src="product.imageUrl1" alt="product-img"
                            class="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105" />
                    </div>

                    <div class="flex flex-col flex-1 p-4">
                        <div class="flex-1">
                            <h5 class="text-sm font-bold text-gray-800 truncate sm:text-base">{{ $i18n.locale ===
                                'ar' ? product.titleAr :
                                product.title }}</h5>
                            <div class="flex flex-wrap items-center gap-2 mt-2">
                                <p class="text-sm font-bold text-gray-800 sm:text-base">
                                    {{ $n(parseFloat(product.discountedPrice), 'currency', currencyLocale || {
                                        style: 'currency',
                                        currency: 'USD'
                                    }) }}
                                </p>
                                <p class="text-sm text-gray-500 line-through sm:text-base" v-if="product.originalPrice">
                                    {{ $n(parseFloat(product.originalPrice), 'currency', currencyLocale || {
                                        style: 'currency', currency:
                                            'USD'
                                    }) }}
                                </p>
                                <div v-if="product.discount"
                                    class="flex items-center justify-center w-10 h-8 p-1 bg-green-200 rounded-full cursor-pointer ms-auto">
                                    <p class="font-medium">%{{ product.discount }}</p>
                                </div>
                            </div>
                        </div>
                        <button type="button"
                            class="w-full px-2 mt-4 font-semibold tracking-wide text-white bg-blue-600 border-none rounded outline-none ms-auto h-9 hover:bg-blue-700">Add
                            to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const productStore = useProductsStore()

onMounted(() => {
    productStore.fetchAllProducts()
})

//currency composable
const { currencyLocale } = useCurrencyLocale();
</script>