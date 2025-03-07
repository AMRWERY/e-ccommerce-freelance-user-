<template>
    <div>
        <div class="py-6 bg-white sm:py-8 lg:py-12">
            <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
                <!-- text - start -->
                <div class="mb-10 md:mb-16">
                    <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-6 lg:text-3xl">Get in touch</h2>

                    <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">This is a section of some
                        simple filler text, also known as placeholder text. It shares some characteristics of a real
                        written text but is random or otherwise generated.</p>
                </div>
                <!-- text - end -->

                <!-- form - start -->
                <form class="grid max-w-screen-md gap-4 mx-auto sm:grid-cols-2">
                    <div>
                        <label for="first-name" class="inline-block mb-2 text-sm text-gray-800 sm:text-base">First
                            name*</label>
                        <input name="first-name"
                            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
                    </div>

                    <div>
                        <label for="last-name" class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Last
                            name*</label>
                        <input name="last-name"
                            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
                    </div>

                    <div class="sm:col-span-2">
                        <label for="company"
                            class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Company</label>
                        <input name="company"
                            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
                    </div>

                    <div class="sm:col-span-2">
                        <label for="email" class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Email*</label>
                        <input name="email"
                            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
                    </div>

                    <div class="sm:col-span-2">
                        <label for="subject"
                            class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Subject*</label>
                        <input name="subject"
                            class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring" />
                    </div>

                    <div class="sm:col-span-2">
                        <label for="message"
                            class="inline-block mb-2 text-sm text-gray-800 sm:text-base">Message*</label>
                        <textarea name="message"
                            class="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded outline-none bg-gray-50 ring-indigo-300 focus:ring"></textarea>
                    </div>

                    <div class="flex items-center justify-between sm:col-span-2">
                        <button
                            class="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

                        <span class="text-sm text-gray-500">*Required</span>
                    </div>

                    <p class="text-xs text-gray-400">By signing up to our newsletter you agree to our
                        <router-link to=""
                            class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy
                            Policy</router-link>.
                    </p>
                </form>
                <!-- form - end -->
            </div>
        </div>
    </div>
</template>

<script setup>

</script>