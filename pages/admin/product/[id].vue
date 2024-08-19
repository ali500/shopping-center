<template>
  <form @submit.prevent="submit">
    <div class="container mx-auto">
      <div
        v-if="status == 'success'"
        class="p-5 space-y-2 bg-base-100 rounded-lg w-2/3"
      >
        <input
          v-model.lazy="formData.title"
          type="text"
          placeholder="Product Title"
          class="input input-bordered w-full"
        />
        <textarea
          v-model.lazy="formData.description"
          class="textarea textarea-bordered w-full"
          placeholder="Product Description"
        ></textarea>
        <select
          v-model.lazy="formData.category"
          class="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>Select Category</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>
        <input
          v-model.lazy="formData.image"
          type="text"
          placeholder="Product Image Address"
          class="input input-bordered w-full"
        />
        <input
          v-model.lazy="formData.price"
          type="number"
          min="0"
          step="0.01"
          placeholder="Product Price"
          class="input input-bordered w-full"
        />
        <div class="w-fit ms-auto">
          <button type="submit" class="btn btn-primary">
            Edit Product
            <span
              v-show="loading"
              class="loading loading-spinner loading-xs"
            ></span>
          </button>
        </div>
        <Toast v-show="toastValues.isShow" :status="toastValues.status">
          {{ toastValues.message }}
        </Toast>
      </div>
      <div v-else-if="status == 'pending'">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
      <div v-else>product not found</div>
    </div>
  </form>
</template>

<script setup>
definePageMeta({
  layout: 'admin-panel',
  middleware: 'admin-login-check',
})

useHead({
  titleTemplate: '%s | Admin Edit Product',
})

const config = useRuntimeConfig()
const productId = useRoute().params.id

const { data: productData, status } = useFetch(
  `${config.public.baseBackendURL}/products/${productId}`
)

const formData = reactive({
  title: '',
  description: '',
  category: '',
  image: '',
  price: '',
})

watch(status, (newStatus, oldStatus) => {
  if (newStatus == 'success') {
    formData.title = productData.value.title
    formData.description = productData.value.description
    formData.category = productData.value.category
    formData.image = productData.value.image
    formData.price = productData.value.price
  }
})

const toastValues = reactive({
  isShow: false,
  message: '',
  status: '',
})
const loading = ref(false)

function validate() {
  if (
    formData.title == '' ||
    formData.description == '' ||
    formData.category == '' ||
    formData.image == '' ||
    formData.price == ''
  ) {
    return false
  } else {
    return true
  }
}

async function submit() {
  const isValid = validate()

  if (isValid == false) {
    toastValues.message = 'Please fill in the inputs'
    toastValues.status = 'error'
    toastValues.isShow = true

    setTimeout(() => {
      toastValues.isShow = false
    }, 5000)
    return
  }

  loading.value = true

  const { status } = await useFetch(
    `${config.public.baseBackendURL}/products`,
    {
      method: 'POST',
      body: JSON.stringify(formData),
    }
  )

  loading.value = false

  if (status.value == 'success') {
    toastValues.message = 'Your Product Edited'
    toastValues.status = 'success'
    toastValues.isShow = true

    setTimeout(() => {
      toastValues.isShow = false
    }, 5000)
  }
}
</script>
