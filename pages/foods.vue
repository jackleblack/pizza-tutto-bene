<!-- pages/pizza.vue -->
<template>
  <div class="flex flex-wrap h-full">
    <div class="w-full px-6 py-6 bg-white lg:w-8/12 rounded-3xl">
      <div class="flex items-center justify-between mb-8 text-gray-800">
        <p class="text-2xl font-bold">Carte</p>
        <p class="">December, 12</p>
      </div>
      <ItemList :items="items" />
    </div>
    <div class="w-full h-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <div class="h-full px-6 pt-6 bg-white rounded-3xl">
        <div class="flex pb-6 text-2xl font-bold text-gray-800">
          <p>Panier</p>
        </div>
        <ShoppingCart
          :cart="cart"
          :total-quantity="totalQuantity"
          :total-price="totalPrice"
        />
      </div>
    </div>
  </div>

  <!-- <main>
    <div v-for="food in foods" :key="food.name">tt{{ food }}</div>
    <div v-for="post in posts" :key="post.id">
      <NuxtLink key="{post.id}" :to="`/posts/${post.id}`">
        <div class="pb-4 mt-8 border-b border-gray-300 cursor-pointer">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p class="mt-2 text-gray-500">Author: {{ post.user_email }}</p>
        </div>
      </NuxtLink>
    </div>
    <h1 v-if="loaded && !posts.length" class="text-2xl">No posts...</h1>
    <h1 v-if="errorMsg" class="text-2xl">Error...</h1>
  </main> -->
</template>
<script>
import ItemList from '../components/foods/ItemList.vue'
import ShoppingCart from '../components/foods/ShoppingCart.vue'

export default {
  components: {
    ItemList,
    ShoppingCart,
  },
  computed: {
    items() {
      return this.$store.getters.getItems
    },
    cart() {
      return this.$store.getters.getCart
    },
    totalQuantity() {
      return this.$store.getters.getTotalQuantity
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice
    },
  },
}
</script>
