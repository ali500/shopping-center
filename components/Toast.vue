<template>
  <div class="toast">
    <div class="alert" :class="handleStyle()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span><slot /></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['status'])

function handleStyle() {
  if (props.status == 'success') {
    return 'alert-success text-base-100'
  } else if (props.status == 'error') {
    return 'alert-error text-base-100'
  } else if (props.status == 'warning') {
    return 'alert-warning'
  } else {
    return 'bg-base-content text-base-100'
  }
}
</script>
