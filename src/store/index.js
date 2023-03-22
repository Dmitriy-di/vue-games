// import { store } from 'quasar/wrappers'
import { createStore } from "vuex";
// import { st } from './st'

export default createStore({
  state: {
    state: {
      cart: [],
      totalSum: 0,
    },

  },
  mutations: {
    SET_TOTALSUM: (state, totalSum) => {
      state.totalSum = totalSum
    },
  },
  getters: {
    TOTALSUM(state) {
      return state.totalSum
    },
  },
  actions: {
    ADD_TO_CART({ commit, getters }, quantity) {
      if (!(getters.CART.map(item => item.article).includes(product.article))) {
        commit('SET_CART', product)
      }
    },
    DELETE_FROM_CART({ commit, getters }, index) {
      getters.CART[index].quantity -= 1
      if (!(getters.CART[index].quantity)) commit('REMOVE_FROM_CART', index)
    }
  },
  modules: {
  }
}
);
