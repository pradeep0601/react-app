import React from 'react';

const UseStateObject = () => {
    const [person, setPerson] = React.useState({
        name: 'Peter',
        age: 28,
        message: 'Random message'
    });
    return(
        <>
        <h2 className = 'header'>useState Object Example!!</h2>
        <h4>{person.name}</h4>
        <h4>{person.age}</h4>
        <h4>{person.message}</h4>
        <button className = 'btn' onClick = {() => setPerson({...person, message: 'hello world'})}>Change message</button>
        </>
    );
}
export default UseStateObject;
