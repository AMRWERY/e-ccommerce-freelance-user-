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
                                    <label for="your_name" class="block mb-2 text-sm font-medium text-gray-900">Your
                                        name</label>
                                    <input type="text" id="your_name"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="Bonnie Green" required />
                                </div>

                                <div>
                                    <label for="your_email" class="block mb-2 text-sm font-medium text-gray-900">Your
                                        email*</label>
                                    <input type="email" id="your_email"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="name@flowbite.com" required />
                                </div>

                                <div>
                                    <div class="flex items-center gap-2 mb-2">
                                        <label for="select-country-input-3"
                                            class="block text-sm font-medium text-gray-900">Country*</label>
                                    </div>
                                    <select id="select-country-input-3"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                                        <option selected>United States</option>
                                        <option value="AS">Australia</option>
                                        <option value="FR">France</option>
                                        <option value="ES">Spain</option>
                                        <option value="UK">United Kingdom</option>
                                    </select>
                                </div>

                                <div>
                                    <div class="flex items-center gap-2 mb-2">
                                        <label for="select-city-input-3"
                                            class="block text-sm font-medium text-gray-900">City*</label>
                                    </div>
                                    <select id="select-city-input-3"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                                        <option selected>San Francisco</option>
                                        <option value="NY">New York</option>
                                        <option value="LA">Los Angeles</option>
                                        <option value="CH">Chicago</option>
                                        <option value="HU">Houston</option>
                                    </select>
                                </div>

                                <div>
                                    <label for="phone-input-3" class="block mb-2 text-sm font-medium text-gray-900">
                                        Phone Number*</label>
                                    <div class="flex items-center">
                                        <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3"
                                            class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
                                            type="button">
                                            <svg fill="none" aria-hidden="true" class="w-4 h-4 me-2"
                                                viewBox="0 0 20 15">
                                                <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                                <mask id="a" style="mask-type:luminance" width="20" height="15" x="0"
                                                    y="0" maskUnits="userSpaceOnUse">
                                                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                                </mask>
                                                <g mask="url(#a)">
                                                    <path fill="#D02F44" fill-rule="evenodd"
                                                        d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                                        clip-rule="evenodd" />
                                                    <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                                                    <g filter="url(#filter0_d_343_121520)">
                                                        <path fill="url(#paint0_linear_343_121520)" fill-rule="evenodd"
                                                            d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                                            clip-rule="evenodd" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933"
                                                        y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#fff" />
                                                        <stop offset="1" stop-color="#F0F0F0" />
                                                    </linearGradient>
                                                    <filter id="filter0_d_343_121520" width="6.533" height="5.667"
                                                        x=".933" y="1.433" color-interpolation-filters="sRGB"
                                                        filterUnits="userSpaceOnUse">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" result="hardAlpha"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                        <feOffset dy="1" />
                                                        <feColorMatrix
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                        <feBlend in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_343_121520" />
                                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520"
                                                            result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            +1
                                            <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div class="relative w-full">
                                            <input type="text" id="phone-input"
                                                class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"
                                                required />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input type="email" id="email"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="name@flowbite.com" required />
                                </div>

                                <div>
                                    <label for="company_name"
                                        class="block mb-2 text-sm font-medium text-gray-900">Company name</label>
                                    <input type="text" id="company_name"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="Flowbite LLC" required />
                                </div>

                                <div>
                                    <label for="vat_number" class="block mb-2 text-sm font-medium text-gray-900">VAT
                                        number</label>
                                    <input type="text" id="vat_number"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                        placeholder="DE42313253" required />
                                </div>
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

</script>