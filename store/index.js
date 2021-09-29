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
  setTotalPrice(state, data) {
    state.totalPrice = data
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const items = await shop.getItems()
    console.log(items)
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
  async removeFromCard({ commit }, data) {
    const res = await this.$axios.delete('/cart/remove', {
      data: {
        id: data,
      },
    })
    await commit('setTotalPrice', res.data.totalPrice)
    await commit('setCart', res.data.cart)
  },
  async changeItemCount({ commit }, data) {
    const res = await this.$axios.post('/cart/change', data)
    commit('setCart', res.data.cart)
    commit('setTotalPrice', res.data.totalPrice)
  },
}

export const getters = {
  getItems(state) {
    return state.items.map((item) => ({ ...item, slug: slugify(item.name) }))
  },
  getCart(state) {
    console.log(state.cart)
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
