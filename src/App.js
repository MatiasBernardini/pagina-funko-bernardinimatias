import React from "react";
import "./App.css";
import Navbar from './Componentes/Navbar/Navbar'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartWiew/Cart";
import Checkout from "./Containers/Checkout/Checkout"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider   } from "./Context/CartContext";

const App = () => {

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
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CustomProvider >
      </BrowserRouter>
   </>
  );
}

export default App;
