import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import {Login} from '../pages/Login/Login';
import {Home} from '../pages/Home/Home';
import {Veiculos} from '../pages/Veiculos/Veiculos';
import {Motos} from '../pages/Motos/Motos';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/veiculos' element={<Veiculos />} />
        <Route path='/motos' element={<Motos />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}