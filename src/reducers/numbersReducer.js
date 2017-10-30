// import { INCREMENT_NUMBER } from '../actions/actionTypes';
import initialState from './initialState';

export default function numbersReducer(state = initialState.number, action) {
    switch (action.type) {
        case "INCREMENT_NUMBER": {
            return { state }
        }
        default:
            return state;
    }
}