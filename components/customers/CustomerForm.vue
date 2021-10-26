<template>
  <form class="space-y-6" @submit.prevent="updateCustomer">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Nom
      </label>

      <div class="mt-1">
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Zinedine Zidane"
        />
      </div>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Téléphone
      </label>
      <div class="mt-1">
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="zz@example.com"
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
          v-model="address"
          type="text"
          name="address"
          class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="La canebière MaRSEILLE"
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
export default {
  name: 'CustomerForm',
  props: {
    customer: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    loading: false,
    name: this?.customer.name || '',
    email: this?.customer.email || '',
    phone: this?.customer.phone || '',
  }),
  watch: {
    customer: {
      handler(n, o) {
        console.log('customerchanged')
        this.name = n.name
        this.email = n.email
        this.phone = n.phone
      },
      deep: true,
    },
  },
  mounted() {
    console.log(this.customer.name, 'customer2')
  },
  methods: {
    async updateCustomer() {
      try {
        this.loading = true

        const updates = {
          name: this.name,
          email: this.email,
          phone: this.phone,
        }

        // Update mode
        if (this.customer.id) {
          updates.id = this.customer.id
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
