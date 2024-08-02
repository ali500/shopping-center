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
  }),
  actions: {
    async userLogin(username, password) {
      try {
        this.loading = true
        const { token } = await $fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
          }),
        })

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
    async addUser(
      username,
      email,
      password,
      repeatPassword,
      name,
      address,
      phone
    ) {
      if (password !== repeatPassword) {
        console.log(password)
        console.log(repeatPassword)
        return 'password error'
      }

      const sendData = {
        email,
        username,
        password,
        name,
        address,
        phone,
      }

      try {
        this.loading = true
        const data = await $fetch('https://fakestoreapi.com/users', {
          method: 'POST',
          body: JSON.stringify(sendData),
        })

        console.log('sendData', sendData)

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
        this.loading = true
        const data = await $fetch(`https://fakestoreapi.com/users/${userId}`, {
          method: 'DELETE',
        })

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
