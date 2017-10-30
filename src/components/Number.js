import React from 'react';

const NumberForm = ({ number, onClick }) => {
    return (
        <div>
            Current number: {number}
            <br />
            <button
                onClick={e => {
                    e.preventDefault();
                    onClick();
                }}
            >
            +</button>
        </div>
    );
}

export default NumberForm;