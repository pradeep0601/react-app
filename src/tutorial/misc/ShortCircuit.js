import React from "react";

const ShortCircuit = () => {
    const firstMessage = '';
    const secondMessage = 'This is second message'
    return (
        <>
        <h1>Short Circuit Evaluation!!</h1>
        <div>
            {
                firstMessage || 'First default message'
            }
        </div>
        <div>
            {
                secondMessage && 'Second message'
            }
        </div>
        </>
    );
}

export default ShortCircuit;
