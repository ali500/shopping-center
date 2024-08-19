<template>
  <div class="container mx-auto">
    <template v-if="status == 'success'">
      <div class="overflow-x-auto">
        <table class="hidden lg:table bg-base-100">
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
        <table class="table lg:hidden table-xs bg-base-100">
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
                <div class="flex flex-col gap-2">
                  <NuxtLink
                    class="btn btn-sm btn-primary"
                    :to="`/admin/product/${product.id}`"
                  >
                    Edit
                  </NuxtLink>
                  <button
                    class="btn btn-sm btn-error"
                    @click="deleteProductHandler(product.id)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </template>
    <div v-else-if="status == 'pending'">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    <div v-else>products not found</div>
    <Toast v-show="toastValues.isShow" :status="toastValues.status">
      {{ toastValues.message }}
    </Toast>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin-panel',
  middleware: 'admin-login-check',
})

useHead({
  titleTemplate: '%s | Admin',
})

const config = useRuntimeConfig()

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

  const data = await $fetch(
    `${config.public.baseBackendURL}/products/${productId}`,
    {
      method: 'DELETE',
    }
  )

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
