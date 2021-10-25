<!-- pages/pizza.vue -->
<template>
  <div class="flex flex-wrap h-full">
    <div class="w-full px-6 py-6 bg-white lg:w-8/12 rounded-3xl">
      <Item :items="items" />
    </div>
    <div class="w-full h-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <Cart
        :cart="cart"
        :total-quantity="totalQuantity"
        :total-price="totalPrice"
      />
    </div>
  </div>
</template>
<script>
import Item from '../components/foods/Item.vue'
import Cart from '../components/foods/Cart.vue'

export default {
  components: {
    Item,
    Cart,
  },
  computed: {
    items() {
      return this.$store.getters.getItems
    },
    cart() {
      return this.$store.getters.getCart
    },
    totalQuantity() {
      return this.$store.getters.getTotalQuantity
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice
    },
  },
}
</script>
