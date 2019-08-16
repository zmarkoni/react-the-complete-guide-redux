import React, {Component} from 'react';
import './AddPerson.css';

class AddPerson extends Component {
    // We don't need Redux to manage UI state here, we can manage it here,
    // but on BUTTON click we can pass our state to parent container
    // which use Redux so we can use that data in Reducer
    state = {
        name: '',
        age: ''
    };

    nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    };

    ageChangeHandler = (event) => {
        this.setState({age: event.target.value});
    };

    render() {

        return (
            <div className="AddPerson">
                <input type="text"
                       placeholder="Name"
                       onChange={this.nameChangeHandler}
                       value={this.state.name}/>
                <input type="number"
                       placeholder="Age"
                       onChange={this.ageChangeHandler}
                       value={this.state.age}/>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;