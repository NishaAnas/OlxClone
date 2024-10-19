import React from 'react';
import { AuthContextProvider } from './ContextStore/AuthContext';
import { ProductProvider } from './ContextStore/ProductContext';
import MainRoutes from './Routes/MainRoutes';

const App = () => {
    return (
        <AuthContextProvider> 
        <ProductProvider> 
          <MainRoutes />
        </ProductProvider>
      </AuthContextProvider>
    )
}

export default App
