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
      <CustomerForm :customer="customer" />
    </div>
  </div>
</template>

<script>
import CustomerForm from './CustomerForm.vue'

export default {
  name: 'CustomerCrud',
  components: {
    CustomerForm,
  },
  props: {
    customer: {
      type: Object,
      required: true,
      default: null,
    },
  },
  mounted() {
    console.log(this.customer, 'customer')
  },
  methods: {},
}
</script>
