import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                {/* Pass local state(personAdded) by props from AddPerson */}
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.prs.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

// Define Redux actions

// Here we map Redux State to Props => setting some value from State
const mapReduxStateToProps = state => {
    return {
        // We define as PROPS, and we can access it like: this.props.ctr which is defined in reducer state
        // state is Redux global state
        prs: state.persons,
    };
};

// here we Dispatch to Props => updating the state
const mapDispatchToProps = dispatch => {
    return {
        // We define as PROPS, and we can access it like: this.props.onIncrementCounter
        personAddedHandler: (name, age) => dispatch({type: actionTypes.ADD_PERSON, personData: {name:name, age:age}}),
        personDeletedHandler: (id) => dispatch({type: actionTypes.DELETE_PERSON, personId: id}),
    };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Persons);