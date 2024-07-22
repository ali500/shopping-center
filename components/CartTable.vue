<template>
  <div class="overflow-x-auto">
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
    <div v-else>Cart is Empty</div>
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
