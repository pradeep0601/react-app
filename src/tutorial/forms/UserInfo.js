import {useState, useRef, useEffect, useReducer} from 'react'
import axios from 'axios';

import reducer from "./reducer";

const UserInfo = () => {
    const refContainer = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    const [user, setUser] = useState({name: '', username: '', email: '', phone: ''});
    
    const initialUserList = [];

    const [userList, dispatch] = useReducer(reducer, initialUserList);

    useEffect(()=>{
        // set initial record
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(({data:users}) => {
            dispatch({
                type: 'UPDATE_USER_LIST',
                payload: {users}
            });
            setIsLoading(false);
        });
        refContainer.current.focus();
    },
    []
    );
    const inputHandler = (e) => {
        console.log(e.target);
        const {target: {name, value}} = e;
        setUser({...user, [name]: value});
    }

    const handleSubmit = (e) => {
        console.log(e.target);
        e.preventDefault();

        dispatch({
            type: 'ADD_USER',
            payload: {user}
        });
        
        console.log('user:', user);
        setUser({name: '', username: '', email: '', phone: ''});
    }

    const {name, username, email, phone} = user;

    return(
        <>
        <h2>User Details form</h2>
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Name: </label><input type = "text" ref = {refContainer} name ="name" value = {name} onChange = {inputHandler}/>
            </div>
            <div>
                <label>UserName: </label> <input type = "text" name = "username" value = {username} onChange = {inputHandler}/>
            </div>
            <div>
                <label>Email: </label><input type = "text" name ="email" value = {email} onChange = {inputHandler}/>
            </div>
            <div>
                <label>Phone: </label><input type = "text" name ="phone" value = {phone} onChange = {inputHandler}/>
            </div>
            <button type='submit'>Add Info</button>
        </form>
        <div>
            <h2>User Info</h2>
                {isLoading && <h3>Loading, Please wait...</h3>}
                { !isLoading && <table>
                <tr>
                    <th>Name</th><th>UserName</th><th>Email</th><th>Phone</th><th>Action</th>
                </tr>
                {
                    userList.map(user => {
                        const {id, name, username, email, phone} = user;
                        return(
                        <tr>
                            <td>{name}</td><td>{username}</td><td>{email}</td><td>{phone}</td><td><button onClick = {() => dispatch({type: 'REMOVE_USER', payload: {id}})}>Delete</button></td>
                        </tr>
                        );
                    })
                }
            </table>
            }
        </div>
        </>
    );
}

export default UserInfo;