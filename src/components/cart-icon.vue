<template>
    <div>
        <router-link :to="{ name: 'shopping-cart', params: { market: currentMarket } }" class="flex items-center space-s-1">
            <div class="relative">
                <span v-if="cartStore.cart.length > 0"
                    class="absolute top-0 inline-flex items-center justify-center w-5 h-5 -mt-2 text-xs text-white bg-red-600 rounded-full -me-3 end-1">
                    {{ cartStore.cart.length }}
                </span>
                <button type="button" class="relative mt-1.5 text-gray-100 bg-gray-800 rounded-full hover:text-white">
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">View cart</span>
                    <iconify-icon icon="material-symbols:shopping-cart-outline-sharp" width="25"
                        height="25"></iconify-icon>
                </button>
            </div>
        </router-link>
    </div>
</template>

<script setup>
const cartStore = useCartStore();
const route = useRoute();

const currentMarket = computed(() => Number(route.params.market) || 1);

onMounted(() => {
    cartStore.fetchCart()
})
</script>