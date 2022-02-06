<template>
  <div id="app">
    <Header subtitle="Log In Page"/>
    <b-form @submit="onSubmit" id="form">
      <b-form-group id="input-1" label="Username:" label-for="username">
        <b-form-input
          id="username"
          v-model="form.username"
          placeholder="Username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-2" class="mt-3" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button id="log-in-button" class="mt-3" type="submit" variant="primary">Log in</b-button>
    </b-form>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import Header from '@/components/Header.vue';

export default {
  name: "Login",

  components: {
    Header
  },

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions([
        'login',
        'fetchCurrentUser'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.login(this.form);
        setTimeout(this.fetchCurrentUser,500)
        this.$router.push({ name: 'Home' });
      }
  },
};
</script>

<style scoped>
#form {
  margin-top: 130px;
  margin-left: 500px;
  margin-right: 500px;
  padding: 50px;
  background-color: cyan;
  text-align: left;
};
</style>
