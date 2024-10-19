// src/MainRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'; 
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Header from '../Components/Header';
import CreateProductPage from '../Pages/createProduct';

// Import other components as needed

const MainRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                        <Header /> {/* Header will only appear on the Home page */}
                        <Home />
                    </>
                } 
            />
            <Route 
                path="/login" 
                element={<Login />}                 
                />
            <Route 
                path="/signup"
                element={<Signup />} 
                />
                 <Route 
                path="/create"
                element={<CreateProductPage/>} 
                />
            
        </Routes>
    );
};

export default MainRoutes;
