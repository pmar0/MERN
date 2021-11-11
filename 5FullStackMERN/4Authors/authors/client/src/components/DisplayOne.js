import { navigate, Link } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const DisplayOne = (props) => {
    const {authorId} = props
    const [author, setAuthor] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${authorId}`)
        .then(res => setAuthor(res.data.author))
        .catch(err => console.log("I failed getOne: ", err))
    }, [])

    const deleteHandler = (authorId) =>{
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(res =>{
            navigate("/")
        })
        .catch(err => console.log("I failed delete single view: ",err))
    }

    return(
        <div>
            {
            author?
                <div>
                    <h1>{author.name}</h1>
                    <button onClick={e => deleteHandler(author._id)}>Delete</button>
                </div>
            :
                <h2>
                    <span>This author cannot be found..why not </span>
                    <Link to={"/authors/new"}>add one?</Link>
                </h2>
            }
        </div>
    );
};

export default DisplayOne;