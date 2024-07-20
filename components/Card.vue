<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <figure>
      <img class="max-h-52" :src="image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ category }}</h2>
      <p>{{ title }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { image, title, category } = defineProps(['image', 'title', 'category'])
</script>
