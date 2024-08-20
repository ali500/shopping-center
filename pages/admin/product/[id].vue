<template>
  <form @submit.prevent="submit">
    <div class="container mx-auto">
      <div
        v-if="status == 'success'"
        class="p-5 space-y-2 bg-base-100 rounded-lg w-full"
      >
        <AdminProductForm
          @productSubmit="submit"
          button-name="Edit Product"
          :formData="form"
          :loading="loading"
        />
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

const [toastValues, showToast] = useShowToast()
const [form, validate, setForm] = useFormData()
const config = useRuntimeConfig()
const productId = useRoute().params.id

const { data: productData, status } = useFetch(
  `${config.public.baseBackendURL}/products/${productId}`
)

watch(status, (newStatus, oldStatus) => {
  if (newStatus == 'success') {
    setForm(productData)
  }
})

const loading = ref(false)

async function submit(formData) {
  const isValid = validate(formData)

  if (isValid == false) {
    showToast('Please fill in the inputs', 'error', 5000)
    return
  }

  loading.value = true

  const data = await $fetch(
    `${config.public.baseBackendURL}/products/${productId}`,
    {
      method: 'PUT',
      body: JSON.stringify(formData),
    }
  )

  loading.value = false

  if (data) {
    showToast('Your product has been edited', 'success', 5000)
  } else {
    showToast('A problem has occurred', 'error', 5000)
  }
}
</script>
