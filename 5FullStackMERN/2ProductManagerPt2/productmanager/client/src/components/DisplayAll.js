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