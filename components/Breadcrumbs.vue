<template>
  <div class="breadcrumbs text-sm mt-5">
    <ul>
      <template v-for="item in items">
        <li v-if="item.link">
          <NuxtLink :to="item.link">{{ item.text }}</NuxtLink>
        </li>
        <li v-else>{{ item.text }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
defineProps(['items'])
</script>
