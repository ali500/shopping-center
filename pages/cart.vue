<template>
  <div class="container mx-auto">
    <p>cart page</p>
    <CartTable
      :addedProducts="store.addedProducts"
      :productCount="store.addedProducts.length"
      :removeItemOfCart="store.removeItemOfCart"
      :totalCartPrice="store.totalCartPrice"
    />
    <div class="mt-5 space-y-5">
      <p class="text-xl font-bold">Total Price: ${{ store.totalCartPrice }}</p>
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</template>

<script setup>
const store = useProductStore()
</script>
