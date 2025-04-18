<template>
    <div>
        <section class="py-4 bg-white md:py-8">
            <form action="" class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <div class="flex-1 min-w-0 space-y-8">
                        <div class="space-y-4">
                            <h2 class="text-xl font-semibold text-gray-900">{{ $t('checkout.delivery_details') }}</h2>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <dynamic-inputs :label="t('form.full_name')"
                                        :placeholder="t('form.enter_your_full_name')" type="text" name="full_name"
                                        :rules="'required|alpha_spaces'" :required="true" />
                                </div>

                                <div>
                                    <dynamic-inputs :label="t('form.email')" :placeholder="t('form.enter_your_email')"
                                        type="email" name="email" :rules="'required|email'" :required="true" />
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
                                    <select id="city" name="city"
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
                                            class="w-full px-3 py-2 transition duration-300 border rounded-md focus:outline-none focus:border-slate-400" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <dynamic-inputs :label="t('form.full_address')"
                                    :placeholder="t('form.enter_your_full_address_here')" type="textarea"
                                    :required="true" :name="t('form.your_full_address')"
                                    :rules="'required|length:100'" />
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
                                                type="radio" name="payment-method" value="" checked
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
                                    <dd class="text-base font-medium text-gray-900">$8,094.00</dd>
                                </dl>

                                <dl class="flex items-center justify-between gap-4 py-3">
                                    <dt class="text-base font-bold text-gray-900">{{ $t('checkout.total') }}</dt>
                                    <dd class="text-base font-bold text-gray-900">$8,392.00</dd>
                                </dl>
                            </div>
                        </div>

                        <div class="space-y-3">
                            <button type="submit"
                                class="flex w-full justify-center px-5 py-2.5 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">{{
                                    $t('btn.place_order') }}</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup>
import dataBase from '@/assets/governorates.json'

const { t } = useI18n()
const route = useRoute()
const countriesData = ref(dataBase);

const selectedCountryData = computed(() => {
    const marketId = Number(route.params.market)
    return countriesData.value.find(country =>
        (marketId === 1 && country.country === 'Egypt') ||
        (marketId === 2 && country.country === 'KSA')
    ) || countriesData.value[0]
})

// 3. Image URL helper
const getFlagUrl = (flagPath) => {
    return new URL(`/public/${flagPath}`, import.meta.url).href
}
</script>