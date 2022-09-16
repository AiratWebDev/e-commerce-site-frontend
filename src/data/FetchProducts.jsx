import React, {useEffect, useState} from 'react';
import axios from "axios";

const FetchProducts = () => {
    const [products, setProducts] = useState([])

    async function FetchProducts() {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/products')
        setProducts(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        FetchProducts()
    },[])

    return products
};

export default FetchProducts;