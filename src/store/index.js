// import { store } from 'quasar/wrappers'
import { createStore } from "vuex";
// import { st } from './st'
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    products: [
      {
        id: uuidv4(),
        name: "бриджи",
        category: "Бриджи",
        oldprice: 2000,
        todayprice: 1599,
        gender: "male",
        url: "breeches_1.jpg"
      },
      {
        id: uuidv4(),
        name: "бриджи",
        category: "Бриджи",
        oldprice: 2300,
        todayprice: 1799,
        gender: "male",
        url: "breeches_2.jpg"
      },
      {
        id: uuidv4(),
        name: "бриджи",
        category: "Бриджи",
        oldprice: 2600,
        todayprice: 1999,
        gender: "male",
        url: "breeches_3.jpg"
      },
      {
        id: uuidv4(),
        name: "кепка",
        category: "Кепка",
        oldprice: 2000,
        todayprice: 1599,
        gender: "male",
        url: "hat.jpg"
      },
      {
        id: uuidv4(),
        name: "шляпа",
        category: "Шляпа",
        oldprice: 2000,
        todayprice: 1599,
        gender: "male",
        url: "panama.jpg"
      },
      {
        id: uuidv4(),
        name: "панама",
        category: "Панама",
        oldprice: 2000,
        todayprice: 1599,
        gender: "male",
        url: "cap.jpg"
      },
      {
        id: uuidv4(),
        name: "рубашка",
        category: "Рубашка",
        oldprice: 2000,
        todayprice: 1599,
        gender: "male",
        url: "shirts_1.jpg"
      },
      {
        id: uuidv4(),
        name: "рубашка",
        category: "Рубашка",
        oldprice: 3000,
        todayprice: 2599,
        gender: "male",
        url: "shirts_3.jpg"
      },
      {
        id: uuidv4(),
        name: "рубашка",
        category: "Рубашка",
        oldprice: 2000,
        todayprice: 1899,
        gender: "male",
        url: "shirts_3.jpg"
      },
      {
        id: uuidv4(),
        name: "футболка",
        category: "Футболка",
        oldprice: 2000,
        todayprice: 1899,
        gender: "male",
        url: "shirt_1.jpg"
      },
      {
        id: uuidv4(),
        name: "футболка",
        category: "Футболка",
        oldprice: 3000,
        todayprice: 2899,
        gender: "male",
        url: "shirt_2.jpg"
      },
      {
        id: uuidv4(),
        name: "футболка",
        category: "Футболка",
        oldprice: 1000,
        todayprice: 789,
        gender: "male",
        url: "shirt_3.jpg"
      },
      {
        id: uuidv4(),
        name: "тайтсы",
        category: "Тайтсы",
        oldprice: 2600,
        todayprice: 1999,
        gender: "male",
        url: "tights_1.jpg"
      },
      {
        id: uuidv4(),
        name: "тайтсы",
        category: "Тайтсы",
        oldprice: 1600,
        todayprice: 1399,
        gender: "male",
        url: "tights_2.jpg"
      },
      {
        id: uuidv4(),
        name: "тайтсы",
        category: "Тайтсы",
        oldprice: 1600,
        todayprice: 1199,
        gender: "male",
        url: "tights_3.jpg"
      },



      {
        id: uuidv4(),
        name: "кепка",
        category: "Кепка",
        oldprice: 2000,
        todayprice: 1599,
        gender: "female",
        url: "cap.jpg"
      },
      {
        id: uuidv4(),
        name: "шляпа",
        category: "Шляпа",
        oldprice: 2000,
        todayprice: 1599,
        gender: "female",
        url: "hat.jpg"
      },
      {
        id: uuidv4(),
        name: "панама",
        category: "Панама",
        oldprice: 2000,
        todayprice: 1599,
        gender: "female",
        url: "panama.jpg"
      },
      {
        id: uuidv4(),
        name: "легинсы",
        category: "Легинсы",
        oldprice: 2600,
        todayprice: 1999,
        gender: "female",
        url: "leggings_1.jpg"
      },
      {
        id: uuidv4(),
        name: "легинсы",
        category: "Легинсы",
        oldprice: 2700,
        todayprice: 2399,
        gender: "female",
        url: "leggings_2.jpg"
      },
      {
        id: uuidv4(),
        name: "легинсы",
        category: "Легинсы",
        oldprice: 1600,
        todayprice: 1299,
        gender: "female",
        url: "leggings_3.jpg"
      },
      {
        id: uuidv4(),
        name: "поло",
        category: "Голубое поло",
        oldprice: 1600,
        todayprice: 1299,
        gender: "female",
        url: "blue_polo.jpg"
      },
      {
        id: uuidv4(),
        name: "поло",
        category: "Зеленое поло",
        oldprice: 1600,
        todayprice: 1299,
        gender: "female",
        url: "green_polo.jpg"
      },
      {
        id: uuidv4(),
        name: "поло",
        category: "Серое поло",
        oldprice: 1600,
        todayprice: 1299,
        gender: "female",
        url: "grey_polo.jpg"
      },
      {
        id: uuidv4(),
        name: "купальник",
        category: "Купальник",
        oldprice: 1600,
        todayprice: 1299,
        gender: "female",
        url: "swimsuit_3.jpg"
      },
      {
        id: uuidv4(),
        name: "купальник",
        category: "Купальник",
        oldprice: 1800,
        todayprice: 1699,
        gender: "female",
        url: "swimsuit_1.jpg"
      },
      {
        id: uuidv4(),
        name: "купальник",
        category: "Купальник",
        oldprice: 2600,
        todayprice: 2299,
        gender: "female",
        url: "swimsuit_2.jpg"
      },
      {
        id: uuidv4(),
        name: "брюки",
        category: "Брюки",
        oldprice: 2600,
        todayprice: 2299,
        gender: "female",
        url: "trousers_2.jpg"
      },
      {
        id: uuidv4(),
        name: "брюки",
        category: "Брюки",
        oldprice: 2700,
        todayprice: 2499,
        gender: "female",
        url: "trousers_1.jpg"
      },
      {
        id: uuidv4(),
        name: "брюки",
        category: "Брюки",
        oldprice: 2300,
        todayprice: 2000,
        gender: "female",
        url: "trousers_3.jpg"
      },
    ],


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
