<template>
  <form class="form-widget" @submit.prevent="updateCustomer">
    <div>
      <label for="name">Name</label>
      <input id="name" v-model="name" type="text" />
    </div>

    <div>
      <label for="phone">phone</label>
      <input id="phone" v-model="phone" type="phone" />
    </div>

    <div>
      <label for="email">email</label>
      <input id="email" v-model="email" type="email" />
    </div>

    <div>
      <input
        type="submit"
        class="block button primary"
        :value="loading ? 'Loading ...' : 'Update'"
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
