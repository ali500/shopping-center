export const useProductStore = defineStore('product', {
  state: () => ({ loading: false, products: [], addedProducts: [] }),
  getters: {
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
      this.loading = true
      const data = await $fetch('https://fakestoreapi.com/products')
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
    removeItemOfCart(productId) {
      this.addedProducts.splice(productId, 1)
    },
    clearCart() {
      this.addedProducts = []
    },
  },
})
