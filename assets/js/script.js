async function displayArray() {
    let httpArray = await fetch('http://localhost:3000/pokemons')
    let arrayString = await httpArray.text()
    let pokemons = JSON.parse(arrayString)
    for (let pokemon of pokemons) {
        document.querySelector('body').innerHTML += `<div>Name: ${pokemon.name} - Type: ${pokemon.type}</div>`
    }
}

async function displayPokemon() {
    let pkmns = [];
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    let res = await response.json();
    pkmns = res.results
    for (let pkmn of pkmns) {
        let container = document.querySelector('.container')
        let card = document.createElement('div')
        card.innerHTML = `<div class="card">
                          <h3>${pkmn.name}</h3>
                          </div>`
        container.appendChild(card)
        console.log(pkmn.name)
    }
}

window.onload = () => {
    displayArray()
    displayPokemon()
}

