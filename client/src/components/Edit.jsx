import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Edit = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [formData, setFormData] = useState({})
    const navigator = useNavigate()

    const getOneProduct = () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=> {
                setProduct(res.data)
                setFormData(res.data)
            })
            .catch(err=> console.log(err))
    }

    useEffect(getOneProduct, [])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(currentData => ({...currentData, [name]:value}))
    }

    // const [titleErr, setTitleErr] = useState('')
    // const [priceErr, setPriceErr] = useState('')
    // const [descriptionErr, setDescriptionErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, formData)
            .then (res => {setFormData({
                title: "",
                price: '',
                description: "",
            })
            navigator(`/products/${id}`)
        })
            .catch (err => console.log(err))
    }

    const errStyle = {
        color: "red",
        fontWeight: "bold",
        margin: 0,
        padding: 0
    }

    return (
        <div>
            <h2>Edit {product.title}</h2>
            <form onSubmit={handleSubmit}>
                {/* <p style={errStyle}>{titleErr}</p> */}
                <div className='form-fields'>
                    <label className='text'>Title: </label>
                    <input className='text-center' name="title" type="text" onChange={handleChange} value={formData.title} placeholder={product.title}/>
                </div>
                {/* <p style={errStyle}>{priceErr}</p> */}
                <div className='form-fields'>
                    <label className='text'>Price: </label>
                    <input className='text-center' name="price" type="number" onChange={handleChange} value={formData.price} placeholder={product.price} />
                </div>
                {/* <p style={errStyle}>{descriptionErr}</p> */}
                <div className='form-fields'>
                    <label className='text'>Description: </label>
                    <input className='text-center' name="description" type="text" onChange={handleChange}  value={formData.description} placeholder={product.description} />
                </div>
                <button className='button'>Update</button>
                <Link to={`/products/${product._id}`}><button className='button'>Go Back</button></Link>
        </form>
        </div>
    )
}

export default Edit