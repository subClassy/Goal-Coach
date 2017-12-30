import React, { Component } from 'react';
import { Box, Columns, Column } from 'bloomer';
import { Link } from 'react-router';
import { firebaseApp, auth, providerGoogle, providerFacebook } from '../firebase';
import '../App.css';
import { Label } from 'bloomer/lib/elements/Form/Label';

    class SignIn extends Component {
        constructor(props) {
            super(props);
            this.state = {
                email: '',
                password: '',
                error: {
                    message: ''
                },
                user: null
            }
        }

        signIn() {
            console.log(this.state);
            const {email, password} = this.state;
            firebaseApp.auth().signInWithEmailAndPassword(email, password)
                .catch(error => {
                    console.log(error);
                    this.setState({error});
                }) 
        }

        handleGoogleLogin() {
            auth.signInWithPopup(providerGoogle) 
                .then((result) => {
                    const user = result.user;
                    this.setState({
                        user
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({error});
            })
        }

        handleFacebookLogin() {
            auth.signInWithPopup(providerFacebook) 
                .then((result) => {
                    const user = result.user;
                    this.setState({
                        user
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({error});
            })
        }

        render() {
            return (
                <Columns className = "Sign-In-Form"> 
                    <h1> Goal Coach </h1>
                    <Column className = "signin-form">
                        {/* <Container isFluid> */}
                            <Box className = "SignIn-Box">
                                <div className = "form-horizontal">
                                    <h2> Sign In </h2>
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
                                            className = "btn btn-primary"
                                            type = "button"
                                            onClick = {() => this.signIn()}
                                        >
                                            Sign In
                                        </button>
                                        <button
                                            className = "btn btn-danger"
                                            type = "button"
                                            onClick = {() => this.handleGoogleLogin()}
                                            style = {{marginLeft: '5px'}}
                                        >
                                            Sign In With Google
                                        </button>
                                        <button
                                            className = "btn btn-primary"
                                            type = "button"
                                            onClick = {() => this.handleFacebookLogin()}
                                            style = {{marginLeft: '5px'}}
                                        >
                                            Sign In With Facebook
                                        </button>
                                    </div>
                                    <div>{this.state.error.message}</div>
                                    <div><Link to = {'/signup'}>SignUp instead</Link></div>
                                </div>
                            </Box>
                        {/* </Container> */}
                    </Column>
                </Columns>
            )
        }
    }

    export default SignIn;