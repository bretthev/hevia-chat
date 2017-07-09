<template>
    <div id="app">
      <div v-if='hasCurrentUser===undefined'>
        Loading
      </div>
      <div v-else-if='hasCurrentUser===false'>
        <Login />
      </div>
      <div v-else-if='currentUser && currentUser.name'>
        <HeviaChat :currentUser='currentUser'/>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import heviaFirebase from '../config/firebase'
import Login from './components/Login'
import HeviaChat from './components/HeviaChat'
import { getUsersRef } from '../config/references'

export default {
  name: 'App',
  data () {
    return {
      hasCurrentUser: undefined,
      currentUser: undefined,
      hello: 'hello'    
    }
  },
  beforeMount () {
    this.checkForUser()
  },
  components: {
    'HeviaChat': HeviaChat,
    'Login': Login
  },
  methods: {
    checkForUser: function () {
      heviaFirebase.auth().onAuthStateChanged((result) => {
        this.hasCurrentUser = !!result
        if (result && result.uid) {
            getUsersRef(result.uid).on('value', (snapshot) => {
              this.currentUser = {
                name: snapshot.val().name.split(' ')[0],
                email: snapshot.val().email,
                uid: snapshot.val().uid,
                validatedAsHevia: snapshot.val().validatedAsHevia
              }
            })
          }
        })
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
