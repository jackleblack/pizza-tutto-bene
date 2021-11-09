<template>
  <div>
    <div class="flex items-center justify-between mb-8 text-gray-800">
      <p class="text-2xl font-bold">Carte</p>
      <!-- <p class="">December, 12</p> -->
    </div>
    <div class="flex flex-row mt-5">
      <span
        class="px-5 py-1 mr-4 text-sm font-semibold cursor-pointer  rounded-2xl bg-gradient-to-r hover:from-golden to-golden-light hover:text-white"
        :class="{
          'bg-gradient-to-r  from-golden to-golden-light text-white':
            'all' === filterCategory,
        }"
        @click="updateFilterCategory('all')"
      >
        Tous
      </span>
      <span
        v-for="itemCategory in itemCategories"
        :key="itemCategory"
        class="px-4 py-1 mr-4 text-sm font-semibold cursor-pointer  rounded-2xl bg-gradient-to-r hover:from-golden to-golden-light hover:text-white"
        :class="{
          'bg-gradient-to-r  from-golden to-golden-light text-white':
            itemCategory === filterCategory,
        }"
        @click="updateFilterCategory(itemCategory)"
      >
        {{ itemCategory }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemFilter',
  props: {
    filterCategory: {
      type: String,
      required: true,
    },
    itemCategories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateFilterCategory(category) {
      this.$emit('updateFilterCategory', category)
    },
  },
}
</script>
