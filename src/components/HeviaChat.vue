<template>
  <div>
    <div class="hevia-chat" v-if="currentUser && currentUser.validatedAsHevia">
      <h1 class='welcome'>{{ welcomeMessage }}</h1>
      <Messages :currentUser='currentUser'/>
    </div>
    <div v-else>
      <SmartestChild :currentUserId='currentUser.uid'/>
    </div>
  </div>
</template>

<script>
import heviaFirebase from '../../config/firebase'
import SmartestChild from './SmartestChild'
import Messages from './Messages'
import { getUsersRef } from '../../config/references'

export default {
  name: 'HeviaChat',
  props: [ 'currentUser' ],
  data () {
    return {
      welcomeMessage: `Hevia Discussion Chamber`
    }
  },
  components: {
    'SmartestChild': SmartestChild,
    'Messages': Messages
  },
  methods: {
    
  }
}
</script>

<style scoped>
.hevia-chat {
  height: 60vh;
  width: 100vw;
}
.welcome {
  font-size: 2em;
  text-align: center;
}
</style>
