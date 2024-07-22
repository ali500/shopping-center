<template>
  <div class="container mx-auto">
    <p>{{ $route.params.id }}</p>
    <p>Title: {{ product?.title }}</p>
    <p>pending: {{ status }}</p>

    <div class="flex flex-col gap-5 md:flex-row">
      <div class="basis-1/2 flex justify-center">
        <img class="max-h-[600px]" :src="product?.image" alt="product-image" />
      </div>
      <div class="basis-1/2">
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
    </div>
  </div>
</template>

<script setup>
const id = useRoute().params.id
const { data: product, status } = useFetch(
  `https://fakestoreapi.com/products/${id}`
)
const store = useProductStore()

function addToCart(product) {
  if (product == null) {
    return
  }

  store.addToCart(product)
}
</script>
