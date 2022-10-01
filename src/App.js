import React from "react";
import "./App.css";
import Navbar from './componentes/Navbar/Navbar'
import { ItemListContainer } from './Containers/ItemListContainer'

const App = () => {
  const mensaje = "¡Bienvenidos a la página número 1 de ventas de Funko-Pop en el país!"

  return (
   <>
      <Navbar /> 
      <ItemListContainer greeting={mensaje}/>
   </>
  );
}

export default App;
