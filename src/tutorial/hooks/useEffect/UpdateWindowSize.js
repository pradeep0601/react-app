import { useEffect, useState } from "react";

const UpdateWindowSize = () => {
    const [size, setSize] = useState(window.innerWidth);
    
    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        console.log('====useEffect');
        window.addEventListener('resize', checkSize);
        return(() => {
            console.log('====cleanup');
            window.removeEventListener('resize', checkSize);
        });
    },
    []
    );

    console.log('======render');
    return (
        <>
        <h2>Window Size</h2>
        <h3>{size} PX</h3>
        </>
    );
}

export default UpdateWindowSize;
