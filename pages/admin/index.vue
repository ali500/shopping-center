<template>
  <div class="container mx-auto">
    <div class="overflow-x-auto">
      <table v-if="status != 'error'" class="table bg-base-100">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row -->
          <tr v-for="(product, index) in store.products">
            <th>{{ index + 1 }}</th>
            <td>
              <img :src="product.image" alt="product-image" class="w-24" />
            </td>
            <td class="max-w-lg">{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-primary w-20">Edit</button>
                <button class="btn btn-sm btn-error w-20">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>products not found</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin-panel',
  middleware: 'admin-login-check',
})

const store = useProductStore()
const { status } = useAsyncData('products', () =>
  store.fetchProducts().then(() => true)
)
</script>
