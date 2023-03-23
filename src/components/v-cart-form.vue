<template>
  <form
    class="registration-body__block block-registration"
    @submit.prevent="getFormValues"
  >
    <div
      class="block-registration__column block-registration__column_breakpoint info-product__button_tab active"
    >
      <div class="block-registration__row q-mb-md">
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Фамилия:&nbsp;<span>*</span></label
          >
          <input name="surname" type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Имя:&nbsp;<span>*</span></label
          >
          <input name="name" type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Отчество:&nbsp;<span>*</span></label
          >
          <input
            name="patronymic"
            type="text"
            class="block-registration__input"
          />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Моб. телефон:&nbsp;<span>*</span></label
          >
          <input
            name="telephone"
            type="text"
            class="block-registration__input"
          />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Ваш E-mail:&nbsp;<span>*</span></label
          >
          <input name="eMail" type="text" class="block-registration__input" />
        </div>
        <!-- <div class="block-registration__item">
          <label for="" class="block-registration__label">Способ оплаты:</label>
          <input name="name" type="text" class="block-registration__input" />
        </div> -->
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Индекс&nbsp;<span>*</span></label
          >
          <input name="index" type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Город&nbsp;<span>*</span></label
          >
          <input name="city" type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Адрес доставки:&nbsp;<span>*</span></label
          >
          <input name="adress" type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label">Комментарии:</label>
          <textarea
            type="text"
            class="block-registration__input block-registration__input_b"
          ></textarea>
        </div>
        <div class="block-registration__subscribe q-mt-md">
          &nbsp;<span>*</span> Поля, обязательные для заполнения
        </div>
      </div>
    </div>
    <div class="registration-body__send">
      <button type="submit" class="registration-body__issue">
        Оформить заказ
      </button>
    </div>
  </form>
</template>

<script>
import { provideApolloClient } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import { ApolloClient } from "@apollo/client/core";
import { getClientOptions } from "src/apollo/index";
import { useQuasar } from "quasar";
import { getCurrentInstance } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const instance = getCurrentInstance();

    const getFormValues = function (e) {
      const apolloClient = new ApolloClient(getClientOptions());

      provideApolloClient(apolloClient);
      if (
        Array.from(e.target.elements)
          .map((a) => Boolean(a.value))
          .reduce((a, b) => a + b, 0) == 8
      ) {
        const { mutate } = useMutation(
          gql`
            mutation MyMutation(
              $adress: String!
              $city: String!
              $eMail: String!
              $index: String!
              $name: String!
              $patronymic: String!
              $surname: String!
              $telephone: Int!
            ) {
              insert_orders_one(
                object: {
                  adress: $adress
                  city: $city
                  eMail: $eMail
                  index: $index
                  name: $name
                  patronymic: $patronymic
                  surname: $surname
                  telephone: $telephone
                }
              ) {
                adress
                city
                eMail
                index
                name
                patronymic
                surname
                telephone
              }
            }
          `,
          () => ({
            variables: {
              adress: e.target.elements.adress.value,
              city: e.target.elements.city.value,
              // comment: e.target.elements.comment.value,
              eMail: e.target.elements.eMail.value,
              index: e.target.elements.index.value,
              name: e.target.elements.name.value,
              patronymic: e.target.elements.patronymic.value,
              surname: e.target.elements.surname.value,
              telephone: e.target.elements.telephone.value,
            },
          })
        );
        mutate();
        $q.notify({
          type: "positive",
          message: "Отправлено",
        });
      } else {
        console.log("Не все поля заполнены");
        $q.notify({
          type: "negative",
          message: "Не все обязательные поля заполнены",
        });
      }
    };
    return {
      getFormValues,
    };
  },
};
</script>

<style lang="scss">
.registration-body {
  &__form {
    margin: 28px 0 80px 0;
  }
  &__send {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: right;
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
  }

  &__purchase {
    display: flex;
    align-items: center;
    position: relative;
    padding: 25px 55px 25px 25px;
    margin: 0 0 11px 0;
    @media (max-width: 700px) {
      flex-wrap: wrap;
    }
  }

  &__img {
    flex: 0 0 106px;
    height: 100px;
    position: relative;
    margin: 0 46px 0 0;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__name {
    flex: 0 0 40%;
    @media (max-width: 500px) {
      flex: 0 0 100%;
    }
  }

  &__title {
    font-family: "Roboto-Black";
    font-size: 14px;
    line-height: 22px;
    color: #36949f;
    span {
      font-family: "Roboto-Light";
      white-space: nowrap;
    }
    margin: 0 0 6px 0;
  }

  &__price {
    font-family: "Roboto-Black";
    font-size: 24px;
    line-height: 24px;
    color: #333333;
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
    font-size: 16px;
    line-height: 22px;
    color: #999999;
  }

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

.block-registration {
  padding: 0 45px;
  display: flex;
  margin: 0 0 47px 0;
  @media (max-width: 1200px) {
    display: block;
    padding: 0;
  }
  &__column {
    flex: 0 0 50%;
    span {
      color: #f68038;
    }
    &:last-child {
      flex-shrink: 1;
      font-family: "Roboto-Light";
      font-size: 12px;
      line-height: 18px;
      color: #666666;
    }
    &.info-product__button_tab {
      margin: 0 45px 0 0;
      display: none;
      @media (max-width: 1200px) {
        margin: 0;
      }
    }
    &.active {
      display: block;
    }
    &_breakpoint {
      @media (max-width: 1200px) {
        margin: 0 0px 30px 0;
      }
    }
  }

  &__row {
  }

  &__input {
    width: 60%;
    border: 1px solid #1ab9ce !important;
    height: 31px;
    border: 1px solid #e5e5e5;
    font-family: "Roboto-Black";
    font-size: 18px;
    line-height: 40px;
    color: #333333;
    @media (max-width: 1200px) {
      width: 80%;
    }
    @media (max-width: 880px) {
      width: 70%;
    }
    @media (max-width: 600px) {
      width: 60%;
    }
    @media (max-width: 400px) {
      width: 50%;
    }
    &_b {
      line-height: 20px;
      height: 121px;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__label {
    font-family: "Roboto-Black";
    font-size: 18px;
    line-height: 40px;
    color: #333333;
    margin: 0 20px 0 0;
    span {
      color: #f68038;
    }
  }

  &__subscribe {
    text-align: end;
    @media (max-width: 1200px) {
      text-align: left;
    }
  }

  &__checkbox {
  }

  &__text {
    display: inline-block;
    font-family: "Roboto-Light";
    font-size: 12px;
    line-height: 40px;
    color: #666666;
  }
}
</style>
