<template>
    <div>
        <div class="max-w-3xl py-16 mx-auto sm:py-20">
            <p class="mb-10 text-3xl font-semibold text-center">{{ $t('footer.exchange_and_return_policy') }}</p>
            <div class="space-y-2">
                <div class="relative ps-6 group">
                    <div class="absolute w-2 h-2 bg-blue-500 rounded-full start-0 top-2"></div>
                    <p class="text-xl font-medium leading-relaxed text-gray-800">
                        {{ $t('footer.exchange_policy_point_one') }}
                    </p>
                    <div class="mt-4 border-b border-gray-100"></div>
                </div>

                <div class="relative ps-6 group">
                    <div class="absolute w-2 h-2 bg-blue-500 rounded-full start-0 top-2"></div>
                    <p class="flex items-center text-xl font-medium leading-relaxed text-gray-800">
                        {{ $t('footer.exchange_policy_point_two') }}
                        <a href="https://wa.me/201006312544" target="_blank" role="button">
                            <img src="/whatsapp.svg" alt="whatsapp-icon" class="w-[30px] h-[30px]">
                        </a>
                    </p>
                    <div class="mt-4 border-b border-gray-100"></div>
                </div>

                <div class="relative ps-6 group">
                    <div class="absolute w-2 h-2 bg-blue-500 rounded-full start-0 top-2"></div>
                    <p class="text-xl font-medium leading-relaxed text-gray-800">
                        {{ $t('footer.exchange_policy_point_three') }}
                    </p>
                </div>

                <div class="relative ps-6 group">
                    <div class="absolute w-2 h-2 bg-blue-500 rounded-full start-0 top-2"></div>
                    <p class="text-xl font-medium leading-relaxed text-gray-800">
                        {{ $t('footer.exchange_policy_point_four') }}
                    </p>
                </div>

                <div class="relative ps-6 group">
                    <div class="absolute w-2 h-2 bg-blue-500 rounded-full start-0 top-2"></div>
                    <p class="text-xl font-medium leading-relaxed text-gray-800">
                        {{ $t('footer.exchange_policy_point_five') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>