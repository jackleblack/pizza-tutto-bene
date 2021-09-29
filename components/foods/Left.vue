<template>
  <div>
    <!-- header -->
    <!-- <div class="flex flex-row items-center justify-between px-5 mt-5">
      <div class="text-gray-800">
        <div class="text-xl font-bold">Simons's BQQ Team</div>
        <span class="text-xs">Location ID#SIMON123</span>
      </div>
      <div class="flex items-center">
        <div class="mr-4 text-sm text-center">
          <div class="font-light text-gray-500">last synced</div>
          <span class="font-semibold">3 mins ago</span>
        </div>
        <div>
          <span
            class="px-4 py-2 font-semibold text-gray-800 bg-gray-200 rounded"
          >
            Help
          </span>
        </div>
      </div>
    </div> -->
    <!-- end header -->
    <!-- Types -->
    <div class="flex flex-row px-5 mt-5">
      <span
        class="px-5 py-1 mr-4 text-sm font-semibold cursor-pointer  rounded-2xl hover:bg-yellow-400 hover:text-white"
        :class="{ 'bg-yellow-500 text-white': 'all' === filterType }"
        @click="updateFilterType('all')"
      >
        Tous
      </span>
      <span
        v-for="foodType in foodTypes"
        :key="foodType"
        class="px-5 py-1 mr-4 text-sm font-semibold cursor-pointer  rounded-2xl hover:bg-yellow-400 hover:text-white"
        :class="{ 'bg-yellow-500 text-white': foodType === filterType }"
        @click="updateFilterType(foodType)"
      >
        {{ foodType }}
      </span>
    </div>
    <!-- end Types -->
    <!-- products -->
    <div class="grid grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto h-3/4">
      <div
        v-for="(food, index) in foodByType"
        :key="index"
        class="flex flex-col justify-between h-40 px-3 py-3 bg-gray-100 rounded rounded-md shadow-lg "
      >
        <div>
          <div class="font-bold text-gray-800">{{ food.name }}</div>
          <span
            class="h-4 overflow-hidden text-xs font-light text-gray-400  overflow-ellipsis"
            >{{ food.description }}</span
          >
        </div>
        <div class="flex flex-row items-center justify-between">
          <div
            v-for="(price, variant) in food.prices"
            :key="price"
            class="flex flex-col p-2 text-yellow-500 bg-white cursor-pointer  rounded-2xl group hover:bg-yellow-500"
          >
            <span
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
  name: 'Left',
  props: {
    foods: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      filterType: 'all',
    }
  },
  computed: {
    foodTypes() {
      // Get unique foodTypes
      return [...new Set(this.foods.map((food) => food.type))]
    },
    foodByType() {
      console.log(this.filterType)
      return this.foods.filter(
        (food) => this.filterType === 'all' || food.type === this.filterType
      )
    },
  },
  methods: {
    updateFilterType(type) {
      this.filterType = type
      console.log('updateFilterType')
    },
  },
}
</script>
