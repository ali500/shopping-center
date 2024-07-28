<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-100 w-full">
        <div class="flex-none lg:hidden">
          <label
            for="my-drawer-3"
            aria-label="open sidebar"
            class="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="mx-2 flex-1 px-2">Shopping Center</div>
        <div class="hidden flex-none lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>
              <NuxtLink to="/products"
                >Products<span
                  v-show="store.loading"
                  class="loading loading-spinner loading-xs"
                ></span
              ></NuxtLink>
            </li>
            <li v-show="userStore.user.isLaggedIn == false">
              <NuxtLink to="/login">Login</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-none">
          <!-- search button -->
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="space-y-2 overflow-y-scroll flex-nowrap max-h-96 w-72 md:w-96 dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
            >
              <!-- search input -->
              <li>
                <label class="input input-bordered flex items-center gap-2">
                  <input
                    v-model="searchValue"
                    type="text"
                    class="grow"
                    placeholder="Search"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </label>
              </li>
              <li v-for="product in productsFound">
                <NuxtLink :to="`/product/${product.id}`">{{
                  product.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- cart button -->
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="badge badge-sm indicator-item">{{
                  store.addedProductsCount
                }}</span>
              </div>
            </div>
            <div
              tabindex="0"
              class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div class="card-body">
                <span class="text-lg font-bold"
                  >{{ store.addedProductsCount }} Items</span
                >
                <span class="text-info"
                  >Total Price: ${{ store.totalCartPrice }}</span
                >
                <div class="card-actions">
                  <NuxtLink
                    to="/cart"
                    class="btn btn-primary btn-block"
                    active-class="cart-active-class"
                    >View cart</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- profile button -->
          <div
            v-show="userStore.user.isLaggedIn == true"
            class="dropdown dropdown-end"
          >
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div
                class="w-10 rounded-full flex justify-center items-center bg-base-content"
              >
                <p
                  class="flex justify-center items-center h-full text-base-100"
                >
                  P
                </p>
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NuxtLink to="/user/profile" class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </NuxtLink>
              </li>
              <li><NuxtLink to="/logout">Logout</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Page content here -->
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-3"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-100 min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const store = useProductStore()
const userStore = useUserStore()

const searchValue = ref(null)
const productsFound = ref([])

watch(searchValue, (newSearchValue, oldSearchBalue) => {
  if (newSearchValue != '') {
    productsFound.value = store.getProductsByTitle(newSearchValue)
  } else {
    productsFound.value = []
  }
})
</script>
