import React from 'react';
import { connect } from 'react-redux';
import { incrementNumber } from '../actions/appActions';

export class App extends React.Component {

    componentDidMount() {
        this.props.dispatch(incrementNumber());
    }

    render() {
        return (
            <div>
                Current number: {this.props.number}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    number: state.number
});

export default connect(mapStateToProps)(App);