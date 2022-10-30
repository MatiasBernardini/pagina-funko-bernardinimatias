import React from "react";
import "./App.css";
import Navbar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartWiew/Cart"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider   } from "./Context/CartContext";

const App = () => {
  const mensaje = "¡Bienvenidos a la página número 1 de ventas de Funko-Pop en el país!"

  return (
   <>
      <BrowserRouter>
        <CustomProvider >
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route path='/detalles/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CustomProvider >
      </BrowserRouter>
   </>
  );
}

export default App;
