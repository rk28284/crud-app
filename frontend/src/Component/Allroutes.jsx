import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Login } from "../Page/Login"
import { Register } from "../Page/Register"
import { NotFoundPage } from '../Page/NotFoudpage'
import { Dashboard } from '../Page/Dashboard'




export const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFoundPage />} />
            
            </Routes>
        </div>
    )
}




