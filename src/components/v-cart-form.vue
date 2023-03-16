<template>
  <div class="registration-body__block block-registration">
    <div
      class="block-registration__column block-registration__column_breakpoint info-product__button_tab active"
    >
      <div class="block-registration__row">
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Фамилия:&nbsp;<span>*</span></label
          >
          <input type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Имя:&nbsp;<span>*</span></label
          >
          <input type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Отчество:&nbsp;<span>*</span></label
          >
          <input type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Моб. телефон:&nbsp;<span>*</span></label
          >
          <input type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Ваш E-mail:&nbsp;<span>*</span></label
          >
          <input type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label">Способ оплаты:</label>
          <input type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Индекс&nbsp;<span>*</span></label
          >
          <input type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Город&nbsp;<span>*</span></label
          >
          <input type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label"
            >Адрес доставки:&nbsp;<span>*</span></label
          >
          <input type="text" class="block-registration__input" />
        </div>
        <div class="block-registration__item">
          <label for="" class="block-registration__label">Комментарии:</label>
          <textarea
            type="text"
            class="block-registration__input block-registration__input_b"
          ></textarea>
        </div>
        <div class="block-registration__subscribe">
          <input
            class="block-registration__checkbox"
            id="checkbox"
            type="checkbox"
          />
          <label for="checkbox" class="block-registration__text"
            >Подписаться на новости и скидки</label
          >
          
        </div>
        &nbsp;<span>*</span> Поля, обязательные для заполнения<br>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.registration-body {
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
    width: 360px;
    height: 31px;
    border: 1px solid #e5e5e5;
    font-family: "Roboto-Black";
    font-size: 14px;
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
    font-size: 14px;
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
