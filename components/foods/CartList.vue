<template>
  <div>
    <div
      v-for="(item, index) in cart"
      :key="index"
      class="flex flex-row items-center justify-between mb-4"
    >
      <div class="flex flex-row items-center w-2/5">
        <span class="text-sm font-semibold">{{ item.title }}</span>
        <span class="ml-2 text-xs">{{ item.variant.title }}</span>
      </div>
      <div class="flex justify-between w-32">
        <span
          class="px-3 py-1 bg-gray-300 rounded-md cursor-pointer  hover:bg-gradient-to-r from-golden to-golden-light hover:text-white print:hidden"
          @click="updateQuantity(index, -1)"
          >-</span
        >
        <span class="mx-4 font-semibold">{{ item.quantity }}</span>
        <span
          class="px-3 py-1 bg-gray-300 rounded-md cursor-pointer  hover:bg-gradient-to-r from golden to-golden-light hover:text-white print:hidden"
          @click="updateQuantity(index, 1)"
          >+</span
        >
      </div>
      <div class="w-16 text-lg font-semibold text-center">
        {{ item.variant.price }}€
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateQuantity(index, quantity) {
      console.log(index, 'index')
      console.log(quantity, 'quantity')
      this.$store.dispatch('changeItemQuantity', {
        index,
        quantity,
      })
    },
  },
}
</script>
