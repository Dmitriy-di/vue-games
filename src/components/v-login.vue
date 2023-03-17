<template>
    <q-dialog v-model="medium">
        <q-card style="width: 450px">
            <q-card-section>
                <div class="text-h6">Log in</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input filled v-model="login" label="Login" />
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input filled v-model="password" label="Password" />
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-btn color="primary" label="Log in" />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(props, { emit }) {
    return {
        login: ref(""),
        password: ref("")
    };
  },
}
</script>
