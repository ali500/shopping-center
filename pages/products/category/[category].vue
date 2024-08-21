<template>
  <div class="container mx-auto">
    <ProductsList :status="status" :products="store.products" />
  </div>
</template>

<script setup>
const category = useRoute().params.category

useHead({
  titleTemplate: '%s | ' + category,
})

const store = useProductStore()

const { status } = useAsyncData('products', () =>
  store.fetchSpecificCategory(category).then(() => true)
)
</script>
