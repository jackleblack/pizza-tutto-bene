<template>
  <div>
    <div
      v-for="(item, index) in cart"
      :key="index"
      class="flex flex-row items-center justify-between mb-4"
    >
      <div class="flex flex-row items-center w-2/5">
        <span class="text-sm font-semibold">{{ item.name }}</span>
        <span class="ml-2 text-xs">{{ item.variant }}</span>
      </div>
      <div class="flex justify-between w-32">
        <span
          class="px-3 py-1 bg-gray-300 rounded-md cursor-pointer  hover:bg-yellow-500 hover:text-white print:hidden"
          @click="updateQuantity(item, -1)"
          >-</span
        >
        <span class="mx-4 font-semibold">{{ item.quantity }}</span>
        <span
          class="px-3 py-1 bg-gray-300 rounded-md cursor-pointer  hover:bg-yellow-500 hover:text-white print:hidden"
          @click="updateQuantity(item, 1)"
          >+</span
        >
      </div>
      <div class="w-16 text-lg font-semibold text-center">
        {{ item.price }}€
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
    updateQuantity(item, quantity) {
      this.$store.dispatch('changeItemQuantity', {
        itemFromCart: item,
        quantity,
      })
    },
  },
}
</script>
