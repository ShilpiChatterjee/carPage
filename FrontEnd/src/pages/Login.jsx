import { useState } from 'react'
import { Navigate } from "react-router-dom";
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
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from '../redux/auth/auth.actions';

  const initState = {
    email: "",
    password: ""
  };

  
const Login = () => {
    const [formData, setFormData] = useState(initState);
    const [show, setShow] = useState(false);
    const { isAuth } = useSelector((state)=>state.auth)
    console.log(isAuth);
    const handleClick = () => setShow(!show);
    const dispatch = useDispatch()
    const handleChange = (e) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value
      }));
    };
    const handelForm = async (e) => {
      e.preventDefault();

      dispatch(LogIn(formData))
    };
    console.log(formData);
    if (isAuth) {
      Swal.fire(
        'Login Suceesfully!',
        'success'
      )
        return <Navigate to="/profile" />;
        
      }
    return (
      <div className="App">
        <Heading color="blue.500" my="10">Login</Heading>
        <form onSubmit={handelForm} style={{ width: "100%" }}>
          <Container
            maxW="40%"
            mb="10"
            borderRadius="20"
            centerContent
           
          >
            <FormControl py="10" maxW="80%">
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
                Login
              </Button>
            </FormControl>
          </Container>
        </form>
      </div>
    );
}

export default Login