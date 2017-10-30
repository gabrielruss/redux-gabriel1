import { combineReducers } from 'redux';
import numbersReducer from './numbersReducer';

const rootReducer = combineReducers({
    number: numbersReducer
});

export default rootReducer;