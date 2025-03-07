<template>
    <div>
        <div class="max-w-4xl p-6 mx-auto my-10 bg-white rounded-lg shadow-lg" id="e-ccommerce">
            <!-- Order Number -->
            <div class="flex items-center justify-between mb-12">
                <div>
                    <h2 class="text-2xl font-semibold text-gray-900">{{ $t('order_summary.order_summary') }}</h2>
                    <div class="flex items-center space-s-1">
                        <p class="mt-1 text-sm text-gray-500">
                        </p>
                        {{ $t('order_summary.order_number') }} <span class="font-semibold text-gray-900">#13432</span>
                    </div>
                </div>
                <button @click="downloadPDF"
                    class="flex items-center px-4 py-4 text-blue-700 border border-blue-700 rounded-full hover:bg-blue-100">
                    <iconify-icon icon="material-symbols:print" width="20" height="20"></iconify-icon>
                </button>
            </div>

            <!-- Product Details -->
            <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b" v-for="item in products" :key="item">
                <div class="col-span-3">
                    <img :src="item.img" crossOrigin="anonymous" class="object-fill w-auto h-20 rounded-lg shadow-md" />
                </div>
                <div class="col-span-6">
                    <p class="text-lg font-semibold text-gray-900">{{ item.title }}</p>
                    <div class="flex items-center space-s-2">
                        <p class="text-2xl font-semibold text-gray-700">${{ item.price }}</p>
                    </div>
                </div>
                <div class="col-span-3 ms-auto">
                    <p class="flex items-center text-lg font-semibold text-gray-900">{{ $t('order_summary.quantity') }}
                        <span
                            class="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-700 rounded-md bg-indigo-50 ring-1 ring-indigo-700/10 ring-inset ms-1">{{
                                item.qty }}</span>
                    </p>
                </div>
            </div>

            <!-- Subtotal Section -->
            <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
                <div class="col-span-8">
                    <dt class="text-sm font-medium text-gray-500">{{ $t('order_summary.subtotal') }}</dt>
                </div>
                <div class="col-span-4 text-end">
                    <dd class="text-sm font-medium text-gray-900">$2000</dd>
                </div>
            </div>

            <!-- Savings Section -->
            <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
                <div class="col-span-8">
                    <dt class="text-sm font-medium text-gray-500">{{ $t('order_summary.savings') }}</dt>
                </div>
                <div class="col-span-4 text-end">
                    <dd class="text-sm font-medium text-green-500">%17</dd>
                </div>
            </div>

            <!-- Total Section -->
            <div class="grid grid-cols-12 gap-6">
                <div class="col-span-8 font-semibold text-gray-900">
                    <dt class="text-xl">{{ $t('order_summary.total') }}</dt>
                </div>
                <div class="col-span-4 text-end">
                    <dd class="text-xl font-semibold text-gray-900">$1800</dd>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import html2pdf from 'html2pdf.js'

const localeStore = useLocaleStore()

const products = ref([
    { title: 'Premium Quaility Dress', price: '36.00', img: 'https://i.ibb.co/L039qbN/Rectangle-10.png', qty: '2' },
    { title: 'Premium Quaility Dress', price: '36.00', img: 'https://i.ibb.co/L039qbN/Rectangle-10.png', qty: '4' }
])

// pdf file
const downloadPDF = () => {
    if (html2pdf) {
        const orderSummary = document.getElementById('e-ccommerce');
        const pdfContent = orderSummary.cloneNode(true);
        const downloadButton = pdfContent.querySelector('button');
        if (downloadButton) {
            downloadButton.remove();
        }
        if (localeStore.locale === 'ar') {
            pdfContent.setAttribute('dir', 'rtl');
        } else {
            pdfContent.setAttribute('dir', 'ltr');
        }
        const titleElement = document.createElement('h1');
        titleElement.textContent = 'e-ccommerce';
        titleElement.className = 'text-5xl font-bold text-blue-700 text-center mb-10';
        pdfContent.prepend(titleElement);
        const options = {
            margin: 10,
            filename: 'e-ccommerce.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 4, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
        html2pdf().from(pdfContent).set(options).save();
    }
};
</script>