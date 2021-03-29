import React from "react";
import styles from "./DrinksPopulares.module.css";
import Card from "../../Card/Card";


function DrinksPopulares() {
  const [requisicao, setRequisicao] = React.useState([]);

  async function buscaDrinks() {
    console.log("rodando o useEffect");

    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    );
    const dados = await response.json();
    return setRequisicao(dados.drinks.slice(0, 15));
  }

  React.useEffect(() => buscaDrinks(), []);

  return (
    <>
    <div className={styles.containerPrinc}>
      {requisicao.map((item) => (
        <div className={styles.containerSec} key={item.id}>
        <Card image={item.strDrinkThumb} titulo={item.strDrink} /> 
        </div>
      ))}

    </div>
    </>
  );
}

export default DrinksPopulares;
