import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, hashHistory } from 'react-router';  
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
            console.log(user.emailVerified);
            const { displayName } = user;
        const email = displayName; 
        store.dispatch(logUser(email));
        if(user.emailVerified) {
        hashHistory.push('/app');
               
      } else { 
        alert('Please check your inbox for a verification e-mail and follow the instructions');
        user.sendEmailVerification().then(function() {
            hashHistory.replace('/signin');
          
        });
      }
         
    }
    else {
        hashHistory.replace('/signin');
    }
})

ReactDOM.render(
    <Provider store = {store}>
        <Router path = "/" history = {hashHistory}>
            <Route path = "/app" component = {App} />
            <Route path = "/signin" component = {SignIn} />
            <Route path = "/signup" component = {SignUp} />
        </Router>
    </Provider>, document.getElementById('root')
)
