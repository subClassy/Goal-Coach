import React,{Component} from 'react';
import { Box } from 'bloomer';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, hashHistory } from 'react-router';  
import { firebaseApp } from '../firebase';
import { logUser } from '../actions/index';
import reducer from '../reducers';
import '../App.css';
import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';
 

class emailverify extends Component {
    constructor(props) {
       super(props);
        
const store = createStore(reducer);
var user = firebaseApp.auth().currentUser;
firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        console.log(user.emailVerified);
        const { displayName } = user;
        const email = displayName; 
        store.dispatch(logUser(email));
        if(user.emailVerified) {
            
            window.location.href('/app');
        } 
    }
    else {
       window.location.reload();
    }
});

    }



render(){ 
            return (
                    <div className="centre">
                    <Box className = "Verify-Box">
                    <h1>You have not verified your email yet. Sorry folks. Kindly check your inbox and verify for account activation.</h1>
                    
                <button
                                    className = "btn signup-btn"
                                    type = "button"
                                    onClick = {() => window.location.reload()}
                                >
                                    Try Again
                        </button></Box></div>
                        
            )
}
}

export default emailverify;