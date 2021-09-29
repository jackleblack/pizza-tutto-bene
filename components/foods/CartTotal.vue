<template>
  <div class="px-5 mt-5">
    <div class="py-4 rounded-md shadow-lg">
      <div class="flex items-center justify-between px-4 py-2 mt-3">
        <span class="text-2xl font-semibold">Total</span>
        <span class="text-xl">{{ totalQuantity }} produit(s)</span>
        <span class="text-2xl font-bold">{{ totalPrice }}€</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartTotal',
  props: {
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
