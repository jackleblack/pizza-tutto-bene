import shop from '../api/shop'

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
  pushProductToCart(state, { key, variant, price, item }) {
    state.cart.push({ ...item, key, variant, price, quantity: 1 })
  },
  incrementItemQuantity(state, { key }) {
    const cartItem = state.cart.find((item) => item.key === key)
    cartItem.quantity++
  },
  decrementItemQuantity(state, { key }) {
    const cartItem = state.cart.find((item) => item.key === key)
    if (cartItem.quantity > 1) {
      cartItem.quantity--
    } else {
      const index = state.cart.findIndex((item) => item.key === key)
      state.cart.splice(index, 1)
    }
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const items = await shop.getItems()
    await commit('setItems', items)
  },
  async addToCard({ state, commit }, { item, price, variant }) {
    const key = item.slug + '-' + variant
    const cartItem = state.cart.find((item) => item.key === key)
    if (!cartItem) {
      await commit('pushProductToCart', { key, variant, price, item })
    } else {
      await commit('incrementItemQuantity', cartItem)
    }
  },
  async changeItemQuantity({ state, commit }, { itemFromCart, quantity }) {
    const cartItem = state.cart.find((item) => item.key === itemFromCart.key)

    if (quantity > 0) {
      await commit('incrementItemQuantity', cartItem)
    } else {
      await commit('decrementItemQuantity', cartItem)
    }
  },
  async resetCart({ state, commit }) {
    await commit('setCart', [])
  },
}

export const getters = {
  getItems(state) {
    return state.items.map((item) => ({ ...item, slug: slugify(item.name) }))
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
      return total + item.price * item.quantity
    }, 0)
  },
}

const slugify = (text) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
