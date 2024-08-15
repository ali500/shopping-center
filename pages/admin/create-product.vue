<template>
  <form @submit.prevent="submit">
    <div class="container mx-auto">
      <div class="p-5 space-y-2 bg-base-100 rounded-lg w-2/3">
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
        <!-- <input type="file" class="file-input file-input-bordered w-full" /> -->
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
          placeholder="Product Price"
          class="input input-bordered w-full"
        />
        <div class="w-fit ms-auto">
          <button type="submit" class="btn btn-primary">
            Add Product
            <span
              v-show="loading"
              class="loading loading-spinner loading-xs"
            ></span>
          </button>
        </div>
        <Toast v-show="toustValues.isShow" :status="toustValues.status">
          {{ toustValues.message }}
        </Toast>
      </div>
    </div>
  </form>
</template>

<script setup>
definePageMeta({
  layout: 'admin-panel',
  middleware: 'admin-login-check',
})

const formData = reactive({
  title: '',
  description: '',
  category: '',
  image: '',
  price: '',
})

const toustValues = reactive({
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
    toustValues.message = 'Please fill in the inputs'
    toustValues.status = 'error'
    toustValues.isShow = true

    setTimeout(() => {
      toustValues.isShow = false
    }, 5000)
    return
  }

  loading.value = true

  const { status } = await useFetch('https://fakestoreapi.com/products', {
    method: 'POST',
    body: JSON.stringify(formData),
  })

  loading.value = false

  if (status.value == 'success') {
    toustValues.message = 'Your Product Added'
    toustValues.status = 'success'
    toustValues.isShow = true

    setTimeout(() => {
      toustValues.isShow = false
    }, 5000)
  }
}
</script>
