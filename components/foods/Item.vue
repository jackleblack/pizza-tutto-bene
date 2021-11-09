<template>
  <div>
    <ItemFilter
      :filter-category="filterCategory"
      :item-categories="itemCategories"
      @updateFilterCategory="updateFilterCategory($event)"
    />
    <!-- products -->
    <ItemList :items="itemByCategory" />
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
      filterCategory: 'all',
    }
  },
  computed: {
    itemCategories() {
      console.table(this.items)
      // Get unique itemCategorys
      return [...new Set(this.items?.map((item) => item.category))]
    },
    itemByCategory() {
      return this.items?.filter(
        (item) =>
          this.filterCategory === 'all' || item.category === this.filterCategory
      )
    },
  },
  methods: {
    updateFilterCategory(category) {
      this.filterCategory = category
    },
  },
}
</script>
