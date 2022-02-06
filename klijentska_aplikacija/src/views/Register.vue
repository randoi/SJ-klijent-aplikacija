<template>
  <div id="app">
    <Header subtitle="Register Page"/>
    <b-form @submit="onSubmit" id="form">
      <b-row>
        <b-col>
          <b-form-group id="input-1" label="Username:" label-for="username">
            <b-form-input
              id="username"
              v-model="form.username"
              placeholder="Username"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="input-2" label="Password:" label-for="password">
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="input-3" label="First Name:" label-for="first_name">
            <b-form-input
              id="first_name"
              v-model="form.first_name"
              placeholder="First Name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="input-4" label="Last Name:" label-for="last_name">
            <b-form-input
              id="last_name"
              v-model="form.last_name"
              placeholder="Last Name"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="input-5" label="Age:" label-for="age">
            <b-form-input
              id="age"
              v-model="form.age"
              placeholder="Age"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-6"
            label="Phone Number:"
            label-for="phone_number"
          >
            <b-form-input
              id="phone_number"
              v-model="form.phone_number"
              placeholder="Phone Number"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
          <b-col>
          <b-form-group id="input-7" label="Address:" label-for="address">
            <b-form-input
              id="address"
              v-model="form.address"
              placeholder="Address"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="input-8" label="Gender:" label-for="gender">
            <b-form-select
              id="gender"
              v-model="form.gender"
              :options="genders"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button
        id="register-button"
        class="mt-3"
        type="submit"
        variant="primary"
        >Register</b-button
      >
    </b-form>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import Header from '@/components/Header.vue'

export default {
  name: "Register",

  components: {
    Header
  },

  data() {
    return {
      form: {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        age: "",
        phone_number: "",
        address: "",
        gender: null
      },
      genders:[{text:'Gender',value:null},{text:'Male',value:'Male'},{text:'Female',value:'Female'}]
    };
  },

  methods: {
    ...mapActions([
        'register'
      ]),

      onSubmit(e) {
        e.preventDefault();
        console.log(this.form)
        this.register(this.form);
        this.$router.push({ name: 'Home' });
      }
  },
};
</script>

<style scoped>
#form {
  margin-top: 100px;
  margin-left: 500px;
  margin-right: 500px;
  padding: 50px;
  background-color: cyan;
  text-align: left;
}
#gender {
    width: 210px;
    height: 40px;
}
</style>
