<template>
  <dashboard-layout>
    <Nuxt />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from '@/components/dashboard/Layout.vue'
export default {
  components: { DashboardLayout },
  data: () => ({
    authenticated: false,
    authListener: null,
  }),
  async mounted() {
    /* When the app loads, check to see if the user is signed in */
    /* also create a listener for when someone signs in or out */
    const { data: authListener } = await this.$supabase.auth.onAuthStateChange(
      () => this.checkUser()
    )
    this.authListener = authListener
    this.checkUser()
  },
  beforeUnmount() {
    this.authListener?.unsubscribe()
  },
  methods: {
    async checkUser() {
      const user = await this.$supabase.auth.user()
      if (user) {
        this.authenticated = true
      } else {
        this.authenticated = false
      }
    },
  },
}
</script>
