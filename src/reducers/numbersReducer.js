import { INCREMENT_NUMBER, DECREMENT_NUMBER, SET_INCREMENT } from '../actions/actionTypes';
import initialState from './initialState';

export default function numbersReducer(state = initialState, action) {
    // debugger
    switch (action.type) {
        case INCREMENT_NUMBER: {
            return Object.assign({}, state, { number: state.number + state.incrementValue })
        }
        case DECREMENT_NUMBER: {
            return Object.assign({}, state, { number: state.number - state.incrementValue })
        }
        case SET_INCREMENT: {
            return Object.assign({}, state, { incrementValue: action.numberToIncrement })
        }
        default:
            return state;
    }
}