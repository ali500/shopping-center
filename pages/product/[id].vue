<template>
  <div class="container mx-auto">
    <div class="flex mt-5 flex-col gap-5 md:flex-row">
      <div class="basis-1/2 flex justify-center">
        <img
          v-if="status == 'success'"
          class="max-h-[600px]"
          :src="product?.image"
          alt="product-image"
        />
        <div v-else-if="status == 'pending'" class="skeleton h-56 w-full"></div>
      </div>
      <div v-if="status == 'success'" class="basis-1/2">
        <h1 class="text-2xl font-bold">{{ product?.title }}</h1>
        <p class="mt-5">
          Category:
          <NuxtLink to="/" class="ms-5 btn btn-sm">{{
            product?.category
          }}</NuxtLink>
        </p>
        <p class="mt-5">{{ product?.description }}</p>
        <p class="mt-5 text-xl">Price: {{ product?.price }}$</p>
        <button class="mt-5 btn btn-primary" @click="addToCart(product)">
          Add to Cart
        </button>
      </div>
      <div v-else-if="status == 'pending'" class="basis-1/2">
        <div class="flex w-full flex-col gap-4">
          <div class="skeleton h-32 w-full"></div>
          <div class="skeleton h-4 w-28"></div>
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- Toast -->
  <Toast v-show="isProductAdded">Product added to the cart.</Toast>
  <!-- end Toast -->
</template>

<script setup>
const id = useRoute().params.id
const isProductAdded = ref(false)
const { data: product, status } = useFetch(
  `https://fakestoreapi.com/products/${id}`
)
const store = useProductStore()

function addToCart(product) {
  if (product == null) {
    return
  }

  store.addToCart(product)

  isProductAdded.value = true
  setTimeout(() => {
    isProductAdded.value = false
  }, 3000)
}
</script>
