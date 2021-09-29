<template>
  <div class="h-full px-6 pt-6 bg-white rounded-3xl">
    <div class="flex justify-between pb-6">
      <p class="text-2xl font-bold text-gray-800">Panier</p>
      <span
        v-if="cart.length"
        class="px-2 py-1 text-red-500 bg-red-100 rounded-md cursor-pointer  hover:bg-red-500 hover:text-red-100"
        @click="resetCart()"
        >Supprimer tout</span
      >
    </div>
    <div class="flex flex-col justify-between h-full">
      <div>
        <!-- order list -->
        <div class="h-64 py-4 mt-5 overflow-y-auto">
          <div v-if="cart.length">
            <CartList :cart="cart" />
          </div>
          <div v-else>
            <CartEmpty />
          </div>
        </div>
        <!-- end order list -->
      </div>
      <div class="mb-16">
        <!-- totalItems -->
        <CartTotal :total-quantity="totalQuantity" :total-price="totalPrice" />
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
import CartList from './CartList.vue'
import CartEmpty from './CartEmpty.vue'
import CartTotal from './CartTotal.vue'

export default {
  name: 'ShoppingCart',
  components: { CartList, CartEmpty, CartTotal },
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
    resetCart() {
      this.$store.dispatch('resetCart')
    },
  },
}
</script>
