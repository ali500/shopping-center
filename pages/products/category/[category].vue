<template>
  <div class="container mx-auto">
    <Breadcrumbs :items="items" />
    <ProductsList :status="status" :products="store.products" />
  </div>
</template>

<script setup>
const category = useRoute().params.category

useHead({
  titleTemplate: '%s | ' + category,
})

const items = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/products',
    text: 'products',
  },
  {
    text: 'category',
  },
]

const store = useProductStore()

const { status } = useAsyncData('products', () =>
  store.fetchSpecificCategory(category).then(() => true)
)
</script>
