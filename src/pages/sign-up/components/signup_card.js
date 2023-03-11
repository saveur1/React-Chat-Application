import { Card, Stack, InputGroup, InputLeftAddon, Button, CardBody, Input, FormLabel, FormControl, Link, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SignupCard()
{
    const [ full_name, setName]= useState("");
    const [ email,setEmail ] = useState("");
    const [ password,setPassword ] = useState("");
    const navigate = useNavigate();
    const toast = useToast();
    function validateEmail(event){
      setEmail(event.target.value);
    }
    async function sendSignup() {
      const data={full_name,email,password};
      try {
        const response = await axios.post("http://localhost:5000/api/user/signup",data);
        localStorage.setItem("userInfo",JSON.stringify(response.data));
        navigate("/");
      } catch (error) {
        toast({title:"Error While Signup", description:error.response.data.message, status:"error", duration:9000, isClosable:true });
      }
    
    }

    return(
        <Card px={6} my={10} py={13} width={"auto"}>
            <CardBody>
                <Stack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <InputGroup>
                        <InputLeftAddon children={<i className="fa fa-user" aria-hidden="true"></i>} />
                        <Input type='text' value={full_name} onChange={(e)=>setName(e.target.value)} required/>
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <InputLeftAddon children={<i className="fa fa-envelope" aria-hidden="true"></i>} />
                        <Input type='email' required pattern='' placeholder='' value={ email } onChange = {validateEmail}/>
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <InputLeftAddon children={<FaLock/>} />
                        <Input type='password' placeholder='' value={ password } onChange = {e => setPassword(e.target.value)}/>
                      </InputGroup>
                    </FormControl>
                    <Button style={{backgroundColor:"#7269EF",color:"white"}} fontSize="12px" letterSpacing={"2"} size='lg' onClick={sendSignup}>SIGN UP</Button>
                </Stack>
            </CardBody>
        <span style={{fontSize:"15px"}}>By registering you agree to Bchat <Link color="blue">Terms</Link> and <Link color="blue">Services</Link></span>
     </Card>
    );
}