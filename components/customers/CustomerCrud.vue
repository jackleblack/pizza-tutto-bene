<template>
  <div class="h-full px-6 pt-6 bg-white rounded-3xl">
    <div class="flex justify-between pb-6">
      <p class="text-2xl font-bold text-gray-800">Panier</p>

      <div class="space-x-3">
        <span
          class="px-3 py-2 text-white rounded-md cursor-pointer  bg-golden-400 hover:bg-golden-300"
          >Nouveau</span
        >
      </div>
    </div>
    <div class="flex flex-col justify-between h-full">
      <CustomerForm />
    </div>
  </div>
</template>

<script>
import CustomerForm from './CustomerForm.vue'

export default {
  components: {
    CustomerForm,
  },
  data: () => ({
    loading: true,
    id: '',
    username: '',
    name: '',
    email: '',
    phone: '',
  }),
  methods: {
    async updateCustomer() {
      try {
        this.loading = true

        const updates = {
          id: this.id,
          username: this.username,
          name: this.name,
          email: this.email,
          phone: this.phone,
          updated_at: new Date(),
        }

        const { error } = await this.$supabase
          .from('customers')
          .upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
          })

        if (error) throw error
      } catch (error) {
        alert(error.message)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
