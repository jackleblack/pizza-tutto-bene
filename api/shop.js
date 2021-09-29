import products from './products.json'

export default {
  getItems() {
    return products
  },

  //   buyProducts(products, cb, errorCb) {
  //     setTimeout(() => {
  //       // simulate random checkout failure.
  //       Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb()
  //     }, 100)
  //   },
}
