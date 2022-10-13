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
    let response = await fetch('http://localhost:3000/myJson')
    pkmns = await response.json();
    for (let pkmn of pkmns) {
        let container = document.querySelector('.container')
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('border')
        card.classList.add('border-3')
        card.classList.add('border-dark')
        card.style.width = '18rem'
        card.innerHTML = `<img src="${pkmn.img}" class="card-img-top" alt="...">
                          <div class="card-body">
                          <h2 class="fs-3 my-1">${pkmn.id} - ${pkmn.name}</h2>
                          <p class="card-text">Type: ${pkmn.type}</p>
                          </div>`
        container.appendChild(card)
        console.log(pkmn.name)
    }
}

window.onload = () => {
    displayArray()
    displayPokemon()
}

