import React from 'react';

const CurrentNumber = ({ currentNumber, onIncrement, onDecrement }) => {
    return (
        <div>
            Current number: {currentNumber}
            <br />
            <button
                onClick={e => {
                    e.preventDefault();
                    onIncrement();
                }}
            >
            Add</button>
            <button
                onClick={e => {
                    e.preventDefault();
                    onDecrement();
                }}
            >
            Subtract</button>
        </div>
    );
}

export default CurrentNumber;