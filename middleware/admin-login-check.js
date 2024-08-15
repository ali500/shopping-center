import { useUserStore } from '../stores/user'

const store = useUserStore()

export default defineNuxtRouteMiddleware((to, from) => {
  if (store.admin.isLaggedIn == false) {
    return navigateTo('/admin/login')
  }
})
