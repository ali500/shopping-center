export const useProductStore = defineStore('product', {
  state: () => ({ loading: false, products: [], addedProducts: [] }),
  getters: {
    getProductsByTitle(state) {
      return (productTitle) => {
        return state.products.filter((product) => {
          const tmp = product.title.toLowerCase()
          return tmp.includes(productTitle.toLowerCase())
        })
      }
    },
    GetFourOfTheCheapestProducts(state) {
      const products = state.products
        .sort((a, b) => a.price - b.price)
        .slice(0, 4)

      return products
    },
    addedProductsCount(state) {
      let quantity = 0
      this.addedProducts.forEach((element) => {
        quantity += element.quantity
      })
      return quantity
    },
    totalCartPrice(state) {
      let price = 0
      this.addedProducts.forEach((element) => {
        price += element.price * element.quantity
      })
      return price
    },
  },
  actions: {
    async fetchProducts() {
      const config = useRuntimeConfig()
      this.loading = true
      const data = await $fetch(`${config.public.baseBackendURL}/products`)
      this.products = data
      this.loading = false
    },
    async fetchSpecificCategory(category) {
      const config = useRuntimeConfig()
      this.loading = true
      const data = await $fetch(
        `${config.public.baseBackendURL}/products/category/${category}`
      )
      this.products = data
      this.loading = false
    },
    addToCart(product) {
      const addedProduct = this.addedProducts.find(
        (element) => element.id == product.id
      )

      if (addedProduct) {
        addedProduct.quantity++
      } else {
        this.addedProducts.push({ ...product, quantity: 1 })
      }
    },
    removeItemOfCart(index) {
      this.addedProducts.splice(index, 1)
    },
    clearCart() {
      this.addedProducts = []
    },
  },
})
