import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from './Component/Signup';
import Signin from './Component/Signin';
const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    </Routes>
    </>
  )
};

export default App