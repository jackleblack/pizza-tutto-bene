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
    <!-- categories -->
    <div class="flex flex-row px-5 mt-5">
      <span class="px-5 py-1 mr-4 text-sm text-white bg-yellow-500 rounded-2xl">
        All items
      </span>
      <span
        v-for="foodCategory in foodCategories"
        :key="foodCategory"
        class="px-5 py-1 mr-4 text-sm font-semibold rounded-2xl"
      >
        {{ foodCategory }}
      </span>
    </div>
    <!-- end categories -->
    <!-- products -->
    <div class="grid grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto h-3/4">
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Griled corn</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/sc5sTPMrVfk/600x600"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Ranch Burger</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$7.00</span>
          <img
            src="https://source.unsplash.com/sc5sTPMrVfk/600x500"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Pizza Bacon</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/sc5sTPMrVfk/500x500"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Griled corn</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Griled corn</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Griled corn</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Griled corn</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Griled corn</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Griled corn</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Griled corn</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-between h-32 px-3 py-3 border border-gray-200 rounded-md "
      >
        <div>
          <div class="font-bold text-gray-800">Griled corn</div>
          <span class="text-sm font-light text-gray-400">150g</span>
        </div>
        <div class="flex flex-row items-center justify-between">
          <span class="self-end text-lg font-bold text-yellow-500">$1.75</span>
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/600x600"
            class="object-cover rounded-md h-14 w-14"
            alt=""
          />
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
  computed: {
    // a computed getter
    foodCategories() {
      // Get unique foodCategories
      return [...new Set(this.foods.map((food) => food.type))]
    },
  },
}
</script>
