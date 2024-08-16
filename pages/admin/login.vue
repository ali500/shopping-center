<template>
  <div class="bg-admin-login">
    <div class="container mx-auto">
      <form @submit.prevent="submit">
        <div class="flex justify-center items-center h-screen">
          <div
            class="w-full md:w-1/2 lg:w-1/3 p-3 bg-gray-800 shadow-2xl border border-base-300 rounded-lg space-y-3"
          >
            <p class="text-2xl text-gray-400 text-center mb-7 mt-3">
              Admin Login
            </p>
            <div
              class="bg-neutral text-neutral-content p-5 rounded-lg font-mono"
            >
              <p>Hints:</p>
              <p>Username: myadmin</p>
              <p>Password: myadmin</p>
            </div>
            <label class="admin-input">
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
              <input
                ref="usernameInput"
                v-model.lazy="adminName"
                type="text"
                class="grow"
                placeholder="Admin name"
              />
            </label>
            <label class="admin-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                v-model.lazy="password"
                type="password"
                class="grow"
                placeholder="Password"
              />
            </label>
            <div class="flex justify-between">
              <NuxtLink to="/" class="btn btn-neutral">Home</NuxtLink>
              <button type="submit" class="btn btn-neutral">Admin Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
})

const userStore = useUserStore()

const usernameInput = ref(null)

onMounted(() => {
  usernameInput.value.focus()
})

const adminName = ref('')
const password = ref('')

function submit() {
  const result = userStore.adminLogin(adminName.value, password.value)

  if (result == false) {
    alert('Admin name or password is not currect')
  }
}
</script>

<style scoped>
.bg-admin-login {
  @apply bg-gradient-to-br from-gray-50 to-gray-200;
}

.admin-input {
  @apply input input-bordered bg-gray-700 text-gray-200 outline-yellow-400 flex items-center gap-2
  focus:outline-gray-600 focus-within:outline-gray-600;
}
</style>
