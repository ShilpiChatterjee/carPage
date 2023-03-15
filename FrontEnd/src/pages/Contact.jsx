import axios from 'axios';
import React, { useState } from "react";
import './sell.css'



function Contactus() {

    const [sname, setCSname] = useState("");
    const [semail, setCSemail] = useState("");
    const [smobile, setCSmobile] = useState("");
    const [smake, setCSmake] = useState("");
   
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${sname}`);
        console.log(`EMAIL: ${semail}`);
    
        //CREATE JSON AND STORE ALL USER INPUT
        const serobj = {
            sername: sname,
            seremail: semail,
            sermobile: smobile,
            sermake: smake,
           
        }
    

        //COMMUNICATE WITH BACKEND USING REST API
        axios.post('http://localhost:5000/user/CarServicing', serobj)
            .then(res => {
                console.log(res.data)
                console.log('REGISTRATION SUCCESSFUL')

                //TO CLEAR DATA
                setCSname('')
                setCSemail('')
                setCSmobile('')
                setCSmake('')
               
                });
        
    }
    return ( 
        <>
        
        <div className='head'>
        
            <h2 style={{color:"#4682B4",margin:"auto" ,fontSize:"30px",fontWeight:500}}> CONTACT US </h2>
            
        </div>
        <div className='s1'>
            <div className='s2'>
            <marquee bgcolor="yellow"direction="left">Please report your message here</marquee>
            <form  onSubmit={handleSubmit}>
                <input id='form1' type="text" value={sname}
                    onChange={(e) => setCSname(e.target.value)} placeholder="Enter Your Name"
                    required />
                <br /><br />

                
                <input type="email" value={semail}
                    onChange={(e) => setCSemail(e.target.value)} placeholder="Enter Your Email"
                    required />
                <br /><br />

                <input type="number" value={smobile}
                    onChange={(e) => setCSmobile(e.target.value)} placeholder="Enter Your Mobile No"
                    required />
                <br /><br />

                <input type="text" value={smake}
                    onChange={(e) => setCSmake(e.target.value)} placeholder="Enter Message"
                    required /> 
                <br /><br />
                <input id='buu' type="submit" value="REGISTER" />


                

               
         </form>
         </div>
       </div>
       </>
    );
    
 
}

export default Contactus