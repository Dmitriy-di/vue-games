<template>
  <div class="proudcts-slider-page__wrapper">
    <div class="proudcts-slider-page__item">
      <div class="proudcts-slider-page__wrapper">
        <div class="proudcts-slider-page__product product">
          <div class="product__img">
            <img :src="require('../assets/Catalog/' + product.url)" />
          </div>
          <div class="product__title">
            <p>
              <div>{{product.category}}<p>{{product.name}}</p></div>
            </p>
          </div>
          <div class="product__footer">
            <div class="product__oldprice">{{product.oldprice}}</div>
            <div class="product__buy">
              <a href="#" class="product__cart">
                <div></div>
              </a>
              <div class="product__todayprice">{{product.todayprice}}</div>
            </div>
          </div>
        </div>
        <div class="proudcts-slider-page__product-hover hover-product">
          <div class="hover-product__title">
            <p>{{product.name}}</p>
          </div>
          <div class="hover-product__options">
            <div class="hover-product__option">
              Категория:
              <p>{{product.category}}</p>
            </div>
          </div>

          <!-- <div class="hover-product__cart" @click="sendProdToCart(product); refetch()"> -->
          <div class="hover-product__cart" @click="sendProdToCart(product);">
            <q-item class="q-item-car-img" v-ripple>
                <img src="../assets/Catalog/cart_orange.webp" alt="" />
            </q-item>
            </div>
          <div class="hover-product__footer">
            <div class="hover-product__oldprice"><span>{{product.oldprice}}</span></div>
            <div class="hover-product__price">
              <div class="hover-product__button">в наличии</div>
              <div class="hover-product__todayprice">{{product.todayprice}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {computed } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { ApolloClient } from "@apollo/client/core";
import { getClientOptions } from "src/apollo/index";
import { useStore } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props) {
    const store = useStore();
    const refetch = store.getters.REFETCH;
    // const MESSAGES = gql`
    //     query MyQuery {
    //       products {
    //         category
    //         discount
    //         gender
    //         name
    //         oldprice
    //         todayprice
    //         url
    //       }
    //     }
    //   `

    // const messages = computed(() => store.getters.PRODUCTS);

    const sendProdToCart = function (product) {
      const apolloClient = new ApolloClient(getClientOptions());

      provideApolloClient(apolloClient);

      const { mutate: sendProduct } = useMutation(
        gql`
          mutation MyMutation(
            $category: String!
            $discount: Int!
            $gender: Boolean!
            $name: String!
            $oldprice: Int!
            $todayprice: Int!
            $url: String!
          ) {
            insert_cartItems_one(
              object: {
                category: $category
                discount: $discount
                gender: $gender
                name: $name
                oldprice: $oldprice
                todayprice: $todayprice
                url: $url
              }
            ) {
              category
              discount
              gender
              name
              oldprice
              todayprice
              url
            }
          }
        `,
        () => ({
          variables: {
            category: product.category,
            discount: product.discount,
            gender: product.gender,
            name: product.name,
            oldprice: product.oldprice,
            todayprice: product.todayprice,
            url: product.url,
          },
      //     update: (cache, { data: { sendProduct } }) => {
      //   let data = cache.readQuery({ query: MESSAGES })
      //   data = {
      //     ...data,
      //     messages: [
      //       ...data.messages,
      //       sendProduct,
      //     ],
      //   }
      //   cache.writeQuery({ query: MESSAGES, data })
      // },

        })
      );
      sendProduct();
    };
    return {
      sendProdToCart,
      refetch
    };
  },
};
</script>

<style lang="scss">
.q-item-car-img{
  display: block;
  cursor: pointer;
  height: 70px;
}
.proudcts-slider-page {
  &__slider-catalog {
    .product__todayprice {
      font-family: Roboto-Black;
    }
    .product__title {
      text-align: left;
      margin: 0 0 0px 0;
      a {
        font-size: 15px;
        text-transform: none;
        font-family: Roboto-Black;
        span {
          text-transform: inherit;
          font-size: 15px;
          display: block;
          color: inherit;
          font-family: Roboto-Light;
        }
      }
    }
  }

  &__wrapper {
    text-align: center;
    width: 265px;
    height: 385px;
    position: relative;
  }
  &__product-hover {
    padding: 20px 20px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.84);
    border: 5px solid #f68038;
    width: 100%;
    height: 100%;
  }

  &__slider {
    .product__todayprice {
      font-family: Roboto-Black;
    }
    .product__title {
      text-align: left;
      margin: 0 0 0px 0;
      a {
        font-size: 15px;
        text-transform: none;
        font-family: Roboto-Black;
        span {
          text-transform: inherit;
          font-size: 15px;
          display: block;
          color: inherit;
          font-family: Roboto-Light;
        }
      }
    }
    .hover-product {
      text-align: left;
    }
    max-width: 960px;
    @media (max-width: 1295px) {
      max-width: 900px;
    }
    @media (max-width: 1235px) {
      max-width: 820px;
    }
    @media (max-width: 1150px) {
      max-width: 740px;
    }
    @media (max-width: 1070px) {
      max-width: 670px;
    }
    @media (max-width: 992px) {
      max-width: 960px;
    }
    .slick-track {
      display: flex;
      width: 100%;
    }
    .slick-list {
      overflow: hidden;
    }
    .slick-slide {
      overflow: hidden;
      div {
      }
    }
  }

  &__item {
    overflow: hidden;
    flex: 1 1 auto;
    .hover-product {
      transition-duration: 0.3s;
      left: -100%;
    }
    &:hover {
      .hover-product {
        left: 0%;
      }
      .product__footer {
        display: none;
      }
      .product__title {
        display: none;
      }
    }
  }

  &__product {
    width: 100%;
    height: 100%;
    padding: 20px 17px 20px 17px;
    border: 1px solid #f5f5f5;
    .product__img {
      width: 100%;
      height: 213px;
    }
  }

  &__select {
    display: flex;
    justify-content: space-between;
    padding: 12px 0 12px 16px;
    border-bottom: solid 1px #ededed;
    border-top: solid 1px #ededed;
    @media (max-width: 540px) {
      display: block;
    }
  }

  &__label {
    font-family: Roboto-Black;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    margin: 0 15px 0 0;
  }

  &__wrapper-select {
    select {
      padding: 4px 2px 4px 8px;
      font-family: Roboto-Black;
      font-size: 16px;
      line-height: 1.2;
      color: #999999;
    }
  }
}
.btnAdd {
  cursor: pointer;
}
.product {
  &__img {
    display: block;
    width: 225px;
    height: 147px;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    padding: 5px 0 16px 0px;
    a {
      font-family: Roboto-Light;
      font-size: 16px;
      line-height: 24px;
      color: #36949f;
    }
  }

  &__name {
  }

  &__footer {
  }

  &__oldprice {
    text-align: right;
    font-size: 18px;
    line-height: 24px;
    text-decoration: line-through;
    color: #999999;
  }

  &__buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__cart {
    div {
      display: inline-block;
    }
  }

  &__todayprice {
    font-family: Roboto-Light;
    font-size: 24px;
    line-height: 24px;
    color: #333333;
  }
}
.hover-product {
  display: flex;
  flex-direction: column;
  &__title {
    font-family: Roboto-Black;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    margin: 0 0 29px 0;
    p {
      font-family: Roboto-Light;
      color: #c2c2c2;
    }
  }

  &__options {
  }

  &__option {
    font-family: Roboto-Regular;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    margin: 0 0 12px 0;
    p {
      font-family: Roboto-Black;
      color: #f68038;
      line-height: 18px;
    }
  }

  &__cart {
    display: flex;
    justify-content: center;
    text-align: center;
    flex: 1 1 auto;
    img {
    }
    &_catalog {
      flex: 0 1 auto;
    }
    &_link {
      justify-content: start;
      font-family: Roboto-Light;
      font-size: 14px;
      line-height: 18px;
      color: #ffffff;
      span {
        padding: 0 0 0 31px;
      }
    }
  }

  &__footer {
  }

  &__button {
    background-color: #ffffff;
    padding: 0 10px;
    border-radius: 20px;
    font-family: Roboto-Light;
    font-size: 25px;
    line-height: 18px;
    color: #f68038;
    height: 21px;
  }

  &__price {
    font-family: Roboto-Black;
    font-size: 24px;
    line-height: 24px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
  }

  &__oldprice {
    font-family: Roboto-Light;
    font-size: 18px;
    text-decoration: line-through;
    color: #999999;
    text-align: right;
    margin: 0 0 3px 0;
  }

  &__todayprice {
    display: flex;
    align-items: flex-end;
  }
}
</style>
