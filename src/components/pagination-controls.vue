<template>
    <div>
        <nav aria-label="Page navigation">
            <ul class="inline-flex h-10 text-base -space-s-px">
                <li>
                    <button @click="$emit('page-change', currentPage - 1)" :disabled="currentPage === 1" :class="[
                        'flex items-center justify-center h-10 px-4 leading-tight border border-gray-300 ms-0 border-e-0 rounded-s-lg',
                        currentPage === 1
                            ? 'text-gray-300 bg-gray-100 cursor-not-allowed'
                            : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                    ]">
                        <iconify-icon icon="material-symbols-light:keyboard-arrow-left" width="24" height="24"
                            class="rtl:rotate-180"></iconify-icon>
                    </button>
                </li>

                <li v-for="page in displayedPages" :key="page">
                    <button @click="$emit('page-change', page)" :class="[
                        'flex items-center justify-center h-10 px-4 leading-tight border border-gray-300',
                        currentPage === page
                            ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                            : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                    ]">
                        {{ page }}
                    </button>
                </li>

                <li>
                    <button @click="$emit('page-change', currentPage + 1)" :disabled="currentPage === totalPages"
                        :class="[
                            'flex items-center justify-center h-10 px-4 leading-tight border border-gray-300 rounded-e-lg',
                            currentPage === totalPages
                                ? 'text-gray-300 bg-gray-100 cursor-not-allowed'
                                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                        ]">
                        <iconify-icon icon="material-symbols-light:keyboard-arrow-right" width="24" height="24"
                            class="rtl:rotate-180"></iconify-icon>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    }
})

defineEmits(['page-change'])

const displayedPages = computed(() => {
    const pages = []
    const maxDisplayedPages = 5

    if (props.totalPages <= maxDisplayedPages) {
        // If total pages is less than or equal to max display, show all pages
        for (let i = 1; i <= props.totalPages; i++) {
            pages.push(i)
        }
    } else {
        // Always include first page
        pages.push(1)

        let start = Math.max(2, props.currentPage - 1)
        let end = Math.min(props.totalPages - 1, start + 2)

        // Adjust start if we're near the end
        if (end === props.totalPages - 1) {
            start = Math.max(2, end - 2)
        }

        // Add ellipsis after first page if needed
        if (start > 2) {
            pages.push('...')
        }

        // Add middle pages
        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        // Add ellipsis before last page if needed
        if (end < props.totalPages - 1) {
            pages.push('...')
        }

        // Always include last page
        pages.push(props.totalPages)
    }

    return pages
})
</script>