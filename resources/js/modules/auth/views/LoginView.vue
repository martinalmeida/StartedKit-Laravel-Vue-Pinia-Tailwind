<template>
    <h1>
        View login
    </h1>
    <h3>
        Valor de ejemplo Pinia🍍: {{ authStore.valExample }}
    </h3>

    <h1 class="text-3xl text-green-300 font-bold underline">
    Hello world!
  </h1>
</template>

<script setup>
import { useAuthStore } from '@/modules/auth/store/authStore.js';

const authStore = useAuthStore();
</script>