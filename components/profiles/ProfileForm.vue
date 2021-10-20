<template>
  <form class="form-widget" @submit.prevent="updateProfile">
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
import { ref } from 'vue'

export default {
  setup() {
    const loading = ref(true)
    const id = ref('')
    const username = ref('')
    const name = ref('')
    const email = ref('')
    const phone = ref('')

    async function updateProfile() {
      try {
        loading.value = true

        const updates = {
          id: id.value,
          username: username.value,
          name: name.value,
          email: email.value,
          phone: phone.value,
          updated_at: new Date(),
        }

        const { error } = await this.$supabase
          .from('profiles')
          .upsert(updates, {
            returning: 'minimal', // Don't return the value after inserting
          })

        if (error) throw error
      } catch (error) {
        alert(error.message)
      } finally {
        loading.value = false
      }
    }

    return {
      loading,
      username,
      name,
      email,
      phone,

      updateProfile,
    }
  },
}
</script>
