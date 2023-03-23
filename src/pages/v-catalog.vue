<template>
  <div class="catalog">
    <div class="catalog__panel-options">
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
          <q-badge color="secondary" multi-line> "{{ model }}" </q-badge>
          <q-select
            class="category"
            filled
            v-model="model"
            :options="options"
            label="Категория"
            emit-value
            map-options
          >
            <template
              v-slot:option="{ itemProps, opt, selected, toggleOption }"
            >
              <q-item v-bind="itemProps">
                <q-item-section>
                  <q-item-label v-html="opt.label" />
                </q-item-section>
                <q-item-section side>
                  <q-toggle
                    :model-value="selected"
                    @update:model-value="toggleOption(opt)"
                  />
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
    </div>
    <div class="catalog__wrap">
      <div v-if="loading">
        <q-circular-progress
          indeterminate
          rounded
          size="50px"
          color="lime"
          class="q-ma-md"
        />
      </div>
      <Slide
        v-for="(product, index) in PRODUCTS_FILTER.values"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { watch, ref, reactive, computed } from "vue";
import Slide from "../components/v-catalog-slide.vue";
import { provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import { ApolloClient } from "@apollo/client/core";
import { getClientOptions } from "src/apollo/index";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    Slide,
  },
  setup() {
    const store = useStore();
    store.dispatch("GET_PRODUCTS");
    const PRODUCTS = reactive([]);
    const PRODUCTS_FILTER = reactive([]);
    const loading = computed(() => store.getters.LOADING_CATALOG);
    PRODUCTS.values = computed(() => store.getters.PRODUCTS);
    PRODUCTS_FILTER.values = store.getters.PRODUCTS_FILTER;

    var model = ref("Все товары");
    const genderParam = useRouter().currentRoute.value.query.gender

    switch (genderParam) {
      case 'male': {
        model = ref("Мужская одежда");
        setTimeout(() => {
          PRODUCTS_FILTER.values = PRODUCTS.values.filter(
            (p) => {
              console.log(p.gender);
              return p.gender == true
            }
          );
        }, 300)
        break;
      }
      case 'female': {
        model = ref("Женская одежда");
        setTimeout(() => {
          PRODUCTS_FILTER.values = PRODUCTS.values.filter(
            (p) => p.gender == false
          );
        }, 300)
        break;
      }
      default: {
        model = ref("Все товары");
      }
    }

    watch(model, () => {
      switch (model.value) {
        case "Все товары":
          PRODUCTS_FILTER.values = PRODUCTS.values;
          break;
        case "Мужская одежда":
          PRODUCTS_FILTER.values = PRODUCTS.values.filter(
            (p) => {
              return p.gender == true
            }
          );
          break;
        case "Женская одежда":
          PRODUCTS_FILTER.values = PRODUCTS.values.filter(
            (p) => p.gender == false
          );
          break;
        case "По цене":
          PRODUCTS_FILTER.values = [...PRODUCTS_FILTER.values].sort((a, b) =>
            a.todayprice > b.todayprice ? 1 : -1
          );
          break;
      }
      return PRODUCTS_FILTER;
    });

    const sendProdToCart = function (index) {
      const apolloClient = new ApolloClient(getClientOptions());

      provideApolloClient(apolloClient);

      const { mutate } = useMutation(
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
            category: PRODUCTS.values[index].category,
            discount: PRODUCTS.values[index].discount,
            gender: PRODUCTS.values[index].gender,
            name: PRODUCTS.values[index].name,
            oldprice: PRODUCTS.values[index].oldprice,
            todayprice: PRODUCTS.values[index].todayprice,
            url: PRODUCTS.values[index].url,
          },
        })
      );
      mutate();
    };
    return {
      loading,
      PRODUCTS_FILTER,
      model,
      sendProdToCart,
      PRODUCTS,
      options: [
        {
          label: "Все товары",
          value: "Все товары",
        },
        {
          label: "Мужская одежда",
          value: "Мужская одежда",
        },
        {
          label: "Женская одежда",
          value: "Женская одежда",
        },
        {
          label: "По цене",
          value: "По цене",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.order-catalog {
  display: flex;
  align-items: center;
  @media (max-width: 530px) {
    margin: 0 0 16px 0;
    display: block;
  }
  &__label {
    font-family: Roboto-Black;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
    margin: 0 34px 0 0;
    @media (max-width: 530px) {
      display: block;
      margin: 0 0 7px 0;
    }
  }

  &__select {
    color: #0097ac;
    select {
      color: #0097ac;
      width: 120px;
      @media (max-width: 530px) {
        width: 100%;
      }
    }
  }

  &__item {
    font-family: Roboto-Light;
    font-size: 14px;
    line-height: 1.2;
    color: #0097ac;
  }
}
.catalog {
  padding: 21px 52px 58px 21px;
  background-color: #e4dcdc;
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__panel-options {
    width: 100%;
    height: 100px;
  }
  margin: 0 0 15px 0;
  &__title {
    font-family: Roboto-Black;
    font-size: 30px;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    color: #dadada;
    margin: 0 0 24px 0;
  }

  &__action {
    display: flex;
    justify-content: space-between;
    background-color: #f3f3f3;
    padding: 7px 17px;
    @media (max-width: 530px) {
      display: block;
    }
  }

  &__order {
  }

  &__view {
  }
}

.category {
  margin-top: 5px;
}
</style>
