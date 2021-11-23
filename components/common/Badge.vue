<template>
  <span
    class="
      inline-flex
      items-center
      px-2.5
      py-0.5
      rounded-full
      text-xs
      font-medium
    "
    :class="classname"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    classname: { type: String, required: false },
  },
}
</script>
