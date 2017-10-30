import { INCREMENT_NUMBER } from '../actions/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState.number, action) {
    switch (action.type) {
        case INCREMENT_NUMBER:
            return Object.assign({}, state, {
                number: state.number + 1
            });
        default:
            return state;
    }
}