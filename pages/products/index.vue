<template>
  <div class="container mx-auto">
    <ProductsList :status="status" :products="store.products" />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s | Products',
})

const store = useProductStore()

const { status } = useAsyncData('products', () =>
  store.fetchProducts().then(() => true)
)
</script>
