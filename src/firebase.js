import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCoPiCpEqQo9ZPkziJkrqxpPw9XrKdLghA",
    authDomain: "goalcoach-78340.firebaseapp.com",
    databaseURL: "https://goalcoach-78340.firebaseio.com",
    projectId: "goalcoach-78340",
    storageBucket: "goalcoach-78340.appspot.com",
    messagingSenderId: "41445809351"
};

export const firebaseApp = firebase.initializeApp(config);
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');