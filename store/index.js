export const state = () => ({
  items: [],
  cart: [],
})

export const mutations = {
  setItems(state, data) {
    state.items = data
  },
  setCart(state, data) {
    state.cart = data
  },
  pushProductToCart(state, { item, variant }) {
    state.cart.push({ ...item, variant, quantity: 1 })
  },
  incrementItemQuantity(state, item) {
    item.quantity++
  },
  decrementItemQuantity(state, { item, index }) {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      state.cart.splice(index, 1)
    }
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await this.$supabase
      .from('products')
      .select(
        `id, title, description, category,product_variants(id, title, price)`
      )

    await commit('setItems', data)
  },
  async addToCard({ state, commit }, { item, variant }) {
    await commit('pushProductToCart', { item, variant })
  },
  async changeItemQuantity({ state, commit }, { index, quantity }) {
    const item = state.cart[index]
    if (quantity > 0) {
      await commit('incrementItemQuantity', item)
    } else {
      await commit('decrementItemQuantity', { item, index })
    }
  },
  async resetCart({ state, commit }) {
    await commit('setCart', [])
  },
}

export const getters = {
  getItems(state) {
    return state.items?.map((item) => ({ ...item }))
  },
  getCart(state) {
    return state.cart
  },
  getTotalQuantity: (state, getters) => {
    return getters.getCart.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  },
  getTotalPrice: (state, getters) => {
    return getters.getCart.reduce((total, item) => {
      return total + item.variant.price * item.quantity
    }, 0)
  },
}
