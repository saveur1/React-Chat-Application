import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import SignUp from './pages/sign-up';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/sign-in';
import Dashboard from './pages/dashboard';

function App() {
  const theme = extendTheme({
     colors:{
      brand:{
        100:"#F5F7FB",
        200:"#7269EF",
        300:"#E6EBF5",
        search:"#A096A2"
      }
     }
    });
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" index element={<Dashboard/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
