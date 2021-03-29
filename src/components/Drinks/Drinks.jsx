import React, { useState, useEffect } from "react";
import BuscaDrinks from "./BuscaDrinks/BuscaDrinks";
import DrinksPopulares from "../Drinks/DrinksPopulares/DrinksPopulares";
import { NavLink, Switch, Route } from "react-router-dom";
import styles from "./Drinks.module.css"


function Drinks() {

  return (
    <section className={styles.conteudo + " animacao"}>
    <h1 className = {styles.tituloConteudo}>Drinks</h1>

    <nav className = {styles.navConteudo}>
        <NavLink className={styles.btnNav} to="/drinks/populares" activeStyle={{ background: '#f9ae48' }}>
          Drinks Populares
        </NavLink>
    
        <NavLink className={styles.btnNav} to="/drinks/buscar" activeStyle={{ background: '#f9ae48' }}>
          Drinks Aleatórios
        </NavLink>
  </nav>
    
   
      <Switch>
        <Route path="/drinks/buscar">
          <BuscaDrinks />
        </Route>
        <Route path="/drinks/populares">
          <DrinksPopulares />
        </Route>
      </Switch>
    </section>
  );
}
export default Drinks;
