<template>
  <div>
    <q-toolbar class="header__top">
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      <q-toolbar-title class="header__title">
        <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar> -->
        LOGO
        <div id="user-button">32</div>
        <!-- <Registration /> -->
      </q-toolbar-title>
    </q-toolbar>
    <q-toolbar class="header__bottom">
      <div class="bottom-header__container">
        <div class="bottom-header__column">
          <ul class="bottom-header__actions actions-header">
            <li>
              <div id="auth-links">
                <button
                  onclick="Clerk.openSignIn()"
                  class="actions-header__item actions-header_login"
                >
                  <span>Вход</span>
                </button>
                <button
                  onclick="Clerk.openSignUp()"
                  class="actions-header__item actions-header_reg"
                >
                  <span>Регистрация</span>
                </button>
              </div>
            </li>
            <li>
              <a
                href="mailto:sport@gmail.com"
                class="actions-header__item actions-header_email"
                ><span>sport@gmail.com</span></a
              >
            </li>
          </ul>
        </div>
        <div class="bottom-header__column">
          <div class="bottom-header__info info-header">
            <div class="info-header__column">
              <a href="#" class="info-header__collback"
                ><span>Обратный звонок</span></a
              >
            </div>
            <div class="info-header__column">
              <div class="info-header__schedul">
                <p><span>Пн–Пт:</span> 09:00–21:00;</p>
                <p><span>Сб–Вс:</span> 10:00–20:00</p>
              </div>
            </div>
            <div class="info-header__column info-header__column_orange">
              <i class="v-catalog__icons material-icons basket"
                >shopping_basket
              </i>
              <span class="info-header__cart">12</span>
            </div>
          </div>
        </div>
      </div>
    </q-toolbar>
    <!-- <Login v-model="showLogIn" />
    <Registration v-model="showSignUp" /> -->
  </div>
</template>

<script>
import { ref } from "vue";
import Registration from "../components/v-registration.vue";
import Login from "../components/v-login.vue";

//import Clerk from "@clerk/clerk-js";
const publishableKey =
  "pk_test_ZWxlY3RyaWMtdGFoci00OS5jbGVyay5hY2NvdW50cy5kZXYk"; // <- Add Publishable Key here

const startClerk = async () => {
  const Clerk = window.Clerk;

  try {
    // Load Clerk environment and session if available
    await Clerk.load();

    const userButton = document.getElementById("user-button");
    const authLinks = document.getElementById("auth-links");
    console.log(userButton);
    console.log(authLinks);

    Clerk.addListener(({ user }) => {
      // Display links conditionally based on user state
      authLinks.style.display = user ? "none" : "flex";
    });

    if (Clerk.user) {
      // Mount user button component
      Clerk.mountUserButton(userButton);
      userButton.style.margin = "auto";
      //==============================================
    }
  } catch (err) {
    console.error("Error starting Clerk: ", err);
  }
};

(() => {
  const script = document.createElement("script");
  script.setAttribute("data-clerk-publishable-key", publishableKey);
  script.async = true;
  script.src = `https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js`;
  script.crossOrigin = "anonymous";
  script.addEventListener("load", startClerk);
  script.addEventListener("error", () => {
    document.getElementById("no-frontend-api-warning").hidden = false;
  });
  document.body.appendChild(script);
})();

export default {
  components: {
    Registration,
    Login,
  },

  props: {},
  setup(props, { emit }) {
    const toggleLeftDrawer = function () {
      emit("toggleLeftDrawer");
    };

    return {
      showLogIn: ref(false),
      showSignUp: ref(false),
      toggleLeftDrawer,
    };
  },
};
</script>

<style lang="scss">
#auth-links {
  display: flex;
}
.header {
  &__title {
    text-align: center;
  }
}

.bottom-header {
  &__container {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    width: 100%;

    @media (max-width: 640px) {
      height: 0;
    }
  }

  &__column {
  }
}

.actions-header {
  @media (max-width: 640px) {
    justify-content: space-between;
  }

  span {
    display: block;
    border-bottom: dotted 2px white;

    &:hover {
      transition-duration: 400ms;
      border-bottom-color: #1ab9ce;
    }
  }

  &_login {
    margin: 0 20px 0 0;
    background-color: transparent;
  }

  &_reg {
    background-color: transparent;
  }

  &_email {
    span {
      border-bottom: solid 1px white;

      &:hover {
        transition-duration: 100ms;
        border-bottom-color: #1ab9ce;
      }
    }
  }

  //z-index
  display: flex;

  &__item {
    color: white;
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 0px 0 30px;

    @media (max-width: 991.98px) {
      background: none;
      padding: 0 0px 0 0px;
    }

    &:hover {
      color: #1ab9ce;
      transition-duration: 100ms;
    }
  }

  li {
    font-family: Roboto-Light;
    font-size: 14px;
    line-height: 18px;
    padding: 0 55px 0 0px;

    @media (max-width: 1110px) {
      padding: 0 30px 0 0px;
    }

    @media (max-width: 640px) {
      font-size: 16px;
      padding: 0 0px 0 0px;
    }

    &:last-child {
      padding: 0;
    }
  }
}

.info-header {
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    margin: 30px 0 0 0;
    justify-content: space-between;
  }

  &__column {
    font-family: Roboto-Light;
    margin: 0 40px 0 0;

    @media (max-width: 991.98px) {
      margin: 0 20px 0 0;
    }

    &:hover {
      color: #1ab9ce;
      transition-duration: 400ms;
    }

    &:last-child {
      margin: 0;
    }
  }

  &__collback {
    font-size: 14px;
    color: white;
    padding: 0 0 0 30px;

    @media (max-width: 640px) {
      font-size: 16px;
    }

    @media (max-width: 991.98px) {
      background: none;
      padding: 0 0 0 0px;
    }

    span {
      border-bottom: dotted 2px white;

      &:hover {
        transition-duration: 100ms;
        border-bottom-color: #1ab9ce;
      }
    }

    &:hover {
      color: #1ab9ce;
      transition-duration: 100ms;
    }
  }

  &__schedul {
    padding: 0 0 0 30px;

    @media (max-width: 975px) {
      display: none;
    }

    p {
      font-family: Roboto-Light;
      color: white;
      font-size: 12px;
      font-weight: 900;
      color: white;
    }

    span {
      font-family: Roboto-Black;
    }
  }

  &__column_orange {
    position: relative;
    width: 39px;
    height: 39px;
  }

  &__cart {
    position: absolute;
    right: -12px;
    font-family: "Roboto";
    font-weight: 700;
    color: #ffffff;
    display: flex;
    width: 41px;
    height: 25px;
    background-color: #f68038;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
}

.basket {
}
</style>
