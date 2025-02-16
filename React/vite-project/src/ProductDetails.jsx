import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {getProductById} from "./api"

const ProductDetails = () => {
    const params = useParams();
    const id = params.id;
    // useEffect with empty dependency array

    // function to fetch product by id

    // create function in api.js which will fetch product using 
    // `https://fakestoreapi.com/products/${id}`

    const fetchProductData = async() => {
        console.log(`I am calling api with ${id}`);
    }

    useEffect(()=>{

        fetchProductData()
    },[])

    return <div> I am the product {params.id}</div>
}

export default ProductDetails;