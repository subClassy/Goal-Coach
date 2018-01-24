import React, { Component } from 'react';
import { Box } from 'bloomer';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import { firebaseApp, auth, providerGoogle, providerFacebook } from '../firebase';
import '../App.css';
import '../bootstrap-social.css';
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
                    alert(error.message);
                    this.setState({error});
                }) 
            if(!this.state.error)
            window.location.reload();
        }
        
        resetemail()
        {const {email, password} = this.state;
            auth.sendPasswordResetEmail(email).then(function() {
                console.log("mail sent");
                alert("Reset password email is sent.");
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
        }

        handleGoogleLogin() {
            auth.signInWithPopup(providerGoogle) 
                .then((result) => {
                    const user = result.user;
                    this.setState({
                        user
                });
                
                
                    firebase.database().ref('users/' + user.uid).set({
                    username: user.displayName,
            
            
            
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
                
                    firebase.database().ref('users/' + user.uid).set({
                    username: user.displayName,
            
            
            
        });
            })
            .catch(error => {
                console.log(error);
                this.setState({error});
            })
        }
        
        handleGithubLogin() {
            var provider = new firebase.auth.GithubAuthProvider();
           firebase.auth().signInWithPopup(provider).then((result)=> {
           const user = result.user;
               this.setState({user});
                    firebase.database().ref('users/' + user.uid).set({
                    username: user.displayName,
            });

}).catch((error)=> {
  
               console.log(error)
               this.setState({error});
});
        }
        
         handleTwitterLogin() {
            var provider = new firebase.auth.TwitterAuthProvider();
           firebase.auth().signInWithPopup(provider).then((result)=> {
           const user = result.user;
               this.setState({user});
                    firebase.database().ref('users/' + user.uid).set({
                    username: user.displayName,
    
        });

}).catch((error)=> {
               console.log(error)
               this.setState({error});
 });
        }


        render() {
            return (
                <div className = "Sign-In-Form"> 
                    <h1> Goal Coach </h1>
                    <div className = "signin-form">
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
                                            className = "btn signin-btn"
                                            type = "button"
                                            onClick = {() => this.signIn()}
                                        >
                                            SIGN IN
                                        </button>
                                        <p   className = "signup-link password-reset"><Link onClick = {() => this.resetemail()} className = "link">Forgot Password</Link></p>
                                        <hr /> 
                                        <p className = "alt-signin"> Sign In Using : </p>
                                        <div className = "oAuth-btns">
                                            <button
                                                className = "btn btn-google oAuth-btn"
                                                type = "button"
                                                onClick = {() => this.handleGoogleLogin()}
                                                style = {{marginLeft: '5px'}}
                                            >
                                                <i className="fa fa-google" aria-hidden="true" style = {{marginRight: '5px'}}></i>
                                                Google
                                            </button>
                                            <button
                                                className = "btn btn-facebook oAuth-btn"
                                                type = "button"
                                                onClick = {() => this.handleFacebookLogin()}
                                                style = {{marginLeft: '5px'}}
                                            >
                                                <i className="fa fa-facebook" aria-hidden="true" style = {{marginRight: '5px'}}></i>
                                                Facebook
                                            </button>
                                            <button
                                                className = "btn btn-github oAuth-btn"
                                                type = "button"
                                                onClick = {() => this.handleGithubLogin()}
                                                style = {{marginLeft: '5px'}}
                                            >
                                                <i className="fa fa-github" aria-hidden="true" style = {{marginRight: '5px'}}></i>
                                                Github
                                            </button>
                                            <button
                                                className = "btn btn-twitter oAuth-btn "
                                                type = "button"
                                                onClick = {() => this.handleTwitterLogin()}
                                                style = {{marginLeft: '5px'}}
                                            >
                                                <i className="fa fa-twitter" aria-hidden="true" style = {{marginRight: '5px'}}></i>
                                                Twitter
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                    <p className = "signup-link"><Link to = {'/signup'} className = "link">Sign Up Instead</Link></p>
                                </div>
                            </Box>
                        {/* </Container> */}
                    </div>
                </div>
            )
        }
    }

    export default SignIn;
