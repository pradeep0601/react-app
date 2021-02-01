import React, { useState, useEffect } from "react";

const MultipleReturn = () => {
    const github_user_url = 'https://api.github.com/users/pradeep0601';
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(github_user_url)
        .then((res) => {
            console.log(res);
            setIsLoading(false);
            if (res.status >= 200 && res.status <= 299) {
                return res.json();
            }
            else {
                setIsError(true);
                throw Error('There is an error');
            }
        })
        .then((user) => {
            console.log(user);
            setUser(user);
        })
        .catch((error) => {
            setIsError(true);
            console.log(error)
        })
    },
    []
    );

    if(isLoading) {
        return <h2> Loading ... </h2>
    }
    if(isError) {
       return <h2> Error ... </h2> 
    }
    if(user) {
        const {avatar_url, login, html_url} = user;
        return (
            <div>
                <img id = 'avatar' src = {avatar_url} alt = {login}></img>
                <span>
                    <h4>{login}</h4>
                     <h4><a href = {html_url}> Profile </a></h4>
                </span>
            </div>
        );
    }
}

export default MultipleReturn;
