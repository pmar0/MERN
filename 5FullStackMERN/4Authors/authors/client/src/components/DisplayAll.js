import { Link } from '@reach/router';
import axios from 'axios';
import React, {useEffect} from 'react';

const DisplayAll = (props) => {
    const {authorList, setAuthorList} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => setAuthorList(res.data.authors))
        .catch(err => console.log("I have failed (get all)", err))
    }, [])
    
    const deleteHandler = (authorId) =>{
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(res =>{
            const newAuthorList = authorList.filter(author => (
                author._id !== authorId
            ))
            setAuthorList(newAuthorList)
        })
        .catch(err => console.log("I failed delete main view: ",err))
    }

    return(
        <div>
            <h2>Favorite Authors</h2>
            <Link to={"/authors/new"}>Add New Author</Link>
            <hr />
            {
                (authorList.length >= 1)?
                <table style={{border: "3px black solid", margin:"0px auto"}}>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authorList.map((author,index) => (
                                <tr key={index}>
                                    <td>
                                        <Link to={`/authors/${author._id}`}>
                                            {author.name}
                                        </Link>
                                    </td>
                                    <td>
                                        <button>
                                            <Link style={{textDecoration:"none", color:"black"}} to={`/authors/edit/${author._id}`}>
                                                Edit
                                            </Link>
                                        </button>
                                        <button onClick={e => deleteHandler(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                :<span>There are no authors to display.</span>
            }
        </div>
    );
};

export default DisplayAll;