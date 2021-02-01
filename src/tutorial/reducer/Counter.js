import {useReducer} from 'react';

const Counter = () => {
    const initialValue = {count:0};
    
    const reducer = (oldState, action) => {
        switch (action.type) {
            case 'increment':
                return {count: oldState.count + 1};
            case 'decrement':
                return {count: oldState.count - 1};
            case 'reset':
                return {count: action.payload};
            default:
                break;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialValue);

    return(
        <>
        <h2>Count: {state.count}</h2>
        <div className = 'counter'>
            <button onClick = {() => dispatch({type: 'decrement'})}>Decrement</button><button onClick = {() => dispatch({type: 'reset', payload: 0})}>Reset</button><button onClick = {() => dispatch({type: 'increment'})}>Increment</button>
        </div>
        </>
    );
}

export default Counter;