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
                <NuxtLink
                  class="btn btn-sm btn-primary w-20"
                  :to="`/admin/product/${product.id}`"
                >
                  Edit
                </NuxtLink>
                <button
                  class="btn btn-sm btn-error w-20"
                  @click="deleteProductHandler(product.id)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else>products not found</div>
      <Toast v-show="toastValues.isShow" :status="toastValues.status">
        {{ toastValues.message }}
      </Toast>
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

const toastValues = reactive({
  isShow: false,
  message: '',
  status: '',
})

async function deleteProductHandler(productId) {
  const result = confirm('Do you want to delete this product?')

  if (!result) {
    return
  }

  const data = await $fetch(`https://fakestoreapi.com/products/${productId}`, {
    method: 'DELETE',
  })

  if (data) {
    toastValues.message = 'The product has been removed'
    toastValues.status = 'warning'
    toastValues.isShow = true

    setTimeout(() => {
      toastValues.isShow = false
    }, 5000)
  }
}
</script>
