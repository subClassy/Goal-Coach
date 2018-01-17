import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import * as firebase from 'firebase';
import { Box } from 'bloomer/lib/elements/Box';
import { Label } from 'bloomer/lib/elements/Form/Label';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name:'',
            error: {
                message: ''
            }
        }
    }

    signUp() {
        const {email, password,name} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                var user = firebaseApp.auth().currentUser;
                 firebase.database().ref('users/' + user.uid).set({
                    username: name,
                 });
                user.sendEmailVerification().then(function() {
                    console.log("verification email sent")
                  }).catch(function(error) {
                    console.log(error);
                    this.setState({error});
                  });
            })
            .catch(error => {
                console.log(error);
                this.setState({error});
            }) 
    }

    render() {
        return (
            <div className = "Sign-Up-Form">
                <h1> Goal Coach </h1>
                <div className = "signup-form">
                    <Box className = "signup-box">
                        <div className = "form-horizontal">
                            <h2>Sign Up</h2>
                            <hr />
                            <div className = "form-group">
                                 
                                <Label className = "label">Name</Label>
                                <input
                                    className = "form-control name-input"
                                    type = "text"
                                    onChange = {
                                        event => this.setState({
                                            name: event.target.value
                                        })
                                    }
                                />
                                <Label className = "label">Email</Label>
                                <input
                                    className = "form-control email-input"
                                    type = "text"
                                    onChange = {
                                        event => this.setState({
                                            email: event.target.value
                                        })
                                    }
                                />
                                <Label className = "label">Password</Label>
                                <input
                                    className = "form-control password-input"
                                    type = "password"
                                    onChange = {
                                        event => this.setState({
                                            password: event.target.value
                                        })
                                    }
                                />
                                <button
                                    className = "btn signup-btn"
                                    type = "button"
                                    onClick = {() => this.signUp()}
                                >
                                    SIGN UP
                                </button>
                            </div>
                            {
                                (this.state.error.message !== '') ? alert(this.state.error.message) : <p></p>
                            }
                            <hr />
                            <p className = "signin-link"><Link to = {'/signin'} className = "link">Already a user ? Sign in instead</Link></p>
                        </div>
                    </Box>
                </div>
            </div>
        )
    }
}

export default SignUp;
