import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Product = () => {

    const {id} = useParams();

    const [product, setProduct] = useState({})

    const [productData, setProductData] = useState({
        title: "",
        price: "",
        description: "",
    })

    const navigator = useNavigate()

    const getOneProduct = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProductData(res.body)
                setProduct(res.data)
        })
            .catch(err => console.log(err))
    }

    useEffect(getOneProduct, [])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=> {
                navigator('/')
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <Link to={`/`}><button className='button mt-3'>Home</button></Link>
            <div className="container-style">
                <h2>{product.title}</h2>
                <h3>Price: ${product.price}</h3>
                <h4>Description: {product.description}</h4>
                <Link to={`/products/${product._id}/edit`}><button className='button'>Edit</button></Link>
                <button onClick={(e)=> {deleteProduct(product._id)}} className='del-button mb-3'>Delete</button>
            </div>
        </div>
    )
}

export default Product