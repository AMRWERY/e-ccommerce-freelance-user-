<template>
    <div>
        <div class="w-full max-w-3xl p-8 mx-auto">
            <div class="p-8 bg-white border rounded-lg shadow-md">
                <h1 class="mb-4 text-2xl font-bold text-gray-800">Checkout</h1>

                <!-- Shipping Address -->
                <div class="mb-6">
                    <h2 class="mb-2 text-xl font-semibold text-gray-700">Shipping Address</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="first-name" class="block mb-1 text-gray-700">First
                                Name</label>
                            <input type="text" id="first-name" class="w-full px-3 py-2 border rounded-lg">
                        </div>
                        <div>
                            <label for="last-name" class="block mb-1 text-gray-700">Last
                                Name</label>
                            <input type="text" id="last-name" class="w-full px-3 py-2 border rounded-lg">
                        </div>
                    </div>

                    <div class="mt-4">
                        <label for="address" class="block mb-1 text-gray-700">Address</label>
                        <input type="text" id="address" class="w-full px-3 py-2 border rounded-lg">
                    </div>

                    <div class="mt-4">
                        <label for="city" class="block mb-1 text-gray-700">City</label>
                        <input type="text" id="city" class="w-full px-3 py-2 border rounded-lg">
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label for="state" class="block mb-1 text-gray-700">State</label>
                            <input type="text" id="state" class="w-full px-3 py-2 border rounded-lg">
                        </div>
                        <div>
                            <label for="zip" class="block mb-1 text-gray-700">ZIP Code</label>
                            <input type="text" id="zip" class="w-full px-3 py-2 border rounded-lg">
                        </div>
                    </div>
                </div>

                <!-- Payment Information -->
                <div>
                    <h2 class="mb-2 text-xl font-semibold text-gray-700">Payment Information</h2>
                    <div class="mt-4">
                        <label for="card_number" class="block mb-1 text-gray-700">Card
                            Number</label>
                        <input type="text" id="card_number" class="w-full px-3 py-2 border rounded-lg">
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label for="exp_date" class="block mb-1 text-gray-700">Expiration
                                Date</label>
                            <input type="text" id="exp_date" class="w-full px-3 py-2 border rounded-lg">
                        </div>
                        <div>
                            <label for="cvv" class="block mb-1 text-gray-700">CVV</label>
                            <input type="text" id="cvv" class="w-full px-3 py-2 border rounded-lg">
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-8">
                    <router-link to="/order-summary" role="button"
                        class="px-4 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-700">Place
                        Order</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>