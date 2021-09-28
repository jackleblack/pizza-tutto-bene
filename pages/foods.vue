<!-- pages/pizza.vue -->
<template>
  <div class="flex flex-wrap h-full">
    <div class="w-full px-6 py-6 bg-white lg:w-8/12 rounded-3xl">
      <div class="flex items-center justify-between mb-8 text-gray-800">
        <p class="text-2xl font-bold">Carte</p>
        <p class="">December, 12</p>
      </div>
      <Left :foods="foods" />
    </div>
    <div class="w-full h-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
      <div class="h-full px-6 pt-6 bg-white rounded-3xl">
        <div class="flex pb-6 text-2xl font-bold text-gray-800">
          <p>Panier</p>
        </div>
        <Right />
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
import Left from '../components/foods/Left.vue'
import Right from '../components/foods/Right.vue'
import jsonFoods from './foods.json'

export default {
  components: {
    Left,
    Right,
  },
  data() {
    return {
      foods: jsonFoods,
      loaded: false,
      posts: [],
      errorMsg: null,
    }
  },
  async created() {
    const { data: posts, error } = await this.$supabase
      .from('food_category')
      .select('*')
    this.posts = posts
    this.loaded = true
    this.errorMsg = error
  },
}
</script>
