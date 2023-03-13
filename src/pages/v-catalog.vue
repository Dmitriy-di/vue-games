<template>
  <div class="">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      navigation
      padding
      infinite
      arrows
      height="100%"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1">
        <div class="wrap">
          <Slide
            v-for="product in products.slice(0, 2)"
            :key="product.id"
            :product="product"
            class="proudcts-slider-page__item"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <div class="wrap">
          <Slide
            v-for="product in products.slice(2)"
            :key="product.id"
            :product="product"
            class="proudcts-slider-page__item"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
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
