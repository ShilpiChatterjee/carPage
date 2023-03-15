import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'

const Cart = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        handleFetch()
    }, [])

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
    if (loading) return <h1>...Loading</h1>
    return (
        <div className='container' >
            {
                data && data.length > 0 && data.map((el) => <SingleProduct brand={el.brand} key={el.id} id={el.id}
                    desc={el.Description} price={el.Price} year={el.year} handlefetch={handleFetch}
                />)
            }

        </div>
    )
}

export default Cart