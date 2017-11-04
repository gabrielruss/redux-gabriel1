import { SET_INCREMENT } from '../actions/actionTypes';
import initialState from './initialState';

export default function incrementReducer(state = initialState.incrementValue, action) {
    // debugger
    switch (action.type) {
        case SET_INCREMENT: {
            return Object.assign({}, state, {incrementValue: action.numberToIncrement})
        }
        default:
            return state;
    }
}