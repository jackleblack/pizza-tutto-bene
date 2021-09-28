<template>
  <div class="flex flex-wrap">
    <div class="w-full px-6 py-6 bg-gray-800 lg:w-8/12 rounded-3xl">
      <div class="flex items-center justify-between mb-8 text-white">
        <p class="text-2xl font-bold">{{ title }}</p>
        <p class="">December, 12</p>
      </div>
    </div>
    <div class="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <div class="px-6 pt-6 bg-gray-800 rounded-3xl">
        <div class="flex pb-6 text-2xl font-bold text-white">
          <p>Client Messages</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
