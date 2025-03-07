<template>
    <div>
        <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
            <div class="px-2 mx-auto max-w-8xl sm:px-6 lg:px-10">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 flex items-center start-0 sm:hidden">
                        <!-- Mobile menu button-->
                        <DisclosureButton
                            class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Open main menu</span>
                            <iconify-icon icon="mdi:menu" width="24" height="24" aria-hidden="true"
                                v-if="!open"></iconify-icon>
                            <iconify-icon icon="mdi:close" width="24" height="24" v-else></iconify-icon>
                        </DisclosureButton>
                    </div>

                    <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                        <div class="flex items-center shrink-0">
                            <router-link to="/"
                                class="w-auto h-8 text-2xl font-semibold text-white me-3">e-ccomemrce</router-link>
                        </div>
                        <div class="hidden sm:ms-6 sm:block">
                            <div class="flex items-center space-s-4">
                                <router-link to="/"
                                    class="px-3 py-2 text-sm font-medium text-gray-100 capitalize rounded-md hover:bg-gray-700 hover:text-white"
                                    active-class="!bg-gray-900 !text-white" exact>
                                    {{ $t('layout.home') }}
                                </router-link>
                                <router-link to="/products"
                                    class="px-3 py-2 text-sm font-medium text-gray-100 capitalize rounded-md hover:bg-gray-700 hover:text-white"
                                    active-class="!bg-gray-900 !text-white" exact>
                                    {{ $t('layout.all_products') }}
                                </router-link>
                                <router-link to="/hot-deals"
                                    class="flex items-center px-3 py-2 text-sm font-medium text-gray-100 capitalize rounded-md hover:bg-gray-700 hover:text-white"
                                    active-class="!bg-gray-900 !text-white" exact>
                                    {{ $t('layout.hot_deals') }}
                                    <iconify-icon icon="material-symbols:local-fire-department" width="24" height="24"
                                        class="text-red-500 ms-1"></iconify-icon>
                                </router-link>
                                <router-link to="/contact-us"
                                    class="px-3 py-2 text-sm font-medium text-gray-100 capitalize rounded-md hover:bg-gray-700 hover:text-white"
                                    active-class="!bg-gray-900 !text-white" exact>
                                    {{ $t('layout.contact_us') }}
                                </router-link>
                                <a href="https://e-ccommerce-freelance-admin.vercel.app/#/register-new-market"
                                    class="flex items-center px-3 py-2 text-sm font-medium text-gray-100 capitalize rounded-md hover:bg-gray-700 hover:text-white"
                                    active-class="!bg-gray-900 !text-white" target="_blank" rel="noopener noreferrer">
                                    {{ $t('layout.market_with_us') }}
                                    <iconify-icon icon="material-symbols:new-releases" width="24" height="24"
                                        class="text-red-500 ms-1">
                                    </iconify-icon>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        class="absolute inset-y-0 flex items-center pe-2 end-0 sm:static sm:inset-auto sm:ms-6 sm:pe-0 space-s-4">

                        <!-- login with google button (ksa only) -->
                        <div v-if="selected.id === 2" class="hidden md:flex">
                            <button
                                class="h-12 px-6 transition duration-300 border-2 border-gray-300 rounded-full group hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                <div class="relative flex items-center justify-center space-s-4">
                                    <iconify-icon icon="devicon:google" width="20" height="20"
                                        class="start-0"></iconify-icon>
                                    <span
                                        class="block text-sm font-semibold tracking-wide text-white transition duration-300 w-max group-hover:text-blue-400 sm:text-base">
                                        Login with Google
                                    </span>
                                </div>
                            </button>
                        </div>

                        <!-- cart -->
                        <router-link to="/shopping-cart" class="flex items-center space-s-1">
                            <div class="relative">
                                <span
                                    class="absolute top-0 inline-flex items-center justify-center w-5 h-5 -mt-2 text-xs text-white bg-red-600 rounded-full -me-3 end-2">
                                    0
                                </span>
                                <button type="button"
                                    class="relative mt-1.5 text-gray-100 bg-gray-800 rounded-full hover:text-white">
                                    <span class="absolute -inset-1.5" />
                                    <span class="sr-only">View cart</span>
                                    <iconify-icon icon="material-symbols:shopping-cart-outline-sharp" width="25"
                                        height="25" aria-hidden="true"></iconify-icon>
                                </button>
                            </div>
                        </router-link>

                        <div class="hidden md:flex">
                            <!-- toggle locales -->
                            <router-link to="" class="font-semibold text-white me-4" role="button"
                                v-if="localeStore.isRTL">
                                <span class="[&>svg]:w-5" @click="setLocale('en')">
                                    En
                                </span>
                            </router-link>
                            <router-link to="" class="font-semibold text-white me-4" role="button" v-else>
                                <span class="[&>svg]:w-5" @click="setLocale('ar')">
                                    العربية
                                </span>
                            </router-link>
                        </div>

                        <!-- country dropdown -->
                        <Listbox as="div" v-model="selected" class="hidden md:flex">
                            <div class="relative">
                                <ListboxButton
                                    class="flex w-[150px] cursor-default items-center justify-between rounded-md bg-white py-1.5 ps-3 pe-2 text-start text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                    <span class="flex items-center gap-3">
                                        <img :src="selected.avatar" alt="" class="w-5 h-5 rounded-full shrink-0" />
                                        <span class="block truncate">{{ selected.name }}</span>
                                    </span>
                                    <iconify-icon icon="line-md:chevron-small-down" width="24" height="24"
                                        class="w-5 h-5 text-gray-500" aria-hidden="true" />
                                </ListboxButton>

                                <transition leave-active-class="transition duration-100 ease-in"
                                    leave-from-class="opacity-100" leave-to-class="opacity-0">
                                    <ListboxOptions
                                        class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
                                        <ListboxOption as="template" v-for="country in countries" :key="country.id"
                                            :value="country" v-slot="{ active, selected: isSelected }">
                                            <li
                                                :class="[active ? 'bg-indigo-600 text-white outline-hidden' : 'text-gray-900', 'relative cursor-default py-2 pe-9 ps-3 select-none']">
                                                <div class="flex items-center">
                                                    <img :src="country.avatar" alt=""
                                                        class="rounded-full size-5 shrink-0" />
                                                    <span
                                                        :class="[isSelected ? 'font-semibold' : 'font-normal', 'ms-3 block truncate']">{{
                                                            country.name }}</span>
                                                </div>

                                                <span v-if="isSelected"
                                                    :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 end-0 flex items-center pe-4']">
                                                    <iconify-icon icon="material-symbols:check-small-rounded" width="24"
                                                        height="24" aria-hidden="true"></iconify-icon>
                                                </span>
                                            </li>
                                        </ListboxOption>
                                    </ListboxOptions>
                                </transition>
                            </div>
                        </Listbox>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="sm:hidden" v-slot="{ close }">
                <div class="px-2 pt-2 pb-3 space-y-1.5">
                    <DisclosureButton as="div" class="w-full" @click="close">
                        <router-link to="/" exact
                            class="block w-full px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-700 hover:text-white"
                            active-class="text-white bg-gray-900">
                            {{ $t('layout.home') }}
                        </router-link>
                    </DisclosureButton>

                    <DisclosureButton as="div" class="w-full" @click="close">
                        <router-link to="/products" exact
                            class="block w-full px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-700 hover:text-white"
                            active-class="text-white bg-gray-900">
                            {{ $t('layout.all_products') }}
                        </router-link>
                    </DisclosureButton>

                    <DisclosureButton as="div" class="w-full" @click="close">
                        <router-link to="/hot-deals" exact
                            class="flex items-center w-full px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-700 hover:text-white"
                            active-class="text-white bg-gray-900">
                            {{ $t('layout.hot_deals') }}
                            <iconify-icon icon="material-symbols:local-fire-department" width="24" height="24"
                                class="text-red-500 ms-1">
                            </iconify-icon>
                        </router-link>
                    </DisclosureButton>

                    <DisclosureButton as="div" class="w-full" @click="close">
                        <router-link to="/contact-us" exact
                            class="block w-full px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-700 hover:text-white"
                            active-class="text-white bg-gray-900">
                            {{ $t('layout.contact_us') }}
                        </router-link>
                    </DisclosureButton>
                    <DisclosureButton as="div" class="w-full" @click="close">
                        <a href="https://e-ccommerce-freelance-admin.vercel.app/#/register-new-market"
                            class="block w-full px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-700 hover:text-white"
                            target="_blank" rel="noopener noreferrer">
                            {{ $t('layout.market_with_us') }}
                            <iconify-icon icon="material-symbols:new-releases" width="24" height="24"
                                class="text-red-500 ms-1">
                            </iconify-icon>
                        </a>
                    </DisclosureButton>

                    <div class="pt-2 border-t border-gray-700">
                        <!-- country dropdown -->
                        <DisclosureButton as="div"
                            class="flex items-center justify-between w-full px-3 py-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                            <Listbox as="div" v-model="selected">
                                <div class="relative">
                                    <ListboxButton
                                        class="flex w-[150px] cursor-default items-center justify-between rounded-md bg-white py-1.5 ps-3 pe-2 text-start text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        <span class="flex items-center gap-3">
                                            <img :src="selected.avatar" alt="" class="w-5 h-5 rounded-full shrink-0" />
                                            <span class="block truncate">{{ selected.name }}</span>
                                        </span>
                                        <iconify-icon icon="line-md:chevron-small-down" width="24" height="24"
                                            class="w-5 h-5 text-gray-500" aria-hidden="true" />
                                    </ListboxButton>

                                    <transition leave-active-class="transition duration-100 ease-in"
                                        leave-from-class="opacity-100" leave-to-class="opacity-0">
                                        <ListboxOptions
                                            class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
                                            <ListboxOption as="template" v-for="country in countries" :key="country.id"
                                                :value="country" v-slot="{ active, selected: isSelected }">
                                                <li
                                                    :class="[active ? 'bg-indigo-600 text-white outline-hidden' : 'text-gray-900', 'relative cursor-default py-2 pe-9 ps-3 select-none']">
                                                    <div class="flex items-center">
                                                        <img :src="country.avatar" alt=""
                                                            class="rounded-full size-5 shrink-0" />
                                                        <span
                                                            :class="[isSelected ? 'font-semibold' : 'font-normal', 'ms-3 block truncate']">{{
                                                                country.name }}</span>
                                                    </div>

                                                    <span v-if="isSelected"
                                                        :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 end-0 flex items-center pe-4']">
                                                        <iconify-icon icon="material-symbols:check-small-rounded"
                                                            width="24" height="24" aria-hidden="true"></iconify-icon>
                                                    </span>
                                                </li>
                                            </ListboxOption>
                                        </ListboxOptions>
                                    </transition>
                                </div>
                            </Listbox>
                        </DisclosureButton>

                        <div class="flex justify-between pt-2 border-t border-gray-700">
                            <!-- login with google button (ksa only) -->
                            <button v-if="selected.id === 2"
                                class="h-12 px-6 transition duration-300 border-2 border-gray-300 rounded-full group hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                <div class="relative flex items-center justify-center space-s-2">
                                    <iconify-icon icon="devicon:google" width="20" height="20"
                                        class="start-0"></iconify-icon>
                                    <span
                                        class="block font-semibold tracking-wide text-white transition duration-300 w-max group-hover:text-blue-400 sm:text-base">
                                        Login with Google
                                    </span>
                                </div>
                            </button>

                            <!-- Locale Toggle -->
                            <DisclosureButton as="button" @click="localeStore.isRTL ? setLocale('en') : setLocale('ar')"
                                class="px-3 py-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                                {{ localeStore.isRTL ? 'English' : 'العربية' }}
                            </DisclosureButton>
                        </div>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    </div>
</template>

<script setup>
const { locale, t } = useI18n();
const localeStore = useLocaleStore();

onMounted(() => {
    locale.value = localeStore.locale;
});

const setLocale = (value) => {
    locale.value = value;
    localeStore.updateLocale(value);
};

computed(() => {
    const storedLocale = localeStore.locale;
    setLocale(storedLocale);
});

const countries = computed(() => [
    {
        id: 1,
        name: t('countries_menu.egypt'),
        avatar: 'https://justfields.com/storage/projects/7M5rV059/egypt-flag.jpg',
    },
    {
        id: 2,
        name: t('countries_menu.ksa'),
        avatar: 'https://justfields.com/storage/projects/7M5rV059/ksa-flag.jpg',
    },
]);

const selected = computed({
    get() {
        const savedId = parseInt(localStorage.getItem('selectedCountryId'));
        return countries.value.find(c => c.id === savedId) || countries.value[0];
    },
    set(value) {
        localStorage.setItem('selectedCountryId', value.id.toString());
        setTimeout(() => window.location.reload(), 1000);
    }
});
</script>