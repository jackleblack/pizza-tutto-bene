<template>
  <div class="flex flex-col justify-between h-full">
    <div>
      <!-- header -->
      <!-- <div class="flex flex-row items-center justify-between px-5 mt-5">
        <div class="text-xl font-bold">Current Order</div>
        <div class="font-semibold">
          <span class="px-4 py-2 text-red-500 bg-red-100 rounded-md"
            >Clear All</span
          >
          <span class="px-4 py-2 text-gray-800 bg-gray-100 rounded-md"
            >Setting</span
          >
        </div>
      </div> -->
      <!-- end header -->
      <!-- order list -->
      <div class="h-64 px-5 py-4 mt-5 overflow-y-auto">
        <div class="flex flex-row items-center justify-between mb-4">
          <div class="flex flex-row items-center w-2/5">
            <span class="text-sm font-semibold">Stuffed flank steak</span>
          </div>
          <div class="flex justify-between w-32">
            <span class="px-3 py-1 bg-gray-300 rounded-md">-</span>
            <span class="mx-4 font-semibold">2</span>
            <span class="px-3 py-1 bg-gray-300 rounded-md">+</span>
          </div>
          <div class="w-16 text-lg font-semibold text-center">$13.50</div>
        </div>
        <div class="flex flex-row items-center justify-between mb-4">
          <div class="flex flex-row items-center w-2/5">
            <span class="text-sm font-semibold">Grilled Corn</span>
          </div>
          <div class="flex justify-between w-32">
            <span class="px-3 py-1 bg-gray-300 rounded-md">-</span>
            <span class="mx-4 font-semibold">10</span>
            <span class="px-3 py-1 bg-gray-300 rounded-md">+</span>
          </div>
          <div class="w-16 text-lg font-semibold text-center">$3.50</div>
        </div>
        <div class="flex flex-row items-center justify-between mb-4">
          <div class="flex flex-row items-center w-2/5">
            <span class="text-sm font-semibold">Grilled Corn</span>
          </div>
          <div class="flex justify-between w-32">
            <span class="px-3 py-1 bg-gray-300 rounded-md">-</span>
            <span class="mx-4 font-semibold">10</span>
            <span class="px-3 py-1 bg-gray-300 rounded-md">+</span>
          </div>
          <div class="w-16 text-lg font-semibold text-center">$3.50</div>
        </div>

        <div class="flex flex-row items-center justify-between mb-4">
          <div class="flex flex-row items-center w-2/5">
            <span class="ml-4 text-sm font-semibold">Ranch Burger</span>
          </div>
          <div class="flex justify-between w-32">
            <span class="px-3 py-1 text-white bg-red-300 rounded-md">x</span>
            <span class="mx-4 font-semibold">1</span>
            <span class="px-3 py-1 bg-gray-300 rounded-md">+</span>
          </div>
          <div class="w-16 text-lg font-semibold text-center">$2.50</div>
        </div>
      </div>
      <!-- end order list -->
    </div>
    <div class="mb-16">
      <!-- totalItems -->
      <div class="px-5 mt-5">
        <div class="py-4 rounded-md shadow-lg">
          <div class="flex justify-between px-4">
            <span class="text-sm font-semibold">Subtotal</span>
            <span class="font-bold">$35.25</span>
          </div>
          <div class="flex justify-between px-4">
            <span class="text-sm font-semibold">Discount</span>
            <span class="font-bold">- $5.00</span>
          </div>
          <div class="flex justify-between px-4">
            <span class="text-sm font-semibold">Sales Tax</span>
            <span class="font-bold">$2.25</span>
          </div>
          <div
            class="flex items-center justify-between px-4 py-2 mt-3 border-t-2"
          >
            <span class="text-2xl font-semibold">Total</span>
            <span class="text-2xl font-bold">$37.50</span>
          </div>
        </div>
      </div>
      <!-- end total -->

      <!-- button pay-->
      <div class="px-5 mt-5">
        <div
          class="px-4 py-4 font-semibold text-center text-white bg-yellow-500 rounded-md shadow-lg "
        >
          Valider le panier
        </div>
      </div>
      <!-- end button pay -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Right',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
