import React from "react";
import Button from "../../Contato/Button/Button";
import styles from "./BuscaDrinks.module.css";

function BuscaDrinks() {
  const [requisicao, setRequisicao] = React.useState({});

  async function buscaDrinks() {
    console.log("rodando o useEffect");

    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const dados = await response.json();

    return setRequisicao(dados.drinks[0]);
  }

  React.useEffect(() => buscaDrinks(), []);

  return (
    <div className={styles.container}>
      <h3> Drink Sorteado: {requisicao.strDrink}</h3>
      <p> Categoria: {requisicao.strCategory} </p>
      <p> Instruções: {requisicao.strInstructions} </p>
      <Button style={styles.btnStyle} onClick={buscaDrinks}>
        Escolha outro drink
      </Button>
    </div>
  );
}

export default BuscaDrinks;