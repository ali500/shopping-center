<template>
  <div class="container mx-auto">
    <div class="mt-5 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="product in store.products"
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :title="product.title"
        :category="product.category"
      />
    </div>
  </div>
</template>

<script setup>
const store = useProductStore()
const { status } = useAsyncData('products', () =>
  store.fetchProducts().then(() => true)
)
</script>
