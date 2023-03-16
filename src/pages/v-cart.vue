<template>
  <div>
    <CartForm />
    <CartItem v-for="product in products.values" :key="product.id" />
  </div>
</template>

<script>
import CartForm from "../components/v-cart-form.vue";
import CartItem from "../components/v-cart-item.vue";
import { reactive } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  components: {
    CartForm,
    CartItem,
  },
  setup() {
    const products = reactive([]);

    const { result, loading, error } = useQuery(gql`
      query MyQuery {
        cartItems {
          category
          discount
          gender
          name
          oldprice
          todayprice
          url
          id
        }
      }
    `);
    products.values = result?.value?.cartItems;
    console.log(products.values);

    return {
      products,
    };
  },
};
</script>

<style></style>
