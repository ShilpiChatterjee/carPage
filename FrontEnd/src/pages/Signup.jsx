import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import {
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    InputRightElement,
    InputGroup
  } from "@chakra-ui/react";


  const initState = {
    name: "",
    email: "",
    password: ""
  };

  
const Signup = () => {
   const navigate = useNavigate()
  const [formData, setFormData] = useState(initState);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };
  const handelForm = async (e) => {
    e.preventDefault();
    try{
        let { data } = await axios.post("https://mock123232.onrender.com/users/register",formData)
        console.log(data.user._id);
        localStorage.setItem("userId",data.user._id)
        navigate("/login")
        Swal.fire(
          'Signup successfully!',
          'success'
        )
    }
    catch({response:{data:{message}}}){
         alert({
            icon: 'error',
            title:message
          })
         console.log(message);
    }

  };
  console.log(formData);
  return (
    <div className="App">
      <Heading color="blue.500" my="10">Signup</Heading>
      <form onSubmit={handelForm} style={{ width: "100%" }}>
        <Container
          maxW="40%"
          mb="10"
          borderRadius="20"
          centerContent
         
        >
          <FormControl py="10" maxW="80%">
            <FormLabel fontWeight="700" mt="10">
              Name
            </FormLabel>
            <Input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              variant="flushed"
              pl="3"
            />
            <FormLabel fontWeight="700" mt="10">
              Email
            </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              variant="flushed"
              pl="3"
            />
            <FormLabel fontWeight="700" mt="10">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                type={show ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                variant="flushed"
                pl="3"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button colorScheme="blue" py="5" mt="10" type="submit">
              Register
            </Button>
          </FormControl>
        </Container>
      </form>
    </div>
  );
}

export default Signup