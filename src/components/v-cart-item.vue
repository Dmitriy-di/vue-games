<template>
  <div class="registration-body__order order-body">
    <div class="order-body__title">Ваш заказ</div>
    <a href="#" class="registration-body__issue">Оформить заказ</a>
  </div>
</template>

<script></script>

<style lang="scss">
.registration-body {
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
</style>
