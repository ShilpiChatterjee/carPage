import React from 'react'

const SingleProduct = ({ id, brand, year, desc, price ,handlefetch }) => {
    const HandleDelete =async () =>{
        try {
                let res = await fetch(`https://kaalu.onrender.com/cars/${id}`,{
                    method:'DELETE',
                }) 
                let data = await res.json()
                handlefetch()
                alert("Car Delete")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='cont' >
            <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cars" />
            <h1>{brand}</h1>
            <h4>{year}</h4>
            <p>{desc}</p>
            <p>{price}</p>
            <button onClick={HandleDelete} >Delete</button>
        </div>
    )
}

export default SingleProduct