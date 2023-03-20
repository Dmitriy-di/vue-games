// import { store } from 'quasar/wrappers'
import { createStore } from "vuex";
// import { st } from './st'
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ApolloClient } from "@apollo/client/core";
import { getClientOptions } from "src/apollo/index";


export default createStore({
  state: {
    state: {
      cart: [],
      totalSum: 0,
      products: [],
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
    GET_PRODUCTS_FROM_BD({ commit }) {
      const fetching = async () => {
        try {
          const { result, loading, error } = await useQuery(
            gql`
              query MyQuery {
                products {
                  category
                  discount
                  gender
                  name
                  oldprice
                  todayprice
                  url
                }
              }
            `
          );
          // productsReserve.values = result?.value?.products;
          // products.values = result?.value?.products;
          // console.log(products);
          commit('SET_CART', product)
        } catch (e) {
          console.log(e);
        }
        // return products, productsReserve;
      };
      fetching();
    },
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
