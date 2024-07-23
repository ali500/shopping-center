<template>
  <div class="container mx-auto">
    <CartTable
      :addedProducts="store.addedProducts"
      :productCount="store.addedProducts.length"
      :removeItemOfCart="store.removeItemOfCart"
      :totalCartPrice="store.totalCartPrice"
    />
    <div v-if="store.addedProducts.length != 0" class="mt-5 space-y-5">
      <p class="text-xl font-bold">Total Price: ${{ store.totalCartPrice }}</p>
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</template>

<script setup>
const store = useProductStore()
</script>
