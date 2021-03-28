// função que faz o tratamento da chamada da API feita fora dos componentes, devido a responsabilidade única

export async function alcoholSearch (alcohol) {
    const response = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcohol}`)
    const json = await response.json();
    return json
}

export async function fetchDrinksDetail (id) {
    const response = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/filter.lookup.php?i=${id}`)
    const json = await response.json();
    return json
}