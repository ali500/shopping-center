<template>
  <div class="container mx-auto">
    <div class="p-5 space-y-2 bg-base-100 rounded-lg w-full">
      <AdminProductForm
        @productSubmit="submit"
        button-name="Add Product"
        :form-data="form"
        :loading="loading"
      />
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

useHead({
  titleTemplate: '%s | Admin Create Product',
})

const [toastValues, showToast] = useShowToast()
const [form, validate] = useFormData()
const config = useRuntimeConfig()

const loading = ref(false)

async function submit(formData) {
  const isValid = validate(formData)

  if (isValid == false) {
    showToast('Please fill in the inputs', 'error', 5000)
    return
  }

  loading.value = true

  const data = await $fetch(`${config.public.baseBackendURL}/products`, {
    method: 'POST',
    body: JSON.stringify(formData),
  })

  loading.value = false

  if (data) {
    showToast('Your Product Added', 'success', 5000)
  } else {
    showToast('A problem has occurred', 'error', 5000)
  }
}
</script>
