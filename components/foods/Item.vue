<template>
  <div>
    <ItemFilter
      :filter-type="filterType"
      :item-types="itemTypes"
      @updateFilterType="updateFilterType($event)"
    />
    <!-- products -->
    <ItemList :items="itemByType" />
    <!-- end products -->
  </div>
</template>

<script>
import ItemFilter from './ItemFilter'
import ItemList from './ItemList'

export default {
  name: 'Item',
  components: { ItemFilter, ItemList },
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
      return this.items.filter(
        (item) => this.filterType === 'all' || item.type === this.filterType
      )
    },
  },
  methods: {
    updateFilterType(type) {
      console.log('iic')
      this.filterType = type
    },
  },
}
</script>
