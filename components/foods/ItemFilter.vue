<template>
  <div>
    <div class="flex items-center justify-between mb-8 text-gray-800">
      <p class="text-2xl font-bold">Carte</p>
      <!-- <p class="">December, 12</p> -->
    </div>
    <div class="flex flex-row mt-5">
      <span
        class="px-5 py-1 mr-4 text-sm font-semibold cursor-pointer  rounded-2xl hover:bg-yellow-400 hover:text-white"
        :class="{ 'bg-yellow-500 text-white': 'all' === filterType }"
        @click="updateFilterType('all')"
      >
        Tous
      </span>
      <span
        v-for="itemType in itemTypes"
        :key="itemType"
        class="px-4 py-1 mr-4 text-sm font-semibold cursor-pointer  rounded-2xl hover:bg-yellow-400 hover:text-white"
        :class="{ 'bg-yellow-500 text-white': itemType === filterType }"
        @click="updateFilterType(itemType)"
      >
        {{ itemType }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemFilter',
  props: {
    filterType: {
      type: String,
      required: true,
    },
    itemTypes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateFilterType(type) {
      this.$emit('updateFilterType', type)
    },
  },
}
</script>
