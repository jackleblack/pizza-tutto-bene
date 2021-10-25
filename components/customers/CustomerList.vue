<template>
  <div>
    <div class="flex items-center justify-between mb-8 text-gray-800">
      <p class="text-2xl font-bold">Clients</p>
    </div>
    <div class="flex flex-col mt-5">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden border-b border-gray-200 shadow  sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                  >
                    Nom
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                  >
                    Tel
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase "
                  >
                    Adresse
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Editer</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(customer, customerIdx) in customers"
                  :key="customer.id"
                  :class="customerIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                >
                  <td
                    class="px-6 py-4 text-sm font-medium text-gray-900  whitespace-nowrap"
                  >
                    {{ customer.name }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ customer.phone }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ customer.email }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ customer.address }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-medium text-right  whitespace-nowrap"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Editer</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerList',
  props: {
    customers: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(item, price, variant) {
      this.$store.dispatch('addToCard', { item, price, variant })
    },
  },
}
</script>
