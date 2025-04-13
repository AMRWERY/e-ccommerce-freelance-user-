<template>
    <div>
        <!-- login with google button (ksa only) -->
        <button @click="googleLogin" v-if="!isAuthenticated"
            class="h-12 px-6 transition duration-300 border-2 border-gray-300 rounded-full group hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
            <div class="relative flex items-center justify-center space-s-2">
                <iconify-icon icon="devicon:google" width="20" height="20" class="start-0"></iconify-icon>
                <span
                    class="block font-semibold tracking-wide text-white transition duration-300 w-max group-hover:text-blue-400 sm:text-base">
                    {{ $t('btn.login_with_google') }}
                </span>
            </div>
        </button>
    </div>
</template>

<script setup>
const authStore = useAuthStore()

const googleLogin = async () => {
    try {
        await authStore.loginWithGoogle();
    } catch (error) {
        return error
    }
};

onMounted(() => {
    authStore.init();
});

const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>