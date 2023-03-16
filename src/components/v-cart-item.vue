<template>
  <div class="registration-body__order order-body">
    <div class="order-body__title">Ваш заказ</div>
    <div class="registration-body__purchases">
      <div class="registration-body__purchase">
        <div class="registration-body__img"><img src="" alt="" /></div>
        <div class="registration-body__name">
          <div class="registration-body__title">
            BH Fitness F1 G6414V <span>Беговая дорожка</span>
          </div>
          <div class="registration-body__price">64 990 ₽</div>
        </div>
        <div class="registration-body__wrapper">
          <div class="registration-body__column">
            <div class="actions-product__quantity quantity">
              <button class="quantity__button quantity__button_left" @click="deleteFromCart">-</button>
              <input class="quantity__input" type="text" value="1" />
              <button class="quantity__button quantity__button_right" @click="addToCart" >+</button>
            </div>
          </div>
          <div class="registration-body__column">
            <div class="registration-body__label">Всего:</div>
            <div class="registration-body__price">64 990 ₽</div>
          </div>
        </div>
        <div class="registration-body__close"></div>
      </div>
      <div class="registration-body__result">
        <div class="registration-body__total">
          Итого: <span>120 000 ₽</span>
        </div>
        <a href="#" class="registration-body__issue">Оформить заказ</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
methods: {
        addToCart() {
            this.$emit("addToCart");
        },
        deleteFromCart() {
            this.$emit("deleteFromCart");
        },
    },
  }

</script>

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
      width: 20px;
      height: 17px;
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
      color: #999999;
   }
}


</style>
