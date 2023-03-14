<template>
  <div class="q-pa-md">
    <div class="main__wrapper">
      <q-carousel
        class="main__carousel"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          :name="1"
          img-src="../assets/Main/1.webp"
        ></q-carousel-slide>
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        ></q-carousel-slide>
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        ></q-carousel-slide>
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        ></q-carousel-slide>
      </q-carousel>
      <div class="slider-body__content content-slider">
        <div class="content-slider__title">
          <p>Мега</p>
          <p>распродажа</p>
        </div>
        <div class="content-slider__text">
          <p><span>Успей купить</span> тренажеры</p>
          <p>по старой цене</p>
          <p>до их <span>повышения</span></p>
        </div>
        <div class="content-slider__footer">
          <div class="content-slider__footerblock">
            <div class="content-slider__price"><span>от</span> 45 000</div>
            <a href="#" class="content-slider__button"
              ><span>Подробнее</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style lang="scss">
.q-carousel__navigation-inner {
  position: relative;
  z-index: 1;
}
.main {
  &__wrapper {
    position: relative;
  }
  &__carousel {
    position: absolute !important;
    width: 100%;
    height: 100%;
  }
}
.content-slider {
  position: relative;

  padding: 21px 36px 58px 21px;
  &__title {
    font-family: Roboto-Black;
    line-height: 1.2;
    line-height: 43px;
    font-size: 48px;
    color: #333333;
    text-transform: uppercase;
    margin: 0 0 53px 0;
    p {
      &:first-child {
        color: #f68038;
      }
    }
    @media (max-width: $md3+px) {
      margin: 0 0 25px 0;
      font-size: 30px;
      line-height: 35px;
    }
  }

  &__text {
    font-family: Roboto-Black;
    text-transform: uppercase;
    color: #333333;
    font-size: 14px;
    line-height: 24px;
    margin: 0 0 16px 0;
    p {
      &:first-child {
        span {
          color: #f68038;
          font-size: 18px;
        }
      }
      &:nth-child(2) {
        color: #ffffff;
        display: inline-block;
        background-color: #979797;
        padding: 7px 9px;
        line-height: 11px;
      }
      &:last-child {
        span {
          color: #979797;
        }
      }
    }
  }

  &__footer {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  &__footerblock {
    display: inline-block;
  }

  &__price {
    font-family: Roboto-Black;
    font-size: 36px;
    line-height: 24px;
    color: #ffffff;
    margin: 0 0 24px 0;
    padding: 0 29px 0 0;
    background: url("/Mine/Project/Sportshop/img/imgSlider/rouble.png") right
      center no-repeat;
    @media (max-width: $md3+px) {
      font-size: 25px;
      background-size: 15px;
      padding: 0 20px 0 0;
    }
  }

  &__button {
    display: block;
    width: 145px;
    margin: 0 auto;
    padding: 0 8px 0 16px;
    font-family: Roboto-Black;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ffffff;
    border: 3px solid #ffffff;
    border-radius: 15px;
    span {
      display: flex;
      align-items: center;
      &:after {
        content: "";
        display: inline-block;
        margin: 0 0 0 5px;
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>
