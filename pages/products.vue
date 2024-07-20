<template>
  <div class="container mx-auto">
    <div class="mt-5 grid gap-10 grid-cols-1 md:grid-cols-3">
      <Card
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :category="product.category"
      />
    </div>
  </div>
</template>

<script setup>
const { data: products } = useFetch('https://fakestoreapi.com/products')
</script>
