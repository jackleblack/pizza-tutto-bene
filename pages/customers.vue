<!-- pages/pizza.vue -->
<template>
  <div class="flex flex-wrap h-full">
    <div class="w-full px-6 py-6 bg-white lg:w-8/12 rounded-3xl">
      <CustomerList :customers="customers" />
    </div>
    <div class="w-full h-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <CustomerForm />
    </div>
  </div>
</template>
<script>
import CustomerList from '../components/customers/CustomerList.vue'
import CustomerForm from '../components/customers/CustomerForm.vue'

export default {
  components: {
    CustomerList,
    CustomerForm,
  },

  data: () => ({
    loading: true,
    customers: [],
  }),
  mounted() {
    this.getCustomers()
  },
  methods: {
    async getCustomers() {
      try {
        this.loading = true

        const { error, data } = await this.$supabase
          .from('customers')
          .select(`id,name,email,phone,address`)

        console.log('ici')
        if (error && status !== 406) throw error

        if (data) {
          this.customers = data
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
