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
import emailverify from './components/emailverify';
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
                hashHistory.replace('/emailverify');
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
            <Route path = "/emailverify" component = {emailverify} />
            <Route path = "/signin" component = {SignIn} />
            <Route path = "/signup" component = {SignUp} />
        </Router>
    </Provider>, document.getElementById('root')
)
