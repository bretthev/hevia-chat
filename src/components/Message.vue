<template>
    <div class='message'>
        <h1 class='message-author'> {{ message.user }}: </h1>
        <h1 class='message-content'> {{ message.message }} </h1>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: [ 'message' ]
}
</script>

<style scoped>
    .message {
        display: flex;
        justify-content: flex-start;
        height: 10%;
        font-size: 1em;
    }
    .message-author {
        font-size: 1em
    }
    .message-content {
        padding-left: 10%;
        font-weight: bold;
        font-size: 1em;
    }
</style>