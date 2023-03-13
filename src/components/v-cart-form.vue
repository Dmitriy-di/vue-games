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
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
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
    width: 216px;
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
