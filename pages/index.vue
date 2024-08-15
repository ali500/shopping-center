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
  <Toast v-show="isShowToast" :status="routeQuery.status">{{
    routeQuery.message
  }}</Toast>
</template>

<script setup>
const isShowToast = ref(false)
const routeQuery = useRoute().query
console.log(routeQuery.status)

if (routeQuery.status == 'success') {
  isShowToast.value = true
  setTimeout(() => {
    isShowToast.value = false
  }, 5000)
}
</script>
