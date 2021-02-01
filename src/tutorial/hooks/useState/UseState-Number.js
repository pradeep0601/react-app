import React from 'react';

const UseStateNumber = () => {
    const [count, setCount] = React.useState(0);
    const incrementByDelay = () => {
        setTimeout(() => {
            setCount((prevVal) => prevVal + 1)
        }, 2000);
    }
    return(
        <>
        <h2 className = 'header'> useState Number Example!!</h2>
        <h3> Count: {count} </h3>
        <div><button className = 'btn' onClick = {() => setCount(count-1)}>Decrease</button><button className = 'btn' onClick = {() => setCount(0)}>Reset</button><button className = 'btn' onClick = {() => setCount(count+1)}>Increase</button></div>
        <h2 className = 'header'> useState Number Complex Example!!</h2>
        <h3>Count: {count}</h3>
        <button className = 'btn' onClick = {incrementByDelay}>Increase by 2sec Delay</button>
        </>
    );
}

export default UseStateNumber;
