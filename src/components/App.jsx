import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
 import '../../node_modules/react-tabs/style/react-tabs.css';

class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div style = {{margin: '5px'}}>
                <h3>Goal Coach</h3>
                <AddGoal />
                <hr />
                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Incomplete</Tab>
                        <Tab>Completed</Tab>
                    </TabList>

                    <TabPanel>
                        <h4>Goals</h4>
                        <GoalList />
                        <hr />
                        <h4>Complete Goals</h4>
                        <CompleteGoalList />
                        <hr />
                    </TabPanel>
                    <TabPanel>
                        <h4>Goals</h4>
                        <GoalList />
                        <hr />
                    </TabPanel>
                    <TabPanel>
                        <h4>Complete Goals</h4>
                        <CompleteGoalList />
                        <hr />
                    </TabPanel>
                </Tabs>
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