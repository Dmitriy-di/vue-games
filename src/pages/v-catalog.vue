<template>
  <div class="">
    
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import Slide from "../components/v-catalog-slide.vue";

export default {
  components: {
    Slide,
  },
  setup() {
    const $store = useStore();
    const products = $store.state.products;
    console.log();
    return {
      slide: ref(1),
      products,
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
