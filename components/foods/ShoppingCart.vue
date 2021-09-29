<template>
  <div class="flex flex-col justify-between h-full">
    <div>
      <!-- header -->
      <!-- <div class="flex flex-row items-center justify-between px-5 mt-5">
        <div class="text-xl font-bold">Current Order</div>
        <div class="font-semibold">
          <span class="px-4 py-2 text-red-500 bg-red-100 rounded-md"
            >Clear All</span
          >
          <span class="px-4 py-2 text-gray-800 bg-gray-100 rounded-md"
            >Setting</span
          >
        </div>
      </div> -->
      <!-- end header -->
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
            <span class="px-3 py-1 bg-gray-300 rounded-md">-</span>
            <span class="mx-4 font-semibold">{{ item.quantity }}</span>
            <span class="px-3 py-1 bg-gray-300 rounded-md">+</span>
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
}
</script>
