import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css';
import '../App.css';
import { Columns } from 'bloomer/lib/grid/Columns';
import { Column } from 'bloomer/lib/grid/Column';

class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <Columns>
                <Column isSize = {{desktop: 6, tablet: 8, mobile: 10}} isOffset = {{desktop: 3, tablet: 2, mobile: 1}}>
                    <div className = "app">
                        <h1>Goal Coach</h1>
                        <div className = "add-goal-container">
                            <AddGoal />
                        </div>
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
                </Column>
            </Columns>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, null)(App);