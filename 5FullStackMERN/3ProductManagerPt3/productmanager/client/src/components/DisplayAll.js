import { Link } from '@reach/router';
import axios from 'axios';
import React, {useEffect} from 'react';

const DisplayAll = (props) => {
    const {productList, setProductList} = props

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => setProductList(res.data.products))
        .catch(err => console.log("I have failed (get all)", err))
    }, [])
    
    const deleteHandler = (productId) =>{
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res =>{
            const newProductList = productList.filter(product => (
                product._id !== productId
            ))
            setProductList(newProductList)
        })
        .catch(err => console.log("I failed delete main view: ",err))
    }

    return(
        <div>
            <h2>Product List</h2>
            <hr />
            {
                productList?
                <ul>
                    {
                        productList.map((product,index) => (
                            <li key={index}>
                                <Link to={`/product/${product._id}`}>
                                    {product.title}
                                </Link>
                                <button>
                                    <Link style={{textDecoration:"none", color:"black"}} to={`/product/edit/${product._id}`}>
                                        Edit
                                    </Link>
                                </button>
                                <button onClick={e => deleteHandler(product._id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
                :<span>There are no products to display.</span>
            }
        </div>
    );
};

export default DisplayAll;