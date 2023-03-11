import SignupCard from "./components/signup_card";
import { Box,VStack, Grid, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/my_logo.svg";
export default function SignUp()
{
  return(
        <Box style={{backgroundColor:"#F6F6FE"}} textAlign="center" fontSize="xl" overflow="hidden">
        <Grid minH="100vh" p={3} overflow="hidden">
          <VStack spacing={3} overflow="hidden">
            <Text mt={2}/>
            <img src={Logo} width={150} alt="Logo"/>
            <span>Create your free Bchat account now!</span>
            <SignupCard/>
            <span className="heading6">Already have an account? <Link to="/login" style={{color:"blue"}}>Sign in now!</Link></span>
            <Text style={{position:"absolute",bottom:"6px"}} fontSize={15} fontStyle="italic"><i className='fa fa-copyright'></i>&nbsp;2023 Bchat. Made with&nbsp;<i className='fa fa-heart' style={{color:"red"}}></i>&nbsp;By Bikorimana Saveur</Text>
          </VStack>
        </Grid>
      </Box>
    );
}