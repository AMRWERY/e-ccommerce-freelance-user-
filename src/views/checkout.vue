<template>
    <div>
        <!-- CheckoutSkeleton component -->
        <CheckoutSkeleton v-if="isLoading" />

        <section v-else class="py-4 bg-white md:py-8">
            <form action="" class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <div class="flex-1 min-w-0 space-y-8">
                        <div class="space-y-4">
                            <h2 class="text-xl font-semibold text-gray-900">{{ $t('checkout.delivery_details') }}</h2>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <dynamic-inputs :label="t('form.full_name')"
                                        :placeholder="t('form.enter_your_full_name')" type="text" name="full_name"
                                        :rules="'required|alpha_spaces'" :required="true"
                                        v-model="checkoutStore.deliveryDetails.name" />
                                </div>

                                <div>
                                    <dynamic-inputs :label="t('form.email')" :placeholder="t('form.enter_your_email')"
                                        type="email" name="email" :rules="'required|email'" :required="true"
                                        v-model="checkoutStore.deliveryDetails.email" />
                                </div>

                                <div>
                                    <div class="flex items-center gap-2 mb-1">
                                        <label for="country" class="block mb-1 text-sm font-medium text-gray-700">
                                            {{ $t('form.country') }}
                                        </label>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <img :src="getFlagUrl(selectedCountryData.flag)" class="w-6 h-4" />
                                        <select id="country" name="country"
                                            class="w-full px-3 py-2 transition duration-300 bg-transparent border rounded-md shadow-sm text-slate-700 border-slate-200 focus:outline-none focus:border-slate-400 ps-9"
                                            disabled>
                                            <option>
                                                {{ $i18n.locale === 'ar' ? selectedCountryData.countryAr :
                                                    selectedCountryData.country }}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Governorate Dropdown -->
                                <div>
                                    <div class="flex items-center gap-2 mb-1">
                                        <label for="city" class="block mb-1 text-sm font-medium text-gray-700">
                                            {{ $t('form.governorate') }}
                                        </label>
                                    </div>
                                    <select id="city" v-model="checkoutStore.deliveryDetails.city"
                                        class="w-full px-3 py-2 transition duration-300 bg-transparent border rounded-md shadow-sm text-slate-700 border-slate-200 focus:outline-none focus:border-slate-400 ps-9">
                                        <option v-for="governorate in selectedCountryData.governorates"
                                            :key="governorate.name" :value="governorate.name">
                                            {{ $i18n.locale === 'ar' ? governorate.nameAr : governorate.name }}
                                        </option>
                                    </select>
                                </div>

                                <!-- Phone Number Input -->
                                <div>
                                    <label class="block mb-1 text-sm font-medium text-gray-700">
                                        {{ $t('form.phone_number') }}
                                    </label>
                                    <div class="flex items-center gap-2">
                                        <span class="flex items-center px-3 py-2 bg-gray-100 border rounded-md">
                                            +{{ selectedCountryData.calling_code }}
                                        </span>
                                        <input type="tel" placeholder="XXX-XXXXXXX"
                                            v-model="checkoutStore.deliveryDetails.phoneNumber"
                                            class="w-full px-3 py-2 transition duration-300 border rounded-md focus:outline-none focus:border-slate-400" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <dynamic-inputs :label="t('form.full_address')"
                                    :placeholder="t('form.enter_your_full_address_here')" type="textarea"
                                    :required="true" :name="t('form.your_full_address')" :rules="'required'"
                                    v-model="checkoutStore.deliveryDetails.fullAddress" />
                            </div>
                        </div>

                        <div class="space-y-4">
                            <h3 class="text-xl font-semibold text-gray-900">{{ $t('checkout.payment') }}</h3>
                            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <!-- don't delete it 😁😂 -->
                                <!-- <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 ps-4">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="credit-card" aria-describedby="credit-card-text" type="radio"
                                                name="payment-method" value=""
                                                class="w-4 h-4 bg-white border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
                                                checked />
                                        </div>
                                        <div class="text-sm ms-4">
                                            <label for="credit-card" class="font-medium leading-none text-gray-900">
                                                {{ $t('checkout.credit_card') }}
                                            </label>
                                            <p id="credit-card-text" class="mt-1 text-xs font-normal text-gray-500">{{
                                                $t('checkout.pay_with_your_credit_card') }}</p>
                                        </div>
                                    </div>
                                </div> -->

                                <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 ps-4">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="pay-on-delivery" aria-describedby="pay-on-delivery-text"
                                                type="radio" value="" checked
                                                v-model="checkoutStore.deliveryDetails.paymentMethod"
                                                class="w-4 h-4 bg-white border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600" />
                                        </div>
                                        <div class="text-sm ms-4">
                                            <label for="pay-on-delivery"
                                                class="font-medium leading-none text-gray-900">{{
                                                    $t('checkout.payment_on_delivery') }}</label>
                                            <!-- don't delete it 😁😂 -->
                                            <!-- <p id="pay-on-delivery-text" class="mt-1 text-xs font-normal text-gray-500">
                                                +$15
                                                {{ $t('checkout.payment_processing_fee') }}</p> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full mt-6 space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                        <div class="flow-root">
                            <div class="-my-3 divide-y divide-gray-200">
                                <dl class="flex items-center justify-between gap-4 py-3">
                                    <dt class="text-base font-normal text-gray-500">{{ $t('checkout.subtotal') }}</dt>
                                    <dd class="text-base font-medium text-gray-900">{{
                                        formatCurrency(parseFloat(subTotalAmount) ||
                                            0,
                                            'currency', currencyLocale) }}</dd>
                                </dl>
                                <dl class="flex items-center justify-between gap-4 py-3">
                                    <dt class="text-base font-normal text-gray-500">{{ $t('checkout.savings') }}</dt>
                                    <dd class="text-base font-medium text-gray-900">{{ formatPercentage(averageDiscount)
                                    }}%</dd>
                                </dl>
                                <dl class="flex items-center justify-between gap-4 py-3">
                                    <dt class="text-base font-normal text-gray-500">{{ $t('checkout.shipping') }}</dt>
                                    <dd class="text-base font-medium text-gray-900">{{
                                        formatCurrency(parseFloat(totalShippingCost) || 0,
                                        'currency', currencyLocale) }}</dd>
                                </dl>
                                <dl class="flex items-center justify-between gap-4 py-3">
                                    <dt class="text-base font-bold text-gray-900">{{ $t('checkout.total') }}</dt>
                                    <dd class="text-base font-bold text-gray-900">{{
                                        formatCurrency(parseFloat(totalAmount) || 0,
                                            'currency', currencyLocale) }}</dd>
                                </dl>
                            </div>
                        </div>

                        <div class="space-y-3">
                            <button type="submit" :disabled="loading" @click="submitCheckoutForm"
                                class="flex w-full justify-center px-5 py-2.5 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                                v-if="!orderCompleted">
                                <div class="flex items-center justify-center" v-if="loading">
                                    <span class="text-center me-2">{{ $t('btn.please_wait') }}...</span>
                                    <iconify-icon icon="svg-spinners:90-ring" width="24" height="24"></iconify-icon>
                                </div>
                                <span v-else>{{ $t('btn.place_order') }}</span>
                            </button>
                            <router-link v-else :to="{ name: 'order-summary' }"
                                class="flex w-full justify-center px-5 py-2.5 text-sm font-semibold text-center text-white transition duration-100 bg-green-500 rounded-lg outline-none ring-green-300 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
                                {{ $t('btn.view_order_summary') }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </form>
        </section>

        <!-- dynamic-toast component -->
        <div class="fixed z-50 pointer-events-none bottom-5 start-5 w-96">
            <div class="pointer-events-auto">
                <dynamic-toast v-if="showToast" :message="toastMessage" :toastType="toastType" :duration="5000"
                    :toastIcon="toastIcon" @toastClosed="showToast = false" />
            </div>
        </div>
    </div>
</template>

<script setup>
import dataBase from '@/assets/governorates.json'

const { t } = useI18n()
const route = useRoute()
const cartStore = useCartStore();
const checkoutStore = useCheckoutStore();
const countriesData = ref(dataBase);
const { showToast, toastMessage, toastType, toastIcon, triggerToast } = useToast();
const loading = ref(false);
const isLoading = ref(true);
const orderCompleted = ref(false);

const { formatCurrency, formatPercentage } = useFormatCurrency();

const selectedCountryData = computed(() => {
    const marketId = Number(route.params.market)
    return countriesData.value.find(country =>
        (marketId === 1 && country.country === 'Egypt') ||
        (marketId === 2 && country.country === 'KSA')
    ) || countriesData.value[0]
})

const getFlagUrl = (flagPath) => {
    return new URL(`/public/${flagPath}`, import.meta.url).href
}

const subTotalAmount = computed(() => {
    return cartStore.cart.reduce((total, item) => {
        return total + (parseFloat(item.discountedPrice) * item.quantity);
    }, 0).toFixed(2);
});

const totalShippingCost = computed(() => {
    return cartStore.totalShippingCost;
});

const totalDiscount = computed(() => {
    return cartStore.cart.reduce((total, item) => {
        return total + (parseFloat(item.discount) * item.quantity);
    }, 0);
});

const averageDiscount = computed(() => {
    const totalItems = cartStore.cart.reduce((total, item) => total + item.quantity, 0);
    return totalItems > 0 ? (totalDiscount.value / totalItems).toFixed(2) : 0;
});

const totalAmount = computed(() => {
    const subtotal = parseFloat(subTotalAmount.value);
    const savingsAmount = (subtotal * (parseFloat(averageDiscount.value) / 100));
    // Calculate total with shipping cost
    const total = subtotal - savingsAmount + totalShippingCost.value;
    return total.toFixed(2);
});

onMounted(async () => {
    isLoading.value = true;
    try {
        await cartStore.fetchCart();
        await new Promise(resolve => setTimeout(resolve, 3000));
    } finally {
        isLoading.value = false;
    }
});

const generateGuestId = () => {
    return `guest_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
};

const submitCheckoutForm = () => {
    loading.value = true;
    const cartData = [...cartStore.cart];
    if (!cartData || cartData.length === 0) {
        loading.value = false;
        return;
    }
    const isEgyptMarket = Number(route.params.market) === 1;
    let uid = null;
    new Promise(resolve => setTimeout(resolve, 3000))
        .then(() => {
            if (!isEgyptMarket) { // KSA requires login
                const user = JSON.parse(localStorage.getItem("user"));
                if (!user?.uid) throw new Error(t('toast.auth_required'));
                uid = user.uid;
            } else { // Egypt can be guest
                uid = localStorage.getItem('guest_uid') || generateGuestId();
                localStorage.setItem('guest_uid', uid);
            }
            return checkoutStore.saveCheckoutData(cartData, uid, Number(route.params.market));
        })
        .then((orderId) => {
            localStorage.setItem("order-summary", JSON.stringify({
                ...cartData,
                orderId
            }));
            cartStore.clearCart();
            orderCompleted.value = true;
        })
        .then(() => {
            triggerToast({
                message: t('toast.payment_successful'),
                type: 'success',
                icon: 'mdi-check-circle',
            });
        })
        .catch((error) => {
            triggerToast({
                message: error.message || t('toast.checkout_error'),
                type: 'error',
                icon: 'mdi-alert-circle'
            });
        })
        .finally(() => {
            loading.value = false;
        });
};

watch(selectedCountryData, (newCountry) => {
    checkoutStore.deliveryDetails.country = newCountry.country
    // Set default governorate if needed
    if (newCountry.governorates.length > 0) {
        checkoutStore.deliveryDetails.city = newCountry.governorates[0].name
    }
}, { immediate: true })

//currency composable
const { currencyLocale } = useCurrencyLocale();
</script>