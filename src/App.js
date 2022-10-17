import React from "react";
import "./App.css";
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const mensaje = "¡Bienvenidos a la página número 1 de ventas de Funko-Pop en el país!"

  return (
   <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/detalles/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
