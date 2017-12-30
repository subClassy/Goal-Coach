import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import { Columns } from 'bloomer/lib/grid/Columns';
import { Column } from 'bloomer/lib/grid/Column';
import { Box } from 'bloomer/lib/elements/Box';
import { Label } from 'bloomer/lib/elements/Form/Label';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp() {
        console.log(this.state);
        const {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                var user = firebaseApp.auth().currentUser;
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
            <Columns className = "Sign-Up-Form">
                <h1> Goal Coach </h1>
                <Column className = "signup-form">
                    <Box className = "signup-box">
                        <div className = "form-horizontal">
                            <h2>Sign Up</h2>
                            <hr />
                            <div className = "form-group">
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
                </Column>
            </Columns>
        )
    }
}

export default SignUp;