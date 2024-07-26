import { useUserStore } from '../stores/user'

const store = useUserStore()

export default defineNuxtRouteMiddleware((to, from) => {
  if (store.user.isLaggedIn == false) {
    return navigateTo('/login')
  }
})
