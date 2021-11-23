<template>
  <form class="space-y-6" @submit.prevent="updateCustomer">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Nom
      </label>

      <div class="mt-1">
        <input
          id="name"
          v-model="form.name"
          type="text"
          name="name"
          class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700">
        Téléphone
      </label>
      <div class="mt-1">
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          name="phone"
          class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label for="address" class="block text-sm font-medium text-gray-700">
        Adresse
      </label>
      <div class="mt-1">
        <input
          id="address"
          v-model="form.address"
          type="text"
          name="address"
          class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div class="mt-1">
        <input
          id="email"
          v-model="form.email"
          type="email"
          name="email"
          class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div>
      <input
        type="submit"
        class="w-full px-4 py-4 font-semibold text-center text-white rounded-md shadow-lg  bg-gradient-to-r from-golden to-golden-light"
        :value="loading ? 'Loading ...' : id ? 'Mettre à jour' : 'Ajouter'"
        :disabled="loading"
      />
    </div>

    <!-- <div>
      <button class="block button" :disabled="loading" @click="signOut">
        Sign Out
      </button>
    </div> -->
  </form>
</template>

<script>
// outside of the component:
function initialState() {
  return {
    loading: false,
    form: { name: '', phone: '', address: '', email: '' },
  }
}

export default {
  name: 'CustomerForm',
  props: {
    customer: {
      type: Object,
      required: true,
    },
  },

  data: () => initialState(),
  watch: {
    customer() {
      this.form = this.$props.customer
    },
  },
  methods: {
    resetForm() {
      Object.assign(this.$data, initialState())
    },
    async updateCustomer() {
      try {
        this.loading = true

        const { data, error } = await this.$supabase
          .from('customers')
          .upsert(this.form)

        if (data) {
          this.$emit('onCustomerAdded', data)
          this.$toast.show({
            type: 'success',
            title: 'Bravo !',
            message: 'Ajout réussie',
          })
        }
        if (error) throw error
      } catch (error) {
        this.$toast.show({
          type: 'danger',
          title: 'Erreur',
          message: error.message,
        })
      } finally {
        this.loading = false
        this.resetForm()
      }
    },
  },
}
</script>
