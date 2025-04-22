<template>
    <div>
        <!-- OrderSummarySkeleton component -->
        <OrderSummarySkeleton v-if="loading" />

        <div v-else class="max-w-4xl p-6 mx-auto my-10 bg-white rounded-lg shadow-lg" id="e-ccommerce">
            <!-- Order Number -->
            <div class="flex items-center justify-between mb-12" v-if="orderItems.length > 0">
                <div>
                    <h2 class="text-2xl font-semibold text-gray-900">{{ $t('order_summary.order_summary') }}</h2>
                    <div class="flex items-center space-s-1">
                        <p class="mt-1 text-sm text-gray-500">
                            {{ $t('order_summary.order_number') }}
                            <span class="font-semibold text-gray-900">{{ orderData?.orderId || '-' }}</span>
                        </p>
                    </div>
                </div>
                <button @click="downloadPDF"
                    class="flex items-center px-4 py-4 text-blue-700 border border-blue-700 rounded-full hover:bg-blue-100">
                    <iconify-icon icon="material-symbols:print" width="20" height="20"></iconify-icon>
                </button>
            </div>

            <!-- Product Details -->
            <div v-if="orderItems.length > 0">
                <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b" v-for="item in orderItems"
                    :key="item.productId">
                    <div class="flex col-span-9">
                        <img :src="item.imageUrl1" crossOrigin="anonymous"
                            class="object-cover w-[100px] h-20 rounded-lg shadow-md" />
                        <div class="ms-6">
                            <p class="text-lg font-semibold text-gray-900">{{ $i18n.locale === 'ar' ? item.titleAr :
                                item.title }}</p>
                            <div class="flex items-center space-s-2">
                                <p class="text-2xl font-semibold text-gray-700">{{ formatCurrency(item.discountedPrice)
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3 ms-auto">
                        <p class="flex items-center text-lg font-semibold text-gray-900">{{ $t('order_summary.quantity')
                        }}
                            <span
                                class="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-700 rounded-md bg-indigo-50 ring-1 ring-indigo-700/10 ring-inset ms-1">
                                {{ item.quantity }}
                            </span>
                        </p>
                    </div>
                </div>

                <!-- Subtotal Section -->
                <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
                    <div class="col-span-8">
                        <dt class="text-sm font-medium text-gray-500">{{ $t('order_summary.subtotal') }}</dt>
                    </div>
                    <div class="col-span-4 text-end">
                        <dd class="text-sm font-medium text-gray-900">{{ formatCurrency(subTotalAmount) }}</dd>
                    </div>
                </div>

                <!-- Savings Section -->
                <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
                    <div class="col-span-8">
                        <dt class="text-sm font-medium text-gray-500">{{ $t('order_summary.savings') }}</dt>
                    </div>
                    <div class="col-span-4 text-end">
                        <dd class="text-sm font-medium text-green-500">{{ formatPercentage(averageDiscount) }}%</dd>
                    </div>
                </div>

                <!-- Shipping Section -->
                <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
                    <div class="col-span-8">
                        <dt class="text-sm font-medium text-gray-500">{{ $t('order_summary.shipping') }}</dt>
                    </div>
                    <div class="col-span-4 text-end">
                        <dd class="text-sm font-medium text-gray-900">{{ formatCurrency(totalShippingCost) }}</dd>
                    </div>
                </div>

                <!-- Total Section -->
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-8 font-semibold text-gray-900">
                        <dt class="text-xl">{{ $t('order_summary.total') }}</dt>
                    </div>
                    <div class="col-span-4 text-end">
                        <dd class="text-xl font-semibold text-gray-900">{{ formatCurrency(totalAmount) }}</dd>
                    </div>
                </div>
            </div>

            <!-- No Order Data Message -->
            <div v-else class="py-8 text-center">
                <p class="text-gray-500">{{ $t('order_summary.no_order_data') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import html2pdf from 'html2pdf.js'

const localeStore = useLocaleStore()
const cartStore = useCartStore();
const { t, locale } = useI18n()
const { formatCurrency, formatPercentage } = useFormatCurrency();
const loading = ref(true)
const orderData = ref(null)

const orderItems = computed(() => {
    if (!orderData.value) return [];
    // Convert object with numeric keys to array
    return Object.values(orderData.value).filter(item => item.productId);
});

const subTotalAmount = computed(() => {
    return orderItems.value.reduce((total, item) => {
        return total + (parseFloat(item.discountedPrice) * item.quantity);
    }, 0).toFixed(2);
});

const totalDiscount = computed(() => {
    return orderItems.value.reduce((total, item) => {
        const discount = parseFloat(item.discount);
        const quantity = item.quantity;
        if (isNaN(discount) || isNaN(quantity)) return total;
        return total + (discount * quantity);
    }, 0);
});

const totalShippingCost = computed(() => {
    return orderItems.value.reduce((total, item) => {
        return total + (parseFloat(item.shippingCost || 0) * item.quantity);
    }, 0);
});

const averageDiscount = computed(() => {
    const totalItems = orderItems.value.reduce((total, item) => total + item.quantity, 0);
    return totalItems > 0 ? (totalDiscount.value / totalItems).toFixed(2) : 0;
});

const totalAmount = computed(() => {
    const subtotal = parseFloat(subTotalAmount.value);
    const discount = parseFloat(averageDiscount.value) || 0;
    const savingsAmount = (subtotal * (discount / 100));
    const shipping = parseFloat(totalShippingCost.value) || 0;
    return (subtotal - savingsAmount + shipping).toFixed(2);
});

onMounted(() => {
    const savedOrderData = localStorage.getItem('order-summary');
    if (savedOrderData) {
        try {
            orderData.value = JSON.parse(savedOrderData);
        } catch (error) {
            // console.error('Error parsing order data:', error);
        }
    }
    setTimeout(() => {
        loading.value = false;
    }, 1000);
});

const preloadImages = () => {
    return Promise.all(
        Array.from(document.querySelectorAll('img'))
            .map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });
            })
    );
};

const replaceFirebaseUrlsWithDataUrls = async (element) => {
    const images = element.querySelectorAll('img');
    return Promise.all(Array.from(images).map(async (img) => {
        try {
            const response = await fetch(img.src);
            const blob = await response.blob();
            const dataUrl = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            });
            img.src = dataUrl;
        } catch (error) {
            console.error('Error converting image:', error);
            img.remove();
        }
    }));
};

// pdf file
const downloadPDF = async () => {
    if (!html2pdf || !orderData.value) return;
    const orderSummary = document.getElementById('e-ccommerce');
    if (!orderSummary) return;
    const pdfContent = orderSummary.cloneNode(true);
    const downloadButton = pdfContent.querySelector('button');
    if (downloadButton) {
        downloadButton.remove();
    }
    pdfContent.setAttribute('dir', localeStore.locale === 'ar' ? 'rtl' : 'ltr');
    await replaceFirebaseUrlsWithDataUrls(pdfContent);
    const titleElement = document.createElement('h1');
    titleElement.textContent = 'e-ccommerce';
    titleElement.className = 'text-5xl font-bold text-blue-700 text-center mb-10';
    pdfContent.prepend(titleElement);
    const options = {
        margin: 10,
        filename: `order-${orderData.value.orderId || 'summary'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    try {
        await html2pdf().from(pdfContent).set(options).save();
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
};
</script>