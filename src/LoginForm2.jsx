import React, { useState } from 'react';


const LoginForm2 = () => {

    const onSubmit = (event) => {event.preventDefault(); console.log(user)}

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const setUserState = (data) => {setUser(data)}

    const onInputChange = (event) => {
        const newUser = {
            firstName: event.target.name === 'firstName' ? event.target.value : user.firstName,
            lastName: event.target.name === 'lastName' ? event.target.value : user.lastName,
            password: event.target.name === 'password' ? event.target.value : user.password,
            password: event.target.name === 'email' ? event.target.value : user.email,

        }
        setUserState(newUser);
    }
    
    return (
    <>
            <h3 style={{textAlign: "center"}}>Sign Up form</h3>
    <div className="container">
    <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder='FirstName' name = "firstName" value={user.firstName} onChange = {onInputChange}/> <br />
        <input type="text" placeholder='LastName' name = "lastName" value = {user.lastName} onChange = {onInputChange}/> <br />
        <input type="text" placeholder='Email' name = "email" value = {user.email} onChange = {onInputChange}/> <br />
        <input type="password" placeholder='Password' name = "password" value={user.password} onChange = {onInputChange}/> <br />
        <button type="submit"> Submit</button>

    </form>
    </div>

    </>
    )

}

export default LoginForm2