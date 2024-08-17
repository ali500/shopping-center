<template>
  <div class="overflow-x-auto mt-5">
    <table v-if="productCount != 0" class="table table-xs md:table-md">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Control</th>
        </tr>
      </thead>
      <tbody>
        <!-- row -->
        <tr v-for="(product, index) in props.addedProducts">
          <th>{{ index + 1 }}</th>
          <td>
            <NuxtLink :to="`/product/${product.id}`" class="link link-hover">{{
              product.title
            }}</NuxtLink>
          </td>
          <td>
            <input
              min="1"
              type="number"
              placeholder="quantity"
              class="input input-bordered w-28 input-sm"
              :value="product.quantity"
              @input="product.quantity = Number($event.target.value)"
            />
          </td>
          <td>${{ product.price }}</td>
          <td>
            <button
              class="btn btn-error btn-sm"
              @click="removeItemOfCart(index)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="flex flex-col gap-2 justify-center items-center text-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-16"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      <p>Cart is Empty</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  'addedProducts',
  'productCount',
  'removeItemOfCart',
  'totalCartPrice',
])
</script>
