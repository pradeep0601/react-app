import { useEffect } from "react";

const ErrorBoundryTest = () => {
    useEffect(() => {
        const a = [1,2]
        console.log('=========a:', a[41]);
        if(a[7] === undefined) {
            throw Error ("Helloe Errror");
        }
    },[]);
    
    return (
        <h1>Hello from Error Boundry Test!!</h1>
    );
}

export default ErrorBoundryTest;
