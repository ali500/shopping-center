<template>
  <div class="container mx-auto">
    <div
      v-if="status == 'success'"
      class="mt-5 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <Card
        v-for="product in store.products"
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :title="product.title"
        :category="product.category"
      />
    </div>
    <div
      v-else-if="status == 'pending'"
      class="mt-5 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <div v-for="n in [1, 2, 3]" class="flex w-full flex-col gap-4">
        <div class="skeleton h-32 w-full"></div>
        <div class="skeleton h-4 w-28"></div>
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useProductStore()
const { status } = useAsyncData('products', () =>
  store.fetchProducts().then(() => true)
)
</script>
