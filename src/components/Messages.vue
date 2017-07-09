<template>
    <div class='message-container'>
        <Message v-for='message in messages'
            :message='message' 
            key='message.timestamp'/>
        <div class='message-input-container'>
            <input class='message-input' v-model='currentMessage' />
            <button class='message-send' v-on:click='postMessage'>Send</button>
        </div>
    </div>
</template>

<script>
import { getMessagesRef } from '../../config/references'
import Message from './Message'

export default {
    name: 'Messages',
    beforeMount() {
        this.getMessages()
    },
    props: [ 'currentUser'  ],
    components: {
        'Message': Message
    },
    data () {
        return {
            messages: undefined,
            currentMessage: undefined
        }
    },
    methods: {
        postMessage: function() {
            getMessagesRef().push({
                message: this.currentMessage,
                user: this.currentUser.name,
                uid: this.currentUser.uid,
                timestamp: Date.now()
            })
            this.currentMessage = ''
        },
        getMessages: function () {
            getMessagesRef().on('value', (snapshot) => {
                if (snapshot.val()) {
                    const allMessages = Object.keys(snapshot.val()).map(function (key) { return snapshot.val()[key] })
                    if (allMessages.length > 10) {
                        this.messages = allMessages.slice(allMessages.length - 10, allMessages.length)
                    }
                    else {
                        this.messages = allMessages
                    }
                }
            })
        }
    }
}
</script>

<style>
    .message-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 80vh;
        overflow-y: scroll;
    }
    .message-input-container {
        margin: 5vh 0;
    }
</style>