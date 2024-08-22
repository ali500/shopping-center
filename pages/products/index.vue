<template>
  <div class="container mx-auto">
    <Breadcrumbs :items="items" />
    <ProductsList :status="status" :products="store.products" />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s | Products',
})

const items = [
  {
    link: '/',
    text: 'Home',
  },
  {
    text: 'products',
  },
]

const store = useProductStore()

const { status } = useAsyncData('products', () =>
  store.fetchProducts().then(() => true)
)
</script>
