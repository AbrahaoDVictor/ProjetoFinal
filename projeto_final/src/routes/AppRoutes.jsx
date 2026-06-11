import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import {Login} from '../pages/Login/Login.jsx';
import {Home} from '../pages/Home/Home.jsx';
import {Veiculos} from '../pages/Veiculos/Veiculos.jsx';
import {Motos} from '../pages/Motos/Motos.jsx';
import { NotFound } from '../pages/NotFound/NotFound.jsx';
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute.jsx"

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route element={<App />}>
          <Route path='/home' element={<Home />} />
          <Route path='/veiculos' element={<Veiculos />} />
          <Route path='/motos' element={<Motos />} />
        </Route>
      </Route>
    <Route path='/' element={<Navigate to="/home" replace/>}/>
    <Route path="*" element={<NotFound />} />
    </Routes>
  );
}