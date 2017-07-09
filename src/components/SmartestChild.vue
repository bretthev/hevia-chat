<template>
    <div className="smartest-child">
        <h1> {{ question }} </h1>
        <input v-model="answer"/>
        <button v-on:click="validateAsHevia">Submit Answer</button>
    <h2> {{ feedback }} </h2>
    </div>
</template>

<script>
import { getUsersRef } from '../../config/references'

    export default {
        name: "SmartestChild",
        props: [ 'currentUserId' ],
        data () {
            return {
                question: `You're going to have to prove your Hevianess by typing the name of the smartest Hevia child. Alternatively, you could type the name of the most talented Hevia child or the most mature Hevia child.`,
                answer: '',
                feedback: ''
            }
        },
        methods: {
            addValidationToUser: function () {
                getUsersRef(this.currentUserId).update({
                    validatedAsHevia: true
                })
            },
            validateAsHevia: function () {
                if (this.answer.toLowerCase() === 'tyler') {
                    this.feedback = `You answered Tyler. You have either never met any of the Hevias or you are Tyler. Either way, sorry, try again.`
                    return this.answer = ''
                }
                if (this.answer.toLowerCase() === 'jesse') {
                    this.feedback = `Yup, Jesse's clearly the most mature Hevia.`
                    this.answer = ''
                    return setTimeout(this.addValidationToUser, 2500)
                }
                if (this.answer.toLowerCase() === 'clara') {
                    this.feedback = `Excellent answer. Clara is definitely the most talented Hevia child.`
                    this.answer = ''
                    return setTimeout(this.addValidationToUser, 2500)
                }
                if (this.answer.toLowerCase() === 'brett') {
                    this.feedback = `Nailed it. Brett's the smartest and also most likable and handsome and charming and interesting Hevia child.`
                    this.answer = ''
                    return setTimeout(this.addValidationToUser, 2500)
                }

                else {
                    this.feedback = `That's not a Hevia child.`
                    this.answer = ''
                }
            }
        }
    }
</script>

<style>
</style>