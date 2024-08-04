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
      <div class="flex flex-col gap-2 md:flex-row flex-wrap">
        <Card
          v-for="product in store.GetFourOfTheCheapestProducts"
          class="md:basis-[46%] lg:basis-[21%] grow"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :category="product.category"
          :image="product.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const store = useProductStore()
</script>
