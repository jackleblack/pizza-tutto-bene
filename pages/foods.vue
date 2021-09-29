<!-- pages/pizza.vue -->
<template>
  <div class="flex flex-wrap h-full">
    <div class="w-full px-6 py-6 bg-white lg:w-8/12 rounded-3xl">
      <ItemList :items="items" />
    </div>
    <div class="w-full h-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <ShoppingCart
        :cart="cart"
        :total-quantity="totalQuantity"
        :total-price="totalPrice"
      />
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
