export const useFormData = () => {
  const form = reactive({
    title: '',
    description: '',
    category: '',
    image: '',
    price: '',
  })

  function setForm(productData) {
    form.title = productData.value.title
    form.description = productData.value.description
    form.category = productData.value.category
    form.image = productData.value.image
    form.price = productData.value.price
  }

  function validate(formData) {
    console.log('formData', formData)

    if (
      formData.title == '' ||
      formData.description == '' ||
      formData.category == '' ||
      formData.category == 'Pick one' ||
      formData.image == '' ||
      formData.price == ''
    ) {
      return false
    } else {
      return true
    }
  }

  return [form, validate, setForm]
}
