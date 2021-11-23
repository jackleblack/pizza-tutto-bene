<template>
  <div class="h-full px-6 pt-6 bg-white rounded-3xl">
    <div class="flex justify-between pb-6">
      <p class="text-2xl font-bold text-gray-800">Panier</p>

      <div v-if="cart.length" class="space-x-3">
        <span
          v-print="'#printMe'"
          class="inline-flex px-2 py-1 text-white rounded-md cursor-pointer  bg-gradient-to-r from golden to-golden-light hover:bg-red-500 hover:text-red-100"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          Imprimer</span
        >
        <span
          class="px-2 py-1 text-red-500 bg-red-100 rounded-md cursor-pointer  hover:bg-red-500 hover:text-red-100"
          @click="resetCart()"
          >Supprimer tout</span
        >
      </div>
    </div>
    <div class="flex flex-col justify-between h-full">
      <div>
        <!-- order list -->
        <div id="printMe" class="h-64 py-4 mt-5 overflow-y-auto">
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
            class="px-4 py-4 font-semibold text-center text-white rounded-md shadow-lg cursor-pointer  bg-gradient-to-r from-golden to-golden-light"
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
import print from 'vue-print-nb'
import CartList from './CartList.vue'
import CartEmpty from './CartEmpty.vue'
import CartTotal from './CartTotal.vue'

export default {
  name: 'ShoppingCart',
  components: { CartList, CartEmpty, CartTotal },
  directives: {
    print,
  },
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
    async print() {
      // Pass the element id here
      await this.$htmlToPaper('printMe')
    },
  },
}
</script>
