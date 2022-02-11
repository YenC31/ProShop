//rfc importa funcion
//rafce importa funcion de flecha
///  <Navbar /> despues del div

import React from "react";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Announcement } from "../components/Announcement/Announcement";
import { ClotheApi } from "../ClotheApi/ClotheApi";
import { NavBar } from "../components/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <ClotheApi />
    </div>
  );
};

export default Home;
