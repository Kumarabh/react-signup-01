import React, { useState } from 'react';

const LoginForm = () => {

    const [stateUsername, setStateUsername] = useState();
    const [statePassword, setStatePassword] = useState();

    const onSubmit = (event) => { event.preventDefault() };
    const setUsername = (event) => { setStateUsername(event.target.value) };
    const setPassword = (event) => { setStatePassword(event.target.value) };


    return (<>
    
        <h4>Username{stateUsername}</h4>
        <h4>Password {statePassword}</h4>
        <form method="post" onSubmit={onSubmit}>
            <input type="text" name='username' onChange={setUsername} /> <br />
            <input type="text" name='password' onChange={setPassword} /> <br />
            <button type="submit" onClick={onSubmit}>Submit</button>
        </form>

    </>)
}

export default LoginForm;
