import React from 'react';
import data from '../../../resources/data';

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
    const removeItem = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }
    return(
        <>
        <h2 className = 'header'>useState Array Example!!</h2>
        {
            people.map((person) => {
                return (
                    <div key = {person.id} className = 'item'>
                    {person.name}
                    <button className = 'btn' onClick = {() => removeItem(person.id)}>Remove</button>
                </div>
                );
            })
        }
        <button className = 'btn' onClick = {() => setPeople([])}>Clear Items</button>
        </>
    );
}

export default UseStateArray;