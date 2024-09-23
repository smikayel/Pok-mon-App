import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';

const prisma = new PrismaClient();

async function fetchPokemonNames(limit = 100) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await response.json();

    return data.results.map(pokemon => pokemon.name);
}

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
        isGuessed: false,
    };

    await prisma.pokemon.create({ data: pokemon });
}

async function main() {
    const pokemonNames = await fetchPokemonNames(157) // fetch the 157 pokemon data

    for (const name of pokemonNames) {
        await fetchAndSavePokemon(name);
    }
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
