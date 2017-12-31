import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import '../App.css';    
import { Control } from 'bloomer/lib/elements/Form/Control';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { Button } from 'bloomer/lib/elements/Button';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    addGoal() {
        // console.log(this.state);
        const { title } = this.state;
        const { email } = this.props.user;
        goalRef.push({email, title});
    }

    render() {
        return (
            <div className = "add-goal-form">
                <Field isGrouped className = "add-goal-field">
                    <Control>
                        <Input
                            type = "text"
                            placeholder = "Add a Goal"
                            style = {{marginRight: '5px'}}
                            onChange = {event => this.setState({title: event.target.value})}
                        />
                    </Control>
                    <Control>
                        <Button
                            isColor='primary'
                            onClick = {() => this.addGoal()}
                        >
                        Submit
                        </Button>
                    </Control>
                </Field>
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

export default connect(mapStateToProps, null)(AddGoal);