import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

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
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
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
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

// here we Dispatch to Props => updating the state
const mapDispatchToProps = dispatch => {
    return {
        // We define as PROPS, and we can access it like: this.props.onIncrementCounter
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubtractCounter: () => dispatch(actionCreators.substract(5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);