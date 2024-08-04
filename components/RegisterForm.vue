<template>
  <form @submit.prevent="submit">
    <div
      class="form-control mx-5 md:w-1/2 lg:w-1/3 md:mx-auto space-y-3 border border-base-300 bg-base-200 p-5 rounded-lg"
    >
      <div>
        <img
          class="w-28 mx-auto"
          src="~/assets/icons/register-icon.png"
          alt="register icon"
        />
      </div>
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
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
          />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
          />
        </svg>
        <input ref="email" type="email" class="grow" placeholder="Email" />
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
          ref="repeatPassword"
          type="password"
          class="grow"
          placeholder="Repeat password"
        />
      </label>
      <hr />
      <input
        :ref="
          (el) => {
            name.firstname = el
          }
        "
        type="text"
        placeholder="firstname"
        class="input input-bordered w-full"
      />
      <input
        :ref="
          (el) => {
            name.lastname = el
          }
        "
        type="text"
        placeholder="lastname"
        class="input input-bordered w-full"
      />
      <hr />
      <input
        :ref="
          (el) => {
            address.city = el
          }
        "
        type="text"
        placeholder="city"
        class="input input-bordered w-full"
      />
      <input
        :ref="
          (el) => {
            address.street = el
          }
        "
        type="text"
        placeholder="street"
        class="input input-bordered w-full"
      />
      <input
        :ref="
          (el) => {
            address.number = el
          }
        "
        type="text"
        placeholder="number"
        class="input input-bordered w-full"
      />
      <input
        :ref="
          (el) => {
            address.zipcode = el
          }
        "
        type="text"
        placeholder="zip-code"
        class="input input-bordered w-full"
      />
      <input
        :ref="
          (el) => {
            address.geolocation.lat = el
          }
        "
        type="text"
        placeholder="geolocation: lat"
        class="input input-bordered w-full"
      />
      <input
        :ref="
          (el) => {
            address.geolocation.long = el
          }
        "
        type="text"
        placeholder="geolocation: long"
        class="input input-bordered w-full"
      />
      <input
        ref="phone"
        type="text"
        placeholder="phone"
        class="input input-bordered w-full"
      />

      <button type="submit" class="btn btn-primary min-w-24 ms-auto">
        Register
        <span
          v-show="userStore.loading"
          class="loading loading-spinner loading-sm"
        ></span>
      </button>
    </div>
  </form>
</template>

<script setup>
const userStore = useUserStore()

const username = ref(null)
const email = ref(null)
const password = ref(null)
const repeatPassword = ref(null)
const name = reactive({ firstname: null, lastname: null })
const address = reactive({
  city: null,
  street: null,
  number: null,
  zipcode: null,
  geolocation: {
    lat: null,
    long: null,
  },
})
const phone = ref(null)

async function submit() {
  const result = await userStore.addUser(
    username.value.value,
    email.value.value,
    password.value.value,
    repeatPassword.value.value,
    {
      firstname: name.firstname.value,
      lastname: name.lastname.value,
    },
    {
      city: address.city.value,
      street: address.street.value,
      number: address.number.value,
      zipcode: address.zipcode.value,
      geolocation: {
        lat: address.geolocation.lat.value,
        long: address.geolocation.long.value,
      },
    },
    phone.value.value
  )

  if (result === 'password error') {
    alert('please check your password')
  }

  if (result == false) {
    alert('An error has occurred')
  } else {
    console.log('result', result)
  }
}
</script>
