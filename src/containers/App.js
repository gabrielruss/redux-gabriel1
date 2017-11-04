import React from 'react';
import { connect } from 'react-redux';
import { incrementNumber, decrementNumber, setIncrement } from '../actions/appActions';

import CurrentNumber from '../components/CurrentNumber';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            incrementNumber: null
        }
    }

    onIncrement = () => {
        this.props.dispatch(incrementNumber());
    }

    onDecrement = () => {
        this.props.dispatch(decrementNumber());
    }

    setIncrement = (e) => {
        let newIncrementNumber = this.state.incrementNumber;
        this.props.dispatch(setIncrement(newIncrementNumber));
    }

    inputChange = (e) => {
        let newIncrementNumber = Number(e.target.value);
        this.setState({
            incrementNumber: newIncrementNumber
        });
    }

    render() {
        return (
            <div>
                <CurrentNumber currentNumber={this.props.number} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
                Number to Increment:<input value={this.state.incrementNumber} onChange={this.inputChange} />
                <button onClick={this.setIncrement}>Save</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    number: state.myNumbers.number
});

export default connect(mapStateToProps)(App);