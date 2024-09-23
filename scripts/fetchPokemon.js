// const { PrismaClient } = require('@prisma/client');
// const fetch = require('node-fetch');
// const prisma = new PrismaClient();

async function fetchAndSavePokemon(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();

    const pokemon = {
        name: data.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        image: data.sprites.front_default,
    };
    console.log(pokemon)
    // await prisma.pokemon.create({ data: pokemon });
}

async function main() {
    const pokemonNames = ['pikachu', 'bulbasaur', 'charmander']; // Add more Pokémon names or make a loop to fetch multiple

    for (const name of pokemonNames) {
        await fetchAndSavePokemon(name);
    }
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        // await prisma.$disconnect();
    });
