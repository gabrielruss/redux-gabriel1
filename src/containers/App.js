import { connect } from 'react-redux';
import { incrementNumber } from '../actions/appActions';
import NumberForm from '../components/Number';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: this.props.number
//         }
//     }

//     _handleClick = (event) => {
//         event.preventDefault();
//         this.props.actions();
//     }

//     render() {
//         return (
//             <div>
//                 Current number: {this.props.number}
//                 <br />
//                 <button
//                     onClick={this._handleClick}
//                 >
//                 +</button>
//             </div>
//         );
//     }
// }

const mapStateToProps = (state, ownProps) => {
    number: state.number
};

const mapDispatchToProps = (dispatch, ownProps) => {
    onClick: () => {
        dispatch(incrementNumber(ownProps.number));
    }
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(NumberForm);

export default App;