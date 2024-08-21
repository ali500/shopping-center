<template>
  <section class="py-10">
    <div class="container mx-auto">
      <!-- header cheapest products -->
      <h2 class="py-3 mb-6 text-center">
        <span class="text-xl">Cheapest Products</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 ms-2 inline"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </h2>

      <!-- latest product container -->
      <div
        v-if="store.products.length != 0"
        class="flex flex-col gap-2 md:flex-row flex-wrap"
      >
        <Card
          v-for="product in store.GetFourOfTheCheapestProducts"
          class="md:basis-[46%] lg:basis-[21%] grow"
          :key="product.id"
          :product="product"
        />
      </div>
      <div v-else class="flex flex-col gap-2 md:flex-row flex-wrap">
        <div
          v-for="n in 4"
          class="flex md:basis-[46%] lg:basis-[21%] grow flex-col gap-4"
        >
          <div class="skeleton h-32 w-full"></div>
          <div class="skeleton h-4 w-28"></div>
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const store = useProductStore()
</script>
