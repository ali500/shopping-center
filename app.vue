<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const productStore = useProductStore()
const { status } = useAsyncData('products', () =>
  productStore.fetchProducts().then(() => true)
)
</script>

<style>
.router-link-active {
  @apply bg-base-200;
}
</style>
