import Vue from 'vue'
import Vuex from 'vuex'
import jwt_decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    token: '',
    currentUser: null
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
    setCurrentUser(state,res) {
      state.currentUser=res;
    }
  },

  actions: {
    register(obj,obj2) {
      fetch('http://localhost:9000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj2)
      }).then( res => res.json() )
    },

    update(obj,obj2) {
      var tmp = jwt_decode(this.state.token)
      fetch('http://localhost:7000/user/' + tmp.userId + '/update', {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json' ,
          'Authorization': `Bearer ${this.state.token}`
        },
        body: JSON.stringify(obj2)
      }).then( res => res.json() )
    },

    login({ commit }, obj) {
      fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if(tkn.token==undefined) {
          alert('Wrong Credentials');
        } else {
          commit('setToken', tkn.token)
        }
      });
    },

     fetchCurrentUser({ commit }) {
      var tmp = jwt_decode(this.state.token)
      fetch('http://localhost:7000/user/' + tmp.userId , {
        headers: { 
          'Authorization': `Bearer ${this.state.token}` 
        }
      })
        .then( obj => obj.json() )
          .then( res => commit('setCurrentUser',JSON.stringify(res)))
    },
  },

  modules: {
  }

})
