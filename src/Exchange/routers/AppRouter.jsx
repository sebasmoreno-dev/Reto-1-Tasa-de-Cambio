import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Login } from '../pages/Login'
import { DashboardRoutes } from './DashboardRoutes.jsx';


const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={
            <Login />
        } />

        <Route path="/*" element={
            <DashboardRoutes />
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter