<template>
  <div class="card bg-base-100 w-full shadow-xl">
    <figure class="bg-white rounded-b-xl">
      <img class="max-h-52" :src="image" :alt="title + '-image'" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ category }}</h2>
      <p>{{ title }}</p>
      <div class="card-actions justify-end">
        <NuxtLink :to="`/product/${id}`" class="btn btn-primary"
          >See Details</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['product'])
const { id, image, title, category } = toRefs(props.product)
</script>
