import heviaFirebase from './firebase';

export const getUsersRef = (name) => heviaFirebase.database().ref(`users/${name}`)

export const getMessagesRef = () => heviaFirebase.database().ref(`messages`)