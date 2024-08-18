import { decodeJwt } from 'jose'

export const useUserStore = defineStore('user', {
  state: () => ({
    loading: false,
    user: {
      isLaggedIn: false,
      token: null,
      id: null,
      username: null,
    },
    admin: {
      isLaggedIn: false,
    },
  }),
  actions: {
    adminLogin(adminName, password) {
      if (adminName === 'myadmin' && password === 'myadmin') {
        this.user.id = null
        this.user.token = null
        this.user.isLaggedIn = false
        this.admin.isLaggedIn = true
        navigateTo('/admin')
      } else {
        return false
      }
    },
    adminLogout() {
      this.user.id = null
      this.user.token = null
      this.user.isLaggedIn = false
      this.admin.isLaggedIn = false
      return navigateTo({
        path: '/',
        query: {
          status: 'success',
          message: 'admin logged out',
        },
      })
    },
    async userLogin(username, password) {
      if (this.admin.isLaggedIn == true) {
        this.user.id = null
        this.user.token = null
        this.user.isLaggedIn = false
        this.admin.isLaggedIn = false
      }
      try {
        const config = useRuntimeConfig()
        this.loading = true
        const { token } = await $fetch(
          `${config.public.baseBackendURL}/auth/login`,
          {
            method: 'POST',
            body: JSON.stringify({
              username,
              password,
            }),
          }
        )

        const claims = decodeJwt(token)

        this.user.id = claims.sub
        this.user.username = claims.user
        this.user.token = token
        this.user.isLaggedIn = true

        this.loading = false
        return true
      } catch (error) {
        this.loading = false
        return false
      }
    },
    async addUser(formData) {
      if (formData.password !== formData.repeatPassword) {
        console.log(formData.password)
        console.log(formData.repeatPassword)
        return 'password error'
      }

      try {
        const config = useRuntimeConfig()
        this.loading = true
        const data = await $fetch(`${config.public.baseBackendURL}/users`, {
          method: 'POST',
          body: JSON.stringify(formData),
        })

        console.log('formData', formData)

        this.loading = false
        return data
      } catch (error) {
        this.loading = false
        return false
      }
    },
    userLogout() {
      this.user.token = null
      this.user.isLaggedIn = false
      navigateTo('/')
    },
    async deleteUser(userId) {
      try {
        const config = useRuntimeConfig()
        this.loading = true
        const data = await $fetch(
          `${config.public.baseBackendURL}/users/${userId}`,
          {
            method: 'DELETE',
          }
        )

        this.user = {
          isLaggedIn: false,
          token: null,
          id: null,
          username: null,
        }
        this.loading = false
        return true
      } catch (error) {
        this.loading = false
        return false
      }
    },
  },
})
