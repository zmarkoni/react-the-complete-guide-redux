import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(el => (
                        <li key={el.id} onClick={() => this.props.onDeleteResult(el.id)}>{el.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Define Redux actions

// Here we map State to Props => setting some value from State
const mapStateToProps = state => {
    return {
        // We define as PROPS, and we can access it like: this.props.ctr which is defined in reducer state
        // state is Redux global state
        ctr: state.counter,
        storedResults: state.results
    };
};

// here we Dispatch to Props => updating the state
const mapDispatchToProps = dispatch => {
    return {
        // We define as PROPS, and we can access it like: this.props.onIncrementCounter
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 5}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', value: 5}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElID: id}),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);