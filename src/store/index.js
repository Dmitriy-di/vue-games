// import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
// import { st } from './st'
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    products: [
      {
        id: uuidv4(),
        pretitle: "BH Fitness F1 G6414V",
        title: "Беговая дорожка",
        oldprice: 64990,
        todayprice: 61990,
        type: "Электрическая",
        speed: 22,
        option: "Есть"
      },
      {
        id: uuidv4(),
        pretitle: "BH Fitness F2 G6414V",
        title: "Беговая дорожка",
        oldprice: 64990,
        todayprice: 61990,
        type: "Электрическая",
        speed: 22,
        option: "Есть"
      },
      {
        id: uuidv4(),
        pretitle: "BH Fitness F3 G6414V",
        title: "Беговая дорожка",
        oldprice: 64990,
        todayprice: 61990,
        type: "Электрическая",
        speed: 22,
        option: "Есть"
      },
      {
        id: uuidv4(),
        pretitle: "BH Fitness F4 G6414V",
        title: "Беговая дорожка",
        oldprice: 64990,
        todayprice: 61990,
        type: "Электрическая",
        speed: 22,
        option: "Есть"
      }
    ]
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
  },
  mutations: {

  },
  actions: {

  },
  modules: {
  }
})
