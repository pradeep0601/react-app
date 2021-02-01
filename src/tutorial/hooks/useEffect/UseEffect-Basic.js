import React, { useState, useEffect } from "react";

const UseEffectBasic = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('========useEffect');
        document.title = `useEffect example basic: ${value}`;
    }, [value])

    console.log('========render');
    return (
        <>
        <h2 className = 'header'> Use Effect Basic Example!!</h2>
        <h2>{value}</h2>
        <button className = 'btn' onClick = {() => setValue(value+1)}>Increment</button>
        </>
    );
}

export default UseEffectBasic;
