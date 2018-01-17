import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';
import * as firebase from 'firebase';
import { firebaseApp } from '../firebase';


class GoalItem extends Component {
    completeGoal() {
        const {email} = this.props.user;
        const {title, serverKey} = this.props.goal;
        goalRef.child(serverKey).remove();
        var user = firebaseApp.auth().currentUser;
                console.log(user);
        var ref=firebase.database().ref('users/' + user.uid);
        ref.on('value',function(datasnapshot){
            console.log(datasnapshot.val().username);
         });
        completeGoalRef.push({email, title});
    }

    render() {
        const {email, title} = this.props.goal;
        return (
            <div style = {{margin: '5px'}}>
                <strong>{title}</strong>
                <span style = {{marginRight: '5px'}}> submitted by <em>{email}</em></span>
                 <button 
                    className = "btn btn-sm btn-primary"
                    onClick = {() => this.completeGoal()}
                >
                    Complete
                </button>
            </div>
        ) 
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);
