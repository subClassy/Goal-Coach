import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';
import '../App.css';

class CompleteGoalList extends Component {
     componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const { email, title } = completeGoal.val();
                completeGoals.push({ email, title });
            })
            this.props.setCompleted(completeGoals);
        })
     }

     clearCompleted() {
         completeGoalRef.set([]);
     }

    render() {
        return ( 
            <div>
                {
                    this.props.completeGoals.map((completeGoal, index) => {
                        const { email, title } = completeGoal;
                        return (
                            <div key = {index} className = "complete-goal-item">
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        )
                    })
                }
                <button 
                    className = "btn btn-primary"
                    onClick = {() => this.clearCompleted()}
                >
                    Clear All
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { completeGoals } = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);