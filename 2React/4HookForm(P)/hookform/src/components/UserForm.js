import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password}
        console.log("Welcome,", newUser.firstName);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };


    return(
        <>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" value={firstName} onChange={ e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" value={lastName} onChange={ e => setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" value={email} onChange={ e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={ e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Password: </label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)} />
                </div>

                {/* <input type="submit" value="Create User" /> */}
            </form>

            <div>
                <p>Your form data:</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
};

export default UserForm;