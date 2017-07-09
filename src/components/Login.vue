<template>
  <div class="login">
    <h1> {{ loginPrompt }} </h1>
    <button v-on:click="googleLogin">Sign In with Google</button>
  </div>
</template>

<script>
import heviaFirebase, { google } from '../../config/firebase'
import { getUsersRef } from '../../config/references'

export default {
  name: 'Login',
  data () {
    return {
      loginPrompt: 'Sign in to Hevia it up.'
    }
  },
  methods: {
    googleLogin: function () {
        heviaFirebase.auth().signInWithPopup(google).then((result) => {
            if (result.user) {
              getUsersRef(result.user.uid).set({
                name: result.user.displayName,
                email: result.user.email,
                uid: result.user.uid
              })
            }
        }).catch((error) => {
            console.log(error)
        })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
