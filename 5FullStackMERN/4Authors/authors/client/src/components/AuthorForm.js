import React, {useState} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const AuthorForm = (props) => {
    const {authorList, setAuthorList} = props
    const [errors, setErrors] = useState({})
    const [name, setName] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newAuthor = {
            name
        }

        axios.post('http://localhost:8000/api/authors',newAuthor)
        .then(res =>{
            setAuthorList([res.data.author,...authorList])
            setName("")
            navigate("/")
        })
        .catch(err => {
            console.log("Author post failed: ", err)
            setErrors(err.response.data.error.errors)
        })
    }

    return(
        <div>
            <h1>Add Author</h1>
            <Link to={'/'}>Home</Link>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Author name" onChange={e => setName(e.target.value)} value={name}/><br/>
                {
                    errors.name?
                    <p>{errors.name.message}</p>
                    :null
                }
                <button type="submit">Submit Author</button>
            </form>
        </div>
    );
};

export default AuthorForm;