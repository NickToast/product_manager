import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {



    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: ''
    })

    const navigator = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(currentData => ({...currentData, [name]:value}))
    }

    const [titleErr, setTitleErr] = useState('')
    const [priceErr, setPriceErr] = useState('')
    const [descriptionErr, setDescriptionErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', formData)
            .then (res => {setFormData({
                title: "",
                price: "",
                description: "",
            })
            props.fetchProducts()
        })
            .catch (err => {
                const errors = err.response.data.errors
                if (errors.title) {
                    setTitleErr(errors.title.message)
                } else {
                    setTitleErr('')
                }
                if (errors.price){
                    setPriceErr(errors.price.message)
                } else {
                    setPriceErr ('')
                }
                if (errors.description) {
                    setDescriptionErr(errors.description.message)
                } else {
                    setDescriptionErr('')
                }
            })
    }


    const errStyle = {
        color: "red",
        fontWeight: "bold",
        margin: 0,
        padding: 0
    }

    return (
        <form onSubmit={handleSubmit}>
            <p style={errStyle}>{titleErr}</p>
            <div className='form-fields'>
                <label className='text'>Title: </label>
                <input className='text-center' name="title" type="text" onChange={handleChange} value={formData.title} />
            </div>
            <p style={errStyle}>{priceErr}</p>
            <div className='form-fields'>
                <label className='text'>Price: </label>
                <input className='text-center' name="price" type="number" onChange={handleChange} value={formData.price} />
            </div>
            <p style={errStyle}>{descriptionErr}</p>
            <div className='form-fields'>
                <label className='text'>Description: </label>
                <input className='text-center' name="description" type="text" onChange={handleChange}  value={formData.description} />
            </div>
            <button className='button'>Create</button>
        </form>
    )
}

export default Form