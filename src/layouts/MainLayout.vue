<template>
  <q-layout view="hHh LpR fff">
    <q-header elevated class="bg-primary text-white">
      <Header @toggleLeftDrawer="toggleLeftDrawer" />
    </q-header>
    <q-drawer
      class="q-ma-md"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <q-item to="/" exact clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="style" color="white" />
        </q-item-section>
        <q-item-section> Main </q-item-section>
      </q-item>
      <q-item to="/catalog" exact clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="style" color="white" />
        </q-item-section>
        <q-item-section> Catalog </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { computed, ref } from "vue";
import Header from "../components/v-header.vue";
import Main from "../pages/v-main.vue";

export default {
  components: {
    Header,
    Main,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const toggleLeftDrawer = function () {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      toggleLeftDrawer,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
