import React, { Component } from 'react';
import { Container, Box, Columns, Column } from 'bloomer';
import { Link } from 'react-router';
import { firebaseApp, auth, providerGoogle, providerFacebook } from '../firebase';
import '../App.css';

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
            <div className = "Sign-In-Form">
                <h1>Goal Coach</h1>
                <Columns isCentered>
                    <Column isSize = {{mobile: 8, desktop: 1/3}}>
                        <Container isFluid>
                            <Box className = "SignIn-Box">
                                <div className = "form-horizontal">
                                    <h2> Sign In </h2>
                                    <div className = "form-group">
                                        <input
                                            className = "form-control"
                                            type = "text"
                                            placeholder = "email"
                                            onChange = {
                                                event => this.setState({
                                                    email: event.target.value
                                                })
                                            }
                                        />
                                        <input
                                            className = "form-control"
                                            type = "password"
                                            placeholder = "password"
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
                        </Container>
                    </Column>
                </Columns>
            </div>
        )
    }
}

export default SignIn;