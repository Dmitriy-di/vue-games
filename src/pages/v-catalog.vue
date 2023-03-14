<template>
  <div class=""></div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import Slide from "../components/v-catalog-slide.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  components: {
    Slide,
  },
  setup() {
    const $store = useStore();
    const products = $store.state.products;

    const { result, loading, error } = useQuery(gql`
      query MyQuery {
        products {
          category
          gender
          id
          name
          oldprice
          todayprice
        }
      }
    `);
    console.log(result.value);

    return {
      slide: ref(1),
      products,
      result,
      loading,
      error,
    };
  },
};
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  justify-content: space-between;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
