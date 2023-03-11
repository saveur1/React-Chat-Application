import { Box,VStack, Grid, Text } from '@chakra-ui/react';
import Logo from "../../assets/svg/my_logo.svg";
import {Link} from "react-router-dom";
import LoginCard from "./components/LoginCard";
export default function Login()
{
  return(
        <Box style={{backgroundColor:"#F6F6FE"}} textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={3}>
            <Text margin={7}/>
            <img src={Logo} width={150} alt="Logo"/>
            <span>Sign in to continue to Bchat</span>
            <LoginCard/>
            <span className = "heading6">Don't have an account? <Link to="/signup" as="a" style={{color:"blue"}}>Sign up for free!</Link></span>
            <Text className="footerText"  style={{position:"absolute",bottom:"6px"}} fontSize={15} fontStyle="italic"><i className='fa fa-copyright'></i>&nbsp;2023 Bchat. Made with&nbsp;<i className='fa fa-heart' style={{color:"red"}}></i>&nbsp;By Bikorimana Saveur</Text>
          </VStack>
        </Grid>
      </Box>
    );
}