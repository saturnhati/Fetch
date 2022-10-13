const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello!')
})

let pokemons = [
    {
        "id": "001",
        "name": "Bulbasaur",
        "type": "grass/poison"
    },
    {
        "id": "002",
        "name": "Ivysaur",
        "type": "grass/poison"
    },
    {
        "id": "003",
        "name": "Venusaur",
        "type": "grass/poison"
    },
    {
        "id": "004",
        "name": "Charmander",
        "type": "fire"
    },
    {
        "id": "005",
        "name": "Charmeleon",
        "type": "fire"
    },
    {
        "id": "006",
        "name": "Charizard",
        "type": "fire/flying"
    },
    {
        "id": "007",
        "name": "Squirtle",
        "type": "water"
    },
    {
        "id": "008",
        "name": "Wartortle",
        "type": "water"
    },
    {
        "id": "009",
        "name": "Blastoise",
        "type": "water"
    }
]

let pokemonsString = JSON.stringify(pokemons)

app.get('/pokemons', (req, res) => {
    res.send(pokemonsString)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})