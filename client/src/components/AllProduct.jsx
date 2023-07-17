import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllProduct = (props) => {

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=> {
                props.fetchProducts()
            })
            .catch(err=>console.log(err))
    }

    return (
        <>
            {
                props.products.map((product, key) => {
                    return <div key={key}>
                        <hr/>
                        <Link to={`/products/${product._id}`}><h3>{product.title}</h3></Link>
                        <button onClick={(e)=> {deleteProduct(product._id)}} className='del-button mb-3'>Delete</button>
                    </div>
                })
            }
        </>
    )
}

export default AllProduct