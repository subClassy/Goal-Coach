import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp, auth, provider } from '../firebase';

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

    handleGooglLogin() {
        auth.signInWithPopup(provider) 
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
            });
        });
    }

    render() {
        return (
            <div className = "form-inline" style = {{margin: '5%'}}>
                <h2> Sign In</h2>
                <div className = "form-group">
                    <input
                        className = "form-control"
                        type = "text"
                        style = {{marginRight: '5px'}}
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
                        style = {{marginRight: '5px'}}
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
                        onClick = {() => this.handleGooglLogin()}
                        style = {{marginLeft: '5px'}}
                    >
                        Sign In With Google
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to = {'/signup'}>SignUp instead</Link></div>
            </div>
        )
    }
}

export default SignIn;