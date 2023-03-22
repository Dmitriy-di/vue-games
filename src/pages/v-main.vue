<template>
  <div>
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
            <p><span>Успей купить</span> одежду</p>
            <p>по старой цене</p>
            <p>до их <span>повышения</span></p>
          </div>
          <div class="content-slider__footer">
            <div class="content-slider__footerblock">
              <div class="content-slider__price"><span>от</span> 1000</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-category">
      <div class="content-category__men">
        <div class="content-category__text">
          <p>Мужское</p>
        </div>
        <img src="~assets/Main/men.jpg" alt="Мужское" />
        <div class="content-category__btn">
          <router-link to="/catalog"
            ><button @click="clickMale">подробнее</button></router-link
          >
        </div>
      </div>
      <div class="content-category_women">
        <div class="content-category__text">
          <p>Женское</p>
        </div>

        <div>
          <img src="~assets/Main/women.jpg" alt="Женское" />
        </div>
        <div class="content-category__btn">
          <router-link to="/catalog"
            ><button @click="clickFemale">подробнее </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    // male: {
    //   type: String,
    //   default() {
    //     return {};
    //   },
    // },
    // famale: {
    //   type: String,
    //   default() {
    //     return {};
    //   },
    // },
  },
  emits: ["male", "female"],
  setup(props) {
    const male = "Мужская одежда";
    const female = "Женская одежда";
    const clickMale = function () {
      emit("clickMale", male);
    };
    const clickFemale = function () {
      emit("clickFemale", female);
    };

    return {
      clickMale,
      clickFemale,
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
    color: #f30505;
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
    color: #f11b1b;
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
        background-color: #948f8f;
        padding: 7px 9px;
        line-height: 11px;
      }
      &:last-child {
        span {
          color: #f68038;
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

.content-category {
  padding: 21px 36px 58px 21px;
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  gap: 16px;

  &__text {
    position: rative;
    color: #858080;
    font-size:150%;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }

  &__btn {
    margin: 14px 150px ;
    padding:18px;
    text-align: center;
    font-size: 24px;
    border-radius: 24px;
    background: rgb(240,240,240);
    
    

  }
}

@media (max-width: 1600px) {
  .content-category {
    width: 100%;
    flex-direction: column;
    align-items: center;
  } 
}



</style>
