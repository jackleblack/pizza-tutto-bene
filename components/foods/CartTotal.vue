<template>
  <div>
    <div class="px-5 mt-5">
      <div class="py-4 rounded-md shadow-lg">
        <div class="flex items-center justify-between px-4 py-2 mt-3">
          <span class="text-2xl font-semibold">Total</span>
          <span class="text-xl">{{ totalQuantity }} produit(s)</span>
          <span class="text-2xl font-bold">{{ totalPrice }}€</span>
        </div>
        <div class="flex space-x-2">
          <vSelect
            v-model="selected"
            label="name"
            :options="options"
            class="w-full"
          >
            <template slot="no-options">
              Rechercher par Nom ou Téléphone
            </template>
            <template slot="option" slot-scope="option">
              <div class="d-center">{{ option.name }} {{ option.phone }}</div>
            </template>
            <template slot="selected-option" slot-scope="option">
              <div class="selected d-center">
                {{ option.name }} {{ option.phone }}
              </div>
            </template>
          </vSelect>
          <button
            type="button"
            class="inline-flex items-center p-2 text-white bg-indigo-600 border border-transparent rounded-full shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="showAddCustomerModal()"
          >
            <svg
              class="w-5 h-5"
              x-description="Heroicon name: solid/plus-sm"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <CartModal />
  </div>
</template>

<script>
// import { debounce } from 'lodash'
import CartModal from './CartModal.vue'

export default {
  name: 'CartTotal',
  components: {
    CartModal,
  },
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
  data() {
    return {
      options: [],
      selected: null,
    }
  },
  mounted() {
    this.getCustomers()
  },
  methods: {
    showAddCustomerModal() {
      this.$modal.show('cart-modal')
    },

    // onSearch(search, loading) {
    //   if (search.length) {
    //     loading(true)
    //     this.search(loading, search, this)
    //   }
    // },
    // search: debounce(async (loading, search, vm) => {
    //   const { data } = await vm.$supabase
    //     .from('customers')
    //     .select(`id,name,email,phone,address`)
    //     .ilike('name', `%${search}%`)

    //   if (data) {
    //     vm.options = data
    //     loading(false)
    //   }
    // }, 350),
    async getCustomers() {
      try {
        this.loading = true

        const { error, data } = await this.$supabase
          .from('customers')
          .select(`id,name,email,phone,address`)

        if (error && status !== 406) throw error

        if (data) {
          this.options = data
        }
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
