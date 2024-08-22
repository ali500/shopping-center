<template>
  <form @submit.prevent="$emit('productSubmit', formData)">
    <!-- show image in edit mode -->
    <div v-show="isEditMode" class="w-24 mx-auto mb-5">
      <img :src="formData.image" alt="product image" />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <!-- Title -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Title</span>
        </div>
        <input
          v-model="formData.title"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </label>
      <!-- Price -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Price</span>
        </div>
        <input
          v-model="formData.price"
          min="0"
          step="0.01"
          type="number"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </label>
      <!-- Category -->
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Category</span>
        </div>
        <select v-model="formData.category" class="select select-bordered">
          <option disabled selected>Pick one</option>
          <option>men's clothing</option>
          <option>women's clothing</option>
          <option>jewelery</option>
          <option>electronics</option>
        </select>
      </label>
      <!-- Image Address -->
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Image Address</span>
        </div>
        <input
          v-model="formData.image"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </label>
    </div>
    <!-- Description -->
    <label class="form-control">
      <div class="label">
        <span class="label-text">Description</span>
      </div>
      <textarea
        v-model="formData.description"
        class="textarea textarea-bordered h-24"
        placeholder="Type here"
      ></textarea>
    </label>
    <div class="ms-auto w-fit mt-5">
      <button type="submit" class="btn btn-primary">
        {{ buttonName }}
        <span
          v-show="loading"
          class="loading loading-spinner loading-xs"
        ></span>
      </button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps(['buttonName', 'formData', 'loading', 'isEditMode'])
if (props.formData.category == '') {
  props.formData.category = 'Pick one'
}
</script>
