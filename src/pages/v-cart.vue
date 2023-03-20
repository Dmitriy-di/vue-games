<template>
  <div>
    <div class="order-body__title">Ваш заказ</div>

    <CartItem
      v-model="productAll"
      v-for="product in CART_PRODUCTS.values"
      :key="product.id"
      :product="product"
    />
    <CartForm />
    <div class="registration-body__result">
      <div class="registration-body__total">
        Итого: <span> {{ TOTALSUM }} ₽</span>
      </div>
      <div class="registration-body__issue" @click="a">Оформить заказ</div>
    </div>
  </div>
</template>

<script>
import CartForm from "../components/v-cart-form.vue";
import CartItem from "../components/v-cart-item.vue";
import { reactive, computed, onMounted } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useStore } from "vuex";

export default {
  components: {
    CartForm,
    CartItem,
  },
  setup() {
    const store = useStore();
    const CART_PRODUCTS = reactive([]);
    store.dispatch("GET_CART_PRODUCTS");

    onMounted(() => {
      CART_PRODUCTS.values = computed(() => store.getters.CART_PRODUCTS);
    });

    return {
      CART_PRODUCTS,
    };
  },
};
</script>

<style lang="scss">
.order-body {
  &__title {
    font-family: Roboto-Black;
    font-size: 36px;
    line-height: 22px;
    font-weight: 900;
    text-transform: uppercase;
    color: #1ab9ce;
    margin: 0 0 31px 0;
    @media (max-width: 600px) {
      font-size: 30px;
    }
  }
}
.registration-body {
  &__result {
    text-align: end;
  }

  &__total {
    font-family: "Roboto-Black";
    font-size: 24px;
    line-height: 16px;
    margin: 0 0 28px 0;
    text-transform: uppercase;
    color: #333333;
    @media (max-width: 1200px) {
      font-size: 18px;
    }
    @media (max-width: 500px) {
      margin: 0 0 15px 0;
      font-size: 15px;
    }
    span {
      font-family: "Roboto-Black";
      font-size: 36px;
      line-height: 24px;
      color: #f68038;
      @media (max-width: 1200px) {
        font-size: 26px;
      }
      @media (max-width: 500px) {
        font-size: 21px;
      }
    }
  }

  &__issue {
    cursor: pointer;
    display: inline-block;
    border-radius: 15px;
    font-family: "Roboto-Black";
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    background-color: #f68038;
    padding: 5px 20px;
    color: #ffffff;
    &:hover {
      transition-duration: 0.2s;
      background-color: #1ab9ce;
    }
  }
}
</style>
