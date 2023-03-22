<template>
  <div class="registration-body__order order-body">
    <div class="registration-body__purchases">
      <div class="registration-body__purchase">
        <div class="registration-body__img">
          <img :src="require('../assets/Catalog/' + product.url)" alt="" />
        </div>
        <div class="registration-body__name">
          <div class="registration-body__title">
            {{ product.category }}
            <p>{{ product.name }}</p>
          </div>
          <div class="registration-body__price">{{ product.todayprice }}</div>
        </div>
        <div class="registration-body__wrapper">
          <div class="registration-body__column">
            <div class="actions-product__quantity quantity">
              <button
                class="quantity__button quantity__button_left"
                @click="
                  substractCartItem(product);
                  deleteCartItem(product);
                "
              >
                -
              </button>
              <input
                class="quantity__input"
                type="text"
                v-model="quantityProd"
              />
              <button
                class="quantity__button quantity__button_right"
                @click="addToCartItem(product)"
              >
                +
              </button>
            </div>
          </div>
          <div class="registration-body__column">
            <div class="registration-body__label">Всего:</div>
            <div class="registration-body__price">
              {{ quantityProd * product.todayprice }}
            </div>
          </div>
        </div>
        <div class="registration-body__close"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import { ApolloClient } from "@apollo/client/core";
import { getClientOptions } from "src/apollo/index";

export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    // prodObj: {
    //   type: Object,
    //   default() {
    //     [];
    //   },
    // },
  },
  emits: ["productPrice"],
  setup(props, { emit }) {
    const prodObjs = ref([]);
    const quantityProd = ref(1);
    // PRODUCTS.values = computed(() => store.getters.PRODUCTS);

    const addToCartItem = function (product) {
      // prodObj.value.push(product.id);
      quantityProd.value += 1;
      const priceAdd = product.todayprice;
      emit("productPrice", priceAdd);
    };

    const substractCartItem = function (product) {
      // prodObj.value.push(product.id);
      if (quantityProd.value > 0) {
        quantityProd.value -= 1;
        const priceSubtract = -product.todayprice;
        emit("productPrice", priceSubtract);
      }
    };

    const deleteCartItem = function (product) {
      // console.log(product.id);
      const apolloClient = new ApolloClient(getClientOptions());

      provideApolloClient(apolloClient);
      const { mutate } = useMutation(
        gql`
          mutation MyMutation {
            delete_cartItems(where: { id: { _eq: 166) } }) {
              returning {
                category
              }
            }
          }
        `
      );
      mutate();
    };

    return {
      addToCartItem,
      substractCartItem,
      quantityProd,
      prodObjs,
      deleteCartItem,
    };
  },
};
</script>

<style lang="scss">
.registration-body {
  &__title {
    font-size: 20px;
  }
  &__form {
    margin: 28px 0 80px 0;
  }

  &__block {
  }

  &__close {
    position: absolute;
    top: 24px;
    right: 14px;
    width: 16px;
    height: 16px;
  }

  &__content {
  }

  &__order {
  }

  &__purchases {
    height: 250px;
  }

  &__purchase {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 0 11px 0;
    @media (max-width: 700px) {
      flex-wrap: wrap;
    }
  }

  &__img {
    flex: 0 0 136px;
    height: 100%;
    position: relative;
    margin: 0 46px 0 0;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    flex: 0 0 40%;
    @media (max-width: 500px) {
      flex: 0 0 100%;
    }
  }

  &__price {
    font-family: "Roboto-Black";
    font-size: 24px;
    line-height: 24px;
    color: #1ab9ce;
  }

  &__wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: flex-end;
    }
    @media (max-width: 700px) {
      flex: 1 0 100%;
      flex-direction: row;
      align-items: flex-start;
      margin: 20px 0 0 0;
    }
    @media (max-width: 500px) {
      flex: 0 0 100%;
      flex-direction: column;
    }
  }

  &__column {
    margin: 0 0 10px 0;
    &:last-child {
      margin: 0;
    }
  }

  &__label {
    font-family: "Roboto-Light";
    font-size: 25px;
    line-height: 22px;
    color: black;
  }
}

.actions-product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__column {
    position: relative;
    display: flex;
    align-items: center;
    flex-grow: 1;

    &:last-child {
      height: 52px;
      padding: 0 44px 0 0;
      flex-grow: 0;

      &::after {
        content: "";
        position: absolute;
        width: 52px;
        height: 52px;
        right: 0;
        top: 0;
      }
    }
  }

  &__prices {
  }

  &__old-price {
    font-family: Roboto-Light;
    font-size: 18px;
    line-height: 24px;
    text-decoration: line-through;
    color: #999999;
    margin: 0 0 12px 0;
  }

  &__today-price {
    font-family: Roboto-Black;
    font-size: 24px;
    line-height: 24px;
    color: #333333;
  }

  &__button_tab {
    width: 100%;
  }

  &__quantity {
  }

  &__cart {
    width: 115px;
    height: 34px;
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-family: Roboto-Black;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      color: #999999;
    }
  }
}
.quantity {
  display: flex;
  align-items: center;
  &__button {
    width: 40px;
    height: 40px;
    font-size: 25px;
    &_left {
      margin: 0 12px 0 0;

      &:hover {
        transform: rotate(180deg);
        background: orange;
      }
    }

    &_right {
      margin: 0 0 0 12px;

      &:hover {
        transform: rotate(0deg);
        background: orange;
      }
    }
  }

  &__input {
    width: 56px;
    height: 33px;
    background-color: #ffffff;
    border: 2px solid #e5e5e5;
    text-align: center;
    font-family: Roboto-Black;
    font-size: 16px;
    line-height: 1.2;
    color: #1ab9ce;
    font-size: 25px;
  }
}
</style>
