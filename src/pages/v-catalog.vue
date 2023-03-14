<template>
  <div class="catalog">
    <div class="catalog__panel-options">
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
          <q-badge color="secondary" multi-line> "{{ model }}" </q-badge>

          <q-select
            filled
            v-model="model"
            :options="options"
            label="Multi with toggle"
            multiple
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
      <Slide
        v-for="product in products.values"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { watch, ref, computed, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import Slide from "../components/v-catalog-slide.vue";
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";

export default {
  components: {
    Slide,
  },
  setup() {
    const products = reactive([]);
    const model = ref([]);

    watch(model, () => {
      const { result, loading, error } = useQuery(gql`
        query MyQuery {
          products(
            where: {
              category: { _eq: "Бриджи" }
              _and: { gender: { _eq: true } }
            }
          ) {
            category
            discount
            gender
            id
            name
            oldprice
            todayprice
            url
          }
        }
      `);
      products.values = result?.value?.products;
      console.log(result?.value?.products);
    });

    const { result, loading, error } = useQuery(gql`
      query MyQuery {
        products {
          category
          discount
          gender
          id
          name
          oldprice
          todayprice
          url
        }
      }
    `);
    products.values = result?.value?.products;

    return {
      slide: ref(1),
      products,
      model,

      options: [
        {
          label: "Мужская одежда",
          value: 1,
        },
        {
          label: "Женская",
          value: 2,
        },
        {
          label: "По цене",
          value: 3,
        },
        {
          label: "Apple",
          value: "123",
        },
        {
          label: "Oracle",
          value: 5,
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
  margin: 180px 0 0 0;
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
</style>
