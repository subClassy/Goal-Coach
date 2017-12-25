import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>
                <h3>Goals</h3>
                <AddGoal />
                <GoalList />
                <button 
                    className = "btn btn-danger"
                    onClick = {() => this.signOut()}
                >
                Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, null)(App);