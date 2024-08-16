<template>
  <div class="mt-5 container mx-auto">
    <div
      class="p-5 mx-5 md:mx-auto md:w-2/3 lg:w-1/2 bg-base-200 border border-base-300 rounded-lg"
    >
      <div class="space-y-2">
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
            />
          </svg>
          <p>username:</p>
          <input
            type="text"
            class="grow"
            :disabled="CanUsernameBeChanged == false"
            :value="userStore.user.username"
          />
        </label>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Do you want to change your username?</span>
            <input
              type="checkbox"
              v-model="CanUsernameBeChanged"
              class="checkbox checkbox-primary"
            />
          </label>
        </div>
        <button class="btn btn-sm btn-primary">Change Username</button>
      </div>
      <hr class="my-5" />
      <div class="space-y-2">
        <label class="input input-bordered flex items-center gap-2">
          <p>old password:</p>
          <input type="password" class="grow" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <p>new password:</p>
          <input type="password" class="grow" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <p>repeat new password:</p>
          <input type="password" class="grow" />
        </label>
        <button class="btn btn-sm btn-primary">Change Password</button>
      </div>
      <hr class="mt-5" />
      <div class="mt-5 space-y-3">
        <p class="text-sm">Do you want to delete your account?</p>
        <button
          class="btn btn-sm btn-error"
          @click="deleteUserAccount(userStore.user.id)"
        >
          Delete Your Account
          <span
            v-show="userStore.loading"
            class="loading loading-spinner loading-sm"
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'user-login-check',
})

const CanUsernameBeChanged = ref(false)
const userStore = useUserStore()

async function deleteUserAccount(userId) {
  const confirmResult = confirm('Are you sure you want to delete your account?')

  if (confirmResult == false) {
    return
  }

  const result = await userStore.deleteUser(userId)

  if (result == true) {
    navigateTo({
      path: '/',
      query: {
        status: 'warning',
        message: 'Your account has been deleted',
      },
    })
  } else {
    alert('a problem has occurred')
  }
}
</script>
