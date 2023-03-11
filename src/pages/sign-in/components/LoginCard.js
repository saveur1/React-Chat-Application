import { Card, Stack, InputGroup, InputLeftAddon, Checkbox, Button, CardBody, Input, FormLabel, FormControl, Link } from '@chakra-ui/react';
import { FaLock } from 'react-icons/fa';
export default function LoginCard()
{
    return(
        <Card px={6} my={7} py={15} width={"auto"}>
            <CardBody>
                <Stack spacing={4}>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <InputLeftAddon children={<i className="fa fa-envelope" aria-hidden="true"></i>} />
                        <Input type='email' placeholder='' />
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <Stack spacing={"auto"} direction="row">
                        <FormLabel>Password</FormLabel>
                        <FormLabel as={Link} style={{color:"#8A8994"}}>Forgot Password</FormLabel>
                      </Stack>
                      <InputGroup>
                        <InputLeftAddon children={<FaLock/>} />
                        <Input type='password' placeholder='' />
                      </InputGroup>
                    </FormControl>
                    <Checkbox colorScheme='blue'>Remember Me</Checkbox>
                    <Button style={{backgroundColor:"#7269EF",fontSize:"12px",color:"white"}} size='lg' letterSpacing={2}>SIGN IN</Button>
                </Stack>
            </CardBody>
            </Card>
           );
}