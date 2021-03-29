// função que faz o tratamento da chamada da API feita fora dos componentes, devido a responsabilidade única

export async function drinksAle() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  const res = await response.json();
  return res.drinks[0];
}

export async function drinksInfo() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  );
  const respjson = await response.json();
  return respjson.drinks;
}
