import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({})
    const [fieldBlank, setFieldBlank] = useState(true)

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
        if (e.target.value.length !==0 && e.target.value.length < 2) {
            setErrors({...errors,"firstName":"First name must be minimum 2 characters long."})
        }
        else if (e.target.value.length === 0) {
            setFieldBlank(true);
            if ("firstName" in errors){
                delete errors.firstName
            }
        }
        else {
            setFieldBlank(false);
            if ("firstName" in errors){
                delete errors.firstName
            }
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length !==0 && e.target.value.length < 2) {
            setErrors({...errors,"lastName":"Last name must be minimum 2 characters long."})
        }
        else if (e.target.value.length === 0) {
            setFieldBlank(true);
            if ("lastName" in errors){
                delete errors.lastName
            }
        }
        else {
            setFieldBlank(false);
            if ("lastName" in errors){
                delete errors.lastName
            }
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length !==0 && e.target.value.length < 5) {
            setErrors({...errors,"email":"Email must be minimum 5 characters long."})
        }
        else if (e.target.value.length === 0) {
            setFieldBlank(true);
            if ("email" in errors){
                delete errors.email
            }
        }
        else {
            setFieldBlank(false);
            if ("email" in errors){
                delete errors.email
            }
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length !==0 && e.target.value.length < 8) {
            setErrors({...errors,"password":"Password must be minimum 8 characters long."})
        }
        else if (e.target.value.length === 0) {
            setFieldBlank(true);
            if ("password" in errors){
                delete errors.password
            }
        }
        else {
            setFieldBlank(false);
            if ("password" in errors){
                delete errors.password
            }
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.legnth !== 0 && e.target.value !== password) {
            setErrors({...errors,"confirmPassword":"Passwords must match."})
        }
        else if (e.target.value.length === 0) {
            setFieldBlank(true);
            if ("confirmPassword" in errors){
                delete errors.confirmPassword
            }
        }
        else {
            setFieldBlank(false);
            if ("confirmPassword" in errors){
                delete errors.confirmPassword
            }
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
                    className={"firstName" in errors?"badInput":firstName===""?null:"goodInput"}/>
                    {
                        "firstName" in errors?
                        <p className="alert">{errors.firstName}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleLastName}
                    className={"lastName" in errors?"badInput":lastName===""?null:"goodInput"}/>
                    {
                        "lastName" in errors?
                        <p className="alert">{errors.lastName}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                    className={"email" in errors?"badInput":email===""?null:"goodInput"}/>
                    {
                        "email" in errors?
                        <p className="alert">{errors.email}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                    id="password" value={password}
                    onChange={handlePassword}
                    className={"password" in errors?"badInput":password===""?null:"goodInput"} />
                    {
                        "password" in errors?
                        <p className="alert">{errors.password}</p>:
                        null
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    className={"confirmPassword" in errors?"badInput":confirmPassword===""?null:confirmPassword.length >= 8?"goodInput":null}/>
                    {
                        "confirmPassword" in errors?
                        <p className="alert">{errors.confirmPassword}</p>:
                        null
                    }
                </div>

                <input
                type="submit"
                value="Create User"
                disabled={Object.keys(errors).length > 0 || fieldBlank ? true : false}/>
            </form>
        </>
    );
};

export default UserForm;