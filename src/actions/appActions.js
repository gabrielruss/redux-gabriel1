import { INCREMENT_NUMBER, DECREMENT_NUMBER, SET_INCREMENT } from './actionTypes';

export function incrementNumber() {
    return { type: INCREMENT_NUMBER }
}

export function decrementNumber() {
    return { type: DECREMENT_NUMBER }
}

export function setIncrement(numberToIncrement) {
    return { type: SET_INCREMENT, numberToIncrement }
}