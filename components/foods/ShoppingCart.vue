<template>
  <div class="h-full px-6 pt-6 bg-white rounded-3xl">
    <div class="flex justify-between pb-6">
      <p class="text-2xl font-bold text-gray-800">Panier</p>
      <span class="px-2 py-1 text-red-500 bg-red-100 rounded-md"
        >Supprimer tout</span
      >
    </div>
    <div class="flex flex-col justify-between h-full">
      <div>
        <!-- order list -->
        <div class="h-64 px-5 py-4 mt-5 overflow-y-auto">
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
                class="px-3 py-1 bg-gray-300 rounded-md cursor-pointer  hover:bg-yellow-500 hover:text-white"
                @click="updateQuantity(item, -1)"
                >-</span
              >
              <span class="mx-4 font-semibold">{{ item.quantity }}</span>
              <span
                class="px-3 py-1 bg-gray-300 rounded-md cursor-pointer  hover:bg-yellow-500 hover:text-white"
                @click="updateQuantity(item, 1)"
                >+</span
              >
            </div>
            <div class="w-16 text-lg font-semibold text-center">
              {{ item.price }}€
            </div>
          </div>
        </div>
        <!-- end order list -->
      </div>
      <div class="mb-16">
        <!-- totalItems -->
        <div class="px-5 mt-5">
          <div class="py-4 rounded-md shadow-lg">
            <div class="flex items-center justify-between px-4 py-2 mt-3">
              <span class="text-2xl font-semibold">Total</span>
              <span class="text-xl">{{ totalQuantity }} produit(s)</span>
              <span class="text-2xl font-bold">{{ totalPrice }}€</span>
            </div>
          </div>
        </div>
        <!-- end total -->

        <!-- button pay-->
        <div class="px-5 mt-5">
          <div
            class="px-4 py-4 font-semibold text-center text-white bg-yellow-500 rounded-md shadow-lg "
          >
            Valider le panier
          </div>
        </div>
        <!-- end button pay -->
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
    totalQuantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updateFilterType(type) {
      this.filterType = type
    },
    updateQuantity(item, quantity) {
      this.$store.dispatch('changeItemQuantity', {
        itemFromCart: item,
        quantity,
      })
    },
  },
}
</script>
