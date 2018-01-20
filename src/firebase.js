import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBMmMKaW6GlxZ4QK85SOCBCQSHSj213g3E",
    authDomain: "project1-ca43a.firebaseapp.com",
    databaseURL: "https://project1-ca43a.firebaseio.com",
    projectId: "project1-ca43a",
    storageBucket: "project1-ca43a.appspot.com",
    messagingSenderId: "177943592967"
  };

export const firebaseApp = firebase.initializeApp(config);
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');