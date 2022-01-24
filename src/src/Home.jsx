//rfc importa funcion
//rafce importa funcion de flecha
///  <Navbar /> despues del div

import React from "react";
import { ItemListCOntainer } from "../components/ItemListContainer/ItemListContainer";
import Navbar from "../components/NavBar/NavBar.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <ItemListCOntainer greeting="Hola este es el Saludo de ItemListsContainers!"></ItemListCOntainer>
    </div>
  );
};

export default Home;
