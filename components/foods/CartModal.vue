<template>
  <modal
    name="cart-modal"
    :min-width="200"
    :min-height="200"
    :scrollable="true"
    :reset="true"
    width="80%"
    height="60%"
    @before-open="beforeOpen"
  >
    <CustomerForm @onCustomerAdded="handlCustomerAdded(customer)" />
  </modal>
</template>

<script>
import CustomerForm from '../customers/CustomerForm.vue'
// import CustomerList from '../customers/CustomerList.vue'

export default {
  name: 'MyComponent',
  components: { CustomerForm },
  data: () => ({
    loading: true,
    customers: [],
    customer: {},
  }),
  // mounted() {
  //   this.show()
  // },
  methods: {
    show() {
      this.$modal.show('cart-modal')
    },
    hide() {
      this.$modal.hide('cart-modal')
    },
    handlCustomerAdded(customer) {
      console.log('Opening...')
      // this.getCustomers()
    },
  },
}
</script>
