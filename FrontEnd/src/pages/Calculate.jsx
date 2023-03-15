import React, { useState } from 'react'
import {
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    HStack,
    Text
  } from "@chakra-ui/react";
  import axios from "axios";
  const initState = {
    invest: 1,
    time: 1,
  };
const Calculate = () => {
    const [formData, setFormData] = useState(initState);
    const [Data, setdata] = useState({});

    const handleChange = (e) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value
      }));
    };
    const handelForm = async (e) => {
      e.preventDefault();
      let { data } = await axios.post('https://mock123232.onrender.com/users/calculate',formData)
      setdata(data)
       console.log(data);
    };
    console.log(formData)
  return (
    <div>
        <Heading color="blue.500" my="10">Loan calculator</Heading>
        <form onSubmit={handelForm} style={{ width: "50%" }}>
          <Container
            maxW="90%"
            mb="10"
            borderRadius="20"
            centerContent
          >



            <FormControl py="8" maxW="78%">
              <FormLabel fontWeight="500" mt="10">
                Total Amount
              </FormLabel>
              <Input
                name="invest"
                type="range"
                value={formData.invest}
                min="10000" max="150000" 
                onChange={handleChange}
                pl="3"
              />


              <FormLabel fontWeight="700" mt="10">
                Time Period ( in years)
              </FormLabel>
                <Input
                  name="time"
                  type="range"
                  min="2" max="15" 
                  value={formData.time}
                  onChange={handleChange}
                  pl="3"
                />


                 <FormLabel fontWeight="700" mt="10">
                <HStack spacing='300px' >
                    <Text>Rate of Interest (in Years)</Text>
                    <Text color="red">7.1%</Text>
                </HStack>
              </FormLabel>
               
              <Button colorScheme="blue" py="5" mt="10" type="submit">
                Submit
              </Button>
            </FormControl>

            <HStack spacing='300px' >
                    <Text>Total Amount</Text>
                    <Text>{Data ? Data.Total_Investment_Amount:0}</Text>
                </HStack>
                <HStack spacing='200px' >
                    <Text>Total Interest</Text>
                    <Text>{Data ? Data.Total_Interest_Gained:0}</Text>
                </HStack>
                <HStack spacing='200px' >
                    <Text>Total Amount</Text>
                    <Text>{Data ? Data.Total_Maturity_Value: 0}</Text>
                </HStack>
          </Container>
        </form>
    </div>
  )
}

export default Calculate