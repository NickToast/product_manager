import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import AllProduct from '../components/AllProduct'

const Dashboard = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }

    useEffect(fetchProducts, [])

    return (
        <div>
            <Form fetchProducts={fetchProducts}/>
            <AllProduct products={products} fetchProducts={fetchProducts}/>
        </div>
    )
}

export default Dashboard