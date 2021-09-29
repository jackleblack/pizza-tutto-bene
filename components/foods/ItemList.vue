<template>
  <div>
    <!-- Types -->
    <div class="flex items-center justify-between mb-8 text-gray-800">
      <p class="text-2xl font-bold">Carte</p>
      <!-- <p class="">December, 12</p> -->
    </div>
    <div class="flex flex-row px-5 mt-5">
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
    <!-- end Types -->
    <!-- products -->
    <div class="grid grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto h-3/4">
      <div
        v-for="item in itemByType"
        :key="item.slug"
        class="flex flex-col justify-between h-40 px-3 py-3 bg-gray-100 rounded rounded-md shadow-lg "
      >
        <div>
          <div class="font-bold text-gray-800">{{ item.name }}</div>
          <span
            class="h-4 overflow-hidden text-xs font-light text-gray-400  overflow-ellipsis"
            >{{ item.description }}</span
          >
        </div>
        <div class="flex flex-row items-center justify-between">
          <div
            v-for="(price, variant) in item.prices"
            :key="price"
            class="flex flex-col p-2 text-yellow-500 bg-white cursor-pointer  rounded-2xl group hover:bg-yellow-500"
            @click="addToCart(item, price, variant)"
          >
            <span
              v-if="variant"
              class="text-xs font-semibold text-yellow-500  group-hover:text-white"
              >{{ variant }}</span
            >
            <span
              class="text-sm font-bold text-yellow-500 group-hover:text-white"
              >{{ price }}€</span
            >
          </div>
        </div>
      </div>
      <!-- end products -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterType: 'all',
    }
  },
  computed: {
    itemTypes() {
      // Get unique itemTypes
      return [...new Set(this.items.map((item) => item.type))]
    },
    itemByType() {
      console.log(this.filterType)
      return this.items.filter(
        (item) => this.filterType === 'all' || item.type === this.filterType
      )
    },
  },
  methods: {
    updateFilterType(type) {
      this.filterType = type
      console.log('updateFilterType')
    },
    addToCart(item, price, variant) {
      this.$store.dispatch('addToCard', { item, price, variant })
    },
  },
}
</script>
