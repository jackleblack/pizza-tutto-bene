<!-- pages/pizza.vue -->
<template>
  <div class="flex flex-wrap h-full">
    <div class="w-full px-6 py-6 bg-white lg:w-8/12 rounded-3xl">
      <ProfileList :profiles="profiles" />
    </div>
    <div class="w-full h-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <ProfileForm />
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import ProfileList from '../components/profiles/ProfileList.vue'
import ProfileForm from '../components/profiles/ProfileForm.vue'

export default {
  components: {
    ProfileList,
    ProfileForm,
  },
  setup() {
    const loading = ref(true)
    let profiles = []

    async function getProfiles() {
      try {
        loading.value = true

        const { data, error, status } = await this.$supabase
          .from('profiles')
          .select(`id,username,name,email, phone`)

        if (error && status !== 406) throw error

        if (data) {
          profiles = data
        }
      } catch (error) {
        alert(error.message)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      getProfiles()
    })

    return {
      loading,
      profiles,
    }
  },
}
</script>
