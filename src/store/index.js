// import { store } from 'quasar/wrappers'
import { createStore } from "vuex";
// import { st } from './st'
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    state: {
      products: [],
      cart: [],
      totalSum: 0,
    },
    getters: {
      PRODUCTS(state) {
        return state.products
      },
    },
    mutations: {
      SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products
      },
    },
    actions: {
      GET_PRODUCTS({ commit, state }) {
        const fetching = async () => {
          const productCollectionRef = collection(db, "products");
          try {
            await onSnapshot(productCollectionRef, (querySnapshot) => {
              let fbTodos = [];
              querySnapshot.forEach((doc) => {
                const product = {
                  article: doc.id,
                  about: doc.data().about,
                  category: doc.data().category,
                  image: doc.data().image,
                  name: doc.data().category,
                  price: doc.data().price,
                  available: true,
                  quantity: 0,
                };
                fbTodos.push(product);
              });
              state.products = fbTodos
              //commit('SET_TODOS', fbTodos)
              console.log(1111111111111);
              console.log(state.products);
            });
          }
          catch (e) {
            console.log("Ошибка: ", e)
          }
        }
        fetching()

      },
      DELETE_FROM_CART({ commit, getters }, index) {
        getters.CART[index].quantity -= 1
        if (!(getters.CART[index].quantity)) commit('REMOVE_FROM_CART', index)
      }
    },
    modules: {
    }
  }
});
