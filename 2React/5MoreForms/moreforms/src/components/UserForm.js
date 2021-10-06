import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isError, setIsError] = useState(true);

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password};
        console.log("Welcome,", newUser.firstName);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value === "") {
            setFirstNameError("");
        }
        else if (e.target.value.length < 2) {
            setFirstNameError("First name must be minimum 2 characters long.");
            setIsError(true);
        }
        else {
            setFirstNameError("");
            setIsError(false);
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value === "") {
            setLastNameError("");
        }
        else if (e.target.value.length < 2) {
            setLastNameError("Last name must be minimum 2 characters long.");
            setIsError(true);
        }
        else {
            setLastNameError("");
            setIsError(false);
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value === "") {
            setEmailError("");
        }
        else if (e.target.value.length < 5) {
            setEmailError("Email must be minimum 5 characters long.");
            setIsError(true);
        }
        else {
            setEmailError("");
            setIsError(false);
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value === "") {
            setPasswordError("");
        }
        else if (e.target.value.length < 8) {
            setPasswordError("Password must be minimum 8 characters long.");
            setIsError(true);
        }
        else {
            setPasswordError("");
            setIsError(false);
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === "") {
            setConfirmPasswordError("");
        }
        else if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match.");
            setIsError(true);
        }
        else {
            setConfirmPasswordError("");
            setIsError(false);
        }
    }


    return(
        <>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text"
                    id="firstName"
                    value={firstName}
                    onChange={handleFirstName}
                    className={firstNameError?"badInput":firstName===""?null:"goodInput"}/>
                    {
                        firstNameError?
                        <p className="alert">{firstNameError}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleLastName}
                    className={lastNameError?"badInput":lastName===""?null:"goodInput"}/>
                    {
                        lastNameError?
                        <p className="alert">{lastNameError}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                    className={emailError?"badInput":email===""?null:"goodInput"}/>
                    {
                        emailError?
                        <p className="alert">{emailError}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                    id="password" value={password}
                    onChange={handlePassword}
                    className={passwordError?"badInput":password===""?null:"goodInput"} />
                    {
                        passwordError?
                        <p className="alert">{passwordError}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Password: </label>
                    <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    className={confirmPasswordError?"badInput":confirmPassword===""?null:"goodInput"}/>
                    {
                        confirmPasswordError?
                        <p className="alert">{confirmPasswordError}</p>:
                        null
                    }
                </div>

                <input type="submit" value="Create User" disabled={isError}/>
            </form>
        </>
    );
};

export default UserForm;