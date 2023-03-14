// import { store } from 'quasar/wrappers'
import { createStore } from "vuex";
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
        option: "Есть",
      },
      {
        id: uuidv4(),
        pretitle: "BH Fitness F2 G6414V",
        title: "Беговая дорожка",
        oldprice: 64990,
        todayprice: 61990,
        type: "Электрическая",
        speed: 22,
        option: "Есть",
      },
      {
        id: uuidv4(),
        pretitle: "BH Fitness F3 G6414V",
        title: "Беговая дорожка",
        oldprice: 64990,
        todayprice: 61990,
        type: "Электрическая",
        speed: 22,
        option: "Есть",
      },
      {
        id: uuidv4(),
        pretitle: "BH Fitness F4 G6414V",
        title: "Беговая дорожка",
        oldprice: 64990,
        todayprice: 61990,
        type: "Электрическая",
        speed: 22,
        option: "Есть",
      },
    ],

    men: {
      breeches: [
        {
          id: uuidv4(),
          pretitle: "Крутые бриджи",
          title: "Бриджи",
          oldprice: 2000,
          todayprice: 1599,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутые бриджи",
          title: "Бриджи",
          oldprice: 2300,
          todayprice: 1799,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутые бриджи",
          title: "Бриджи",
          oldprice: 2600,
          todayprice: 1999,
          option: "Есть",
        },
      ],
      headdress: [
        {
          id: uuidv4(),
          pretitle: "Крутая кепка",
          title: "Кепка",
          oldprice: 2000,
          todayprice: 1599,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутая шляпа",
          title: "Шляпа",
          oldprice: 2000,
          todayprice: 1599,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутая панама",
          title: "Панама",
          oldprice: 2000,
          todayprice: 1599,
          option: "Есть",
        },
      ],
      shirts: [
        {
          id: uuidv4(),
          pretitle: "Крутая рубашка",
          title: "Рубашка",
          oldprice: 2000,
          todayprice: 1599,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутая рубашка",
          title: "Рубашка",
          oldprice: 3000,
          todayprice: 2599,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутая рубашка",
          title: "Рубашка",
          oldprice: 2000,
          todayprice: 1899,
          option: "Есть",
        },
      ],
      t_shirts: [
        {
          id: uuidv4(),
          pretitle: "Крутая футболка",
          title: "Футболка",
          oldprice: 2000,
          todayprice: 1899,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутая футболка",
          title: "Футболка",
          oldprice: 3000,
          todayprice: 2899,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутая футболка",
          title: "Футболка",
          oldprice: 1000,
          todayprice: 789,
          option: "Есть",
        },
      ],
      tights: [
        {
          id: uuidv4(),
          pretitle: "Крутые тайтсы",
          title: "Тайтсы",
          oldprice: 2600,
          todayprice: 1999,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутые тайтсы",
          title: "Тайтсы",
          oldprice: 1600,
          todayprice: 1399,
          option: "Есть",
        },
        {
          id: uuidv4(),
          pretitle: "Крутые тайтсы",
          title: "Тайтсы",
          oldprice: 1600,
          todayprice: 1199,
          option: "Есть",
        },
      ],
    },

    women: {},
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
