import { combineReducers } from 'redux';
import numbersReducer from './numbersReducer';

const rootReducer = combineReducers({
    numbers: numbersReducer
});

export default rootReducer;