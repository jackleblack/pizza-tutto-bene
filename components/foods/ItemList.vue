<template>
  <ul
    role="list"
    class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3"
  >
    <li
      v-for="item in items"
      :key="item.id"
      class="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow"
    >
      <div class="flex items-center justify-between w-full p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-sm font-medium text-gray-900 truncate">
              {{ item.title }}
            </h3>
          </div>
          <p class="mt-1 text-xs text-gray-500 truncate">
            {{ item.description || '🔥' }}
          </p>
        </div>
      </div>
      <div>
        <div class="flex -mt-px divide-x divide-gray-200">
          <div
            v-for="variant in item.product_variants"
            :key="variant.id"
            class="flex flex-1 w-0 cursor-pointer hover:bg-gray-100"
            @click="addToCart(item, variant)"
          >
            <a
              class="relative flex flex-col items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg "
            >
              <BadgeVariant :variant="variant">{{
                variant.price
              }}</BadgeVariant>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import BadgeVariant from '../common/BadgeVariant'

export default {
  name: 'ItemList',
  components: { BadgeVariant },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      variantClassname: {
        solo: 'bg-green-500 text-green-100',
        standard: 'bg-golden-400 text-golden-100',
        maxi: 'bg-red-500 text-red-100',
      },
    }
  },
  methods: {
    addToCart(item, variant) {
      this.$store.dispatch('addToCard', { item, variant })
    },
  },
}
</script>
