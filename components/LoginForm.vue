<template>
  <form @submit.prevent="submit">
    <div
      class="form-control mx-5 md:w-1/2 lg:w-1/3 md:mx-auto space-y-3 border border-base-300 bg-base-200 p-5 rounded-lg"
    >
      <p>Hints:</p>
      <p>Username: mor_2314</p>
      <p>Password: 83r5^_</p>
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
        <input ref="username" type="text" class="grow" placeholder="Username" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
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
          ref="password"
          type="password"
          class="grow"
          placeholder="Password"
        />
      </label>
      <button type="submit" class="btn btn-primary min-w-24 ms-auto">
        Login
        <span
          v-show="store.loading"
          class="loading loading-spinner loading-sm"
        ></span>
      </button>
    </div>
  </form>
</template>

<script setup>
const store = useUserStore()

const username = ref(null)
const password = ref(null)

async function submit() {
  const result = await store.userLogin(
    username.value.value,
    password.value.value
  )

  if (result == true) {
    return navigateTo('/')
  } else {
    alert('user not found')
  }
}
</script>
