<template>
  <div
    v-if="status == 'success'"
    class="mt-5 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  >
    <Card v-for="product in products" :key="product.id" :product="product" />
  </div>
  <div
    v-else
    class="mt-5 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  >
    <div v-for="n in 3" class="flex w-full flex-col gap-4">
      <div class="skeleton h-32 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['status', 'products'])
</script>
