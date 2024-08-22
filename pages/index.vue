<template>
  <Hero />
  <LatestProductsSection />
  <div class="container mx-auto">
    <div
      class="bg-neutral w-full h-24 rounded-lg px-10 flex items-center justify-between"
    >
      <p class="text-neutral-content">
        Click the button opposite to see all products
      </p>
      <NuxtLink to="/products" class="btn btn-neutral">See Products</NuxtLink>
    </div>
  </div>
  <CheapestProducts />
  <Toast v-show="toastValues.isShow" :status="toastValues.status">{{
    toastValues.message
  }}</Toast>
</template>

<script setup>
const [toastValues, showToast] = useShowToast()
const routeQuery = useRoute().query

if (routeQuery.status) {
  showToast(routeQuery.message, routeQuery.status, 5000)
}
</script>
