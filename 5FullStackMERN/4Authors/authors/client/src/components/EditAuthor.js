import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const EditAuthor = (props) => {
    const {authorId} = props
    const [errors, setErrors] = useState({})
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${authorId}`)
        .then(res =>{
            setName(res.data.author.name)
        })
        .catch(err => console.log("Author edit get failed: ",err))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();

        const editedAuthor = {
            name,
        }

        axios.put(`http://localhost:8000/api/authors/${authorId}`,editedAuthor)
        .then(res =>{
            setName("")
            navigate("/")
        })
        .catch(err => {
            console.log("Author edit submit failed: ", err)
            setErrors(err.response.data.error.errors)
        })
    }

    return(
        <div>
            <h1>Edit Author</h1>
            <Link to={'/'}>Home</Link>
            {
            name?
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} value={name}/><br/>
                    {
                        errors.name?
                        <p>{errors.name.message}</p>
                        :null
                    }
                    <button type="submit">Submit Changes</button>
                </form>
            :
                <h2>
                    <span>This author cannot be found..why not </span>
                    <Link to={"/authors/new"}>add one?</Link>
                </h2>
            }
        </div>
    );
};

export default EditAuthor;