<template>
  <div>
    <div class="py-6 bg-white sm:py-8 lg:py-12">
      <div class="max-w-screen-lg px-4 mx-auto md:px-8">
        <div class="mb-6 sm:mb-10 lg:mb-16">
          <h2 class="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-6 lg:text-3xl">Your Cart</h2>
        </div>

        <div class="flex flex-col mb-5 sm:mb-8 sm:divide-y sm:border-t sm:border-b">
          <!-- product - start -->
          <div class="py-5 sm:py-8">
            <div class="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div class="sm:-my-2.5">
                <router-link to=""
                  class="relative block w-24 h-40 overflow-hidden bg-gray-100 rounded-lg group sm:h-56 sm:w-40">
                  <img
                    src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200"
                    loading="lazy" alt="Photo by Thái An"
                    class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
                </router-link>
              </div>

              <div class="flex flex-col justify-between flex-1">
                <div>
                  <router-link to=""
                    class="inline-block mb-1 text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Top</router-link>
                  <span class="block text-gray-500">Size: S</span>
                  <span class="block text-gray-500">Color: White</span>
                </div>

                <div>
                  <span class="flex items-center gap-1 text-sm text-gray-500">
                    <iconify-icon icon="material-symbols:check-circle-outline" width="20" height="20"
                      class="text-green-500"></iconify-icon>
                    In stock
                  </span>
                </div>
              </div>

              <div class="flex justify-between w-full pt-4 border-t sm:w-auto sm:border-none sm:pt-0">
                <div class="flex flex-col items-start gap-2">
                  <div class="flex w-20 h-12 overflow-hidden border rounded">
                    <input type="number" value="1"
                      class="w-full px-4 py-2 transition duration-100 outline-none ring-inset ring-indigo-300 focus:ring" />
                    <div class="flex flex-col border-l divide-y">
                      <button
                        class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none hover:bg-gray-100 active:bg-gray-200">
                        <iconify-icon icon="ic:baseline-plus" width="15" height="15"></iconify-icon>
                      </button>
                      <button
                        class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none hover:bg-gray-100 active:bg-gray-200">
                        <iconify-icon icon="ic:baseline-minus" width="15" height="15"></iconify-icon>
                      </button>
                    </div>
                  </div>

                  <button
                    class="text-sm font-semibold text-indigo-500 transition duration-100 select-none hover:text-indigo-600 active:text-indigo-700">Delete</button>
                </div>

                <div class="pt-3 ms-4 sm:pt-2 md:ms-8 lg:ms-16">
                  <span class="block font-bold text-gray-800 md:text-lg">$15.00</span>
                </div>
              </div>
            </div>
          </div>
          <!-- product - end -->

          <!-- product - start -->
          <div class="py-5 sm:py-8">
            <div class="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div class="sm:-my-2.5">
                <router-link to=""
                  class="relative block w-24 h-40 overflow-hidden bg-gray-100 rounded-lg group sm:h-56 sm:w-40">
                  <img src="https://images.unsplash.com/photo-1542327897-4141b355e20e?auto=format&q=75&fit=crop&w=200"
                    loading="lazy" alt="Photo by Jessica Radanavong"
                    class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
                </router-link>
              </div>

              <div class="flex flex-col justify-between flex-1">
                <div>
                  <router-link to=""
                    class="inline-block mb-1 text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Jacket</router-link>
                  <span class="block text-gray-500">Size: M</span>
                  <span class="block text-gray-500">Color: Black</span>
                </div>

                <div>
                  <span class="flex items-center gap-1 text-sm text-gray-500">
                    <iconify-icon icon="material-symbols:check-circle-outline" width="20" height="20"
                      class="text-green-500"></iconify-icon>
                    In stock
                  </span>
                </div>
              </div>

              <div class="flex justify-between w-full pt-4 border-t sm:w-auto sm:border-none sm:pt-0">
                <div class="flex flex-col items-start gap-2">
                  <div class="flex w-20 h-12 overflow-hidden border rounded">
                    <input type="number" value="1"
                      class="w-full px-4 py-2 transition duration-100 outline-none ring-inset ring-indigo-300 focus:ring" />
                    <div class="flex flex-col border-l divide-y">
                      <button
                        class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none hover:bg-gray-100 active:bg-gray-200">
                        <iconify-icon icon="ic:baseline-plus" width="15" height="15"></iconify-icon>
                      </button>
                      <button
                        class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none hover:bg-gray-100 active:bg-gray-200">
                        <iconify-icon icon="ic:baseline-minus" width="15" height="15"></iconify-icon>
                      </button>
                    </div>
                  </div>

                  <button
                    class="text-sm font-semibold text-indigo-500 transition duration-100 select-none hover:text-indigo-600 active:text-indigo-700">Delete</button>
                </div>

                <div class="pt-3 ms-4 sm:pt-2 md:ms-8 lg:ms-16">
                  <span class="block font-bold text-gray-800 md:text-lg">$65.00</span>
                </div>
              </div>
            </div>
          </div>
          <!-- product - end -->

          <!-- product - start -->
          <div class="py-5 sm:py-8">
            <div class="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
              <div class="sm:-my-2.5">
                <router-link to=""
                  class="relative block w-24 h-40 overflow-hidden bg-gray-100 rounded-lg group sm:h-56 sm:w-40">
                  <img
                    src="https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?auto=format&q=75&fit=crop&w=200"
                    loading="lazy" alt="Photo by vahid kanani"
                    class="object-cover object-center w-full h-full transition duration-200 group-hover:scale-110" />
                </router-link>
              </div>

              <div class="flex flex-col justify-between flex-1">
                <div>
                  <router-link to=""
                    class="inline-block mb-1 text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business
                    suit</router-link>
                  <span class="block text-gray-500">Size: S</span>
                  <span class="block text-gray-500">Color: Black</span>
                </div>

                <div>
                  <span class="flex items-center gap-1 text-sm text-gray-500">
                    <iconify-icon icon="material-symbols:check-circle-outline" width="20" height="20"
                      class="text-green-500"></iconify-icon>
                    In stock
                  </span>
                </div>
              </div>

              <div class="flex justify-between w-full pt-4 border-t sm:w-auto sm:border-none sm:pt-0">
                <div class="flex flex-col items-start gap-2">
                  <div class="flex w-20 h-12 overflow-hidden border rounded">
                    <input type="number" value="1"
                      class="w-full px-4 py-2 transition duration-100 outline-none ring-inset ring-indigo-300 focus:ring" />
                    <div class="flex flex-col border-l divide-y">
                      <button
                        class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none hover:bg-gray-100 active:bg-gray-200">
                        <iconify-icon icon="ic:baseline-plus" width="15" height="15"></iconify-icon>
                      </button>
                      <button
                        class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none hover:bg-gray-100 active:bg-gray-200">
                        <iconify-icon icon="ic:baseline-minus" width="15" height="15"></iconify-icon>
                      </button>
                    </div>
                  </div>

                  <button
                    class="text-sm font-semibold text-indigo-500 transition duration-100 select-none hover:text-indigo-600 active:text-indigo-700">Delete</button>
                </div>

                <div class="pt-3 ms-4 sm:pt-2 md:ms-8 lg:ms-16">
                  <span class="block font-bold text-gray-800 md:text-lg">$49.99</span>
                </div>
              </div>
            </div>
          </div>
          <!-- product - end -->
        </div>

        <!-- totals - start -->
        <div class="flex flex-col items-end gap-4">
          <div class="w-full p-4 bg-gray-100 rounded-lg sm:max-w-xs">
            <div class="space-y-1">
              <div class="flex justify-between gap-4 text-gray-500">
                <span>Subtotal</span>
                <span>$129.99</span>
              </div>

              <div class="flex justify-between gap-4 text-gray-500">
                <span>Shipping</span>
                <span>$4.99</span>
              </div>
            </div>

            <div class="pt-4 mt-4 border-t">
              <div class="flex items-start justify-between gap-4 text-gray-800">
                <span class="text-lg font-bold">Total</span>

                <span class="flex flex-col items-end">
                  <span class="text-lg font-bold">$134.98 USD</span>
                  <span class="text-sm text-gray-500">including VAT</span>
                </span>
              </div>
            </div>
          </div>

          <router-link to="/checkout" role="button"
            class="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Check
            out</router-link>
        </div>
        <!-- totals - end -->
      </div>
    </div>
  </div>
</template>

<script setup>

</script>