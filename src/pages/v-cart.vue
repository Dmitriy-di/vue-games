<template>
  <div>
    <CartForm />
    <CartItem />
  </div>
</template>

<script>
import CartForm from "../components/v-cart-form.vue";
import CartItem from "../components/v-cart-item.vue";

export default {
  components: {
    CartForm,
    CartItem,
  },
};
</script>

<style></style>
