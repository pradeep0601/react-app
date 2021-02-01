import React, {useState, useEffect} from "react";

const ToggleComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    return(
        <>
        <h1 className = 'header'> Toogle Component</h1>
        <div>
        {
            isVisible ? <DisplayWindowSize></DisplayWindowSize> : 'Hide'
        }
        </div>
        <button className = 'btn' onClick = {() => setIsVisible(!isVisible)}>Toggle Component</button>
        </>
    );
}

const DisplayWindowSize = () => {
    const [size, setSize] = useState(window.innerWidth);
    const changeSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize', changeSize);
        // Clean up
        return(() => {
            window.removeEventListener('resize', changeSize);
        });
    }, []);

    return (
        <h2>Window Size: {size}</h2>
    );
}
export default ToggleComponent;
