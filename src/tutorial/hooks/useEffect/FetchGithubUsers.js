import React, {useEffect, useState} from 'react';

const FetchGithubUsers = () => {
    const githubUrl = 'https://api.github.com/users';
    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const res = await fetch(githubUrl);
        const resObj = await res.json();
        console.log(resObj);
        setUsers(resObj);
    }

    useEffect(() => {
        getUsers();
    },
    []
    );

    return(
        <>
        <h2 className = 'header'>Github Users</h2>
        <ul>
        {
            users.map((user) => {
                const {id, login, avatar_url, html_url} = user;
                return (
                    <li key = {id} className = 'list'>
                        <img id = 'avatar' src = {avatar_url} alt = {login}></img>
                        <div>
                            <h4>{login}</h4>
                            <h4><a href = {html_url}> Profile </a></h4>
                        </div>
                        </li>
                )
            })
        }
        </ul>
        </>
    );
}

export default FetchGithubUsers;
