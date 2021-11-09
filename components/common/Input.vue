<template>
  <div>
    <label for="address" class="block text-sm font-medium text-gray-700">
      Adresse
    </label>
    <div class="mt-1">
      <input
        id="address"
        v-model="form.address"
        type="text"
        name="address"
        class="block w-full border-gray-300 rounded-md shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerForm',
  props: {
    label: { type: Object, required: true },
    name: { type: Object, required: true },
    vmodel: { type: Object, required: true },
  },
}
</script>
