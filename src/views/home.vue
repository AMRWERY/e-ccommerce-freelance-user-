<template>
  <div>
    <div class="py-6 bg-white sm:py-8 lg:py-12">
      <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div class="flex items-end justify-between gap-4 mb-6">
          <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Collections</h2>

          <router-link to=""
            class="inline-block px-4 py-2 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-white border rounded-lg outline-none ring-indigo-300 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show
            more</router-link>
        </div>

        <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          <!-- product - start -->
          <div>
            <router-link to="" class="block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3">
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy" alt="Photo by Austin Wade"
                class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
            </router-link>

            <div class="flex flex-col">
              <span class="text-gray-500">Men</span>
              <router-link to=""
                class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business
                Causual</router-link>
            </div>
          </div>
          <!-- product - end -->

          <!-- product - start -->
          <div>
            <router-link to="" class="block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3">
              <img
                src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy" alt="Photo by engin akyurt"
                class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
            </router-link>

            <div class="flex flex-col">
              <span class="text-gray-500">Women</span>
              <router-link to=""
                class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Summer
                Season</router-link>
            </div>
          </div>
          <!-- product - end -->

          <!-- product - start -->
          <div>
            <router-link to="" class="block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3">
              <img
                src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy" alt="Photo by Austin Wade"
                class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
            </router-link>

            <div class="flex flex-col">
              <span class="text-gray-500">Men</span>
              <router-link to=""
                class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Streetwear</router-link>
            </div>
          </div>
          <!-- product - end -->

          <!-- product - start -->
          <div>
            <router-link to="" class="block mb-2 overflow-hidden bg-gray-100 rounded-lg shadow-lg group h-96 lg:mb-3">
              <img src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
                loading="lazy" alt="Photo by Austin Wade"
                class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
            </router-link>

            <div class="flex flex-col">
              <span class="text-gray-500">Women</span>
              <router-link to=""
                class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Sale</router-link>
            </div>
          </div>
          <!-- product - end -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>