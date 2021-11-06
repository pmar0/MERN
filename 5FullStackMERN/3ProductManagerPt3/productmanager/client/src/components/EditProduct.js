import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditProduct = (props) => {
    const {productId} = props
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${productId}`)
        .then(res =>{
            setTitle(res.data.product.title)
            setPrice(res.data.product.price)
            setDescription(res.data.product.description)
        })
        .catch(err => console.log("Product edit get failed: ",err))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();

        const editedProduct = {
            title,
            price,
            description
        }

        axios.put(`http://localhost:8000/api/products/${productId}`,editedProduct)
        .then(res =>{
            setTitle("")
            setPrice("")
            setDescription("")
            navigate("/")
        })
        .catch(err => console.log("Product edit submit failed: ",err))
    }

    return(
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title}/><br/>
                <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)} value={price}/><br/>
                <input type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} value={description}/><br/>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    );
};

export default EditProduct;