import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
// form intial State or reset state
const init = {
    brand: "",
    Description: "",
    Price: "",
    year: ""
}
const Product = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [formData, setformData] = useState(init)

    useEffect(() => {
        // fetching data from server after rendering the component
        handleFetch()
    }, [])
 
    // fetch Function
    const handleFetch = async () => {
        setLoading(true)
        try {
            let res = await fetch("https://kaalu.onrender.com/cars")
            let cars = await res.json()
            console.log(cars)
            setData(cars)
            setLoading(false)
            setError(false)
        } catch (err) {
            setError(true)
            setLoading(false)
            console.log(err);
        }
    }


    // UPDATE INPUT STATE 
    const handleChange = (e) => {
        setformData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    }

    //  post data to the backend Server 
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        try {
            let res = await fetch("https://kaalu.onrender.com/cars", {
                method: "POST",
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            setformData(init)
            let x = await res.json()
            handleFetch()
            console.log(x)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(formData)

   // display loading Indicator by checking loaidng state
    if (loading) return <h1>...Loading</h1>
    // display Error Indicator by checking Error state
    if (error) return <h1>...Something Went Wrong</h1>
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input type='text' onChange={handleChange} value={formData.brand} placeholder='Enter Brand' name="brand" />
                <input type='text' onChange={handleChange} value={formData.Price} placeholder='Enter Price' name="Price" />
                <input type='text' onChange={handleChange} value={formData.Description} placeholder='Enter Description' name="Description" />
                <input type='text' onChange={handleChange} value={formData.year} name="year" placeholder='Enter Year' />
                <button type="submit" >Submit</button>
            </form>
            {/* data display */}
            {/* <div className='container' >
                {
                    data && data.length > 0 && data.map((el) => <SingleProduct brand={el.brand} key={el.id} id={el.id}
                        desc={el.Description} price={el.Price} year={el.year} handlefetch={handleFetch}
                    />)
                }

            </div> */}
        </>
    )
}

export default Product