import { combineReducers } from 'redux';
import numbersReducer from './numbersReducer';

const rootReducer = combineReducers({
    myNumbers: numbersReducer,
});

export default rootReducer;