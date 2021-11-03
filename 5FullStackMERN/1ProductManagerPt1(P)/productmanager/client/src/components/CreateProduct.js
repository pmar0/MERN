import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CreateProduct = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:8000/api/products',{
            title,
            price,
            description
        })
        .then(res =>{
            console.log("woot",res)
            setTitle("")
            setPrice("")
            setDescription("")
        })
        .catch(err => console.log("I fail",error))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title}/><br/>
                <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)} value={price}/><br/>
                <input type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} value={description}/><br/>
                <button type="submit">Submit Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;