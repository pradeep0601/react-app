import React, { useState } from 'react'

const UseStateExample = () => {
    const [title, setTitle] = useState('Random Title');
    const clickHandler = () => {
        if (title === 'Random Title') {
            setTitle('Hello World');
        }
        else {
            setTitle('Random Title');
        }
        
    }

    return(
        <div>
        <h2 className = 'header'>{title}</h2>
        <React.Fragment>
            <button className = 'btn' onClick = {clickHandler}>Change Title</button>
        </React.Fragment>
        </div>
    );    

}

export default UseStateExample;
