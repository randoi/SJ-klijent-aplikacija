<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand id="brand" to="/">
          <img src="./assets/plane.png" alt="Plane" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item v-if="!token" to="/login">Log in</b-dropdown-item>
              <b-dropdown-item v-else to="/profile">Profile</b-dropdown-item>
              <b-dropdown-item v-if="!token" href="/register">Register</b-dropdown-item>
              <b-dropdown-item v-else @click="logout()">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ms-auto">
            <b-nav-item v-if="token" to="/reservation">Reservation</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item to="/">Home</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',

 computed: {
      ...mapState([
        'token'
      ])
    },

  methods: {
    ...mapMutations([
      'removeToken'
    ]),

    logout() {
      this.removeToken();
      this.$router.push({ name: 'Home' });
    }
  },

  mounted() {
    
  }
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#brand {
  margin-left: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
