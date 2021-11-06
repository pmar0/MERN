import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const DisplayOne = (props) => {
    const {productId} = props
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${productId}`)
        .then(res => setProduct(res.data.product))
        .catch(err => console.log("I failed getOne: ", err))
    }, [])

    const deleteHandler = (productId) =>{
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res =>{
            navigate("/")
        })
        .catch(err => console.log("I failed delete single view: ",err))
    }

    return(
        <div>
            {
            product?
            <div>
                <h1>{product.title}</h1>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <button onClick={e => deleteHandler(product._id)}>Delete</button>
            </div>
            :<p>This is not a product..why are you here?</p>
            }
        </div>
    );
};

export default DisplayOne;