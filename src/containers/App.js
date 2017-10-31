import React from 'react';
import { connect } from 'react-redux';
import { incrementNumber } from '../actions/appActions';

export class App extends React.Component {

    _onClick = (e) => {
        e.preventDefault();
        this.props.dispatch(incrementNumber());
    }

    render() {
        return (
            <div>
                Current number: {this.props.number}
                <button onClick={this._onClick}>
                +
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    number: state.myNumbers.number
});

export default connect(mapStateToProps)(App);