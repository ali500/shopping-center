export const useShowToast = () => {
  const toastValues = reactive({
    isShow: false,
    message: '',
    status: '',
  })

  function showToast(message, status, time) {
    toastValues.message = message
    toastValues.status = status
    toastValues.isShow = true

    setTimeout(() => {
      toastValues.isShow = false
    }, time)
  }

  return [toastValues, showToast]
}
