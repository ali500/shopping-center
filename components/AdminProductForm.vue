<template>
  <form @submit.prevent="$emit('productSubmit', formData)">
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
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Category</span>
        </div>
        <input
          v-model="formData.category"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
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
const props = defineProps(['buttonName', 'formData', 'loading'])
</script>
