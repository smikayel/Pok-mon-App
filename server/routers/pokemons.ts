import { z } from "zod";
import { prisma } from "../database";
import { publicProcedure, router } from "../trpc";

export const pokemonRouter = router({
  getPokemons: publicProcedure.query(async () => {
    try {
      const pokemons = await prisma.pokemon.findMany();

      return { pokemons };
    } catch (e) {
      throw e;
    }
  }),
  getProgress: publicProcedure.query(async () => {
    try {
      const pokemons = await prisma.pokemon.count();
      const guessedCount = await prisma.pokemon.count({
        where: {
          isGuessed: true,
        },
      });
    
      return { total: pokemons, current: guessedCount };
    } catch (e) {
      throw e;
    }
  }),
  getRandomNotGuessedPokemon: publicProcedure.query(async () => {
    try {
      const notGuessedCount = await prisma.pokemon.count({
        where: {
          isGuessed: false,
        },
      });

      if (notGuessedCount === 0) {
        return { pokemon: null };
      }

      const randomIndex = Math.floor(Math.random() * notGuessedCount);
      const randomPokemon = await prisma.pokemon.findMany({
        where: {
          isGuessed: false,
        },
        skip: randomIndex,
        take: 1,
      });

      return { pokemon: randomPokemon[0] };
    } catch (e) {
      throw e;
    }
  }),
  guessPokemon: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      try {
        const updatedPokemon = await prisma.pokemon.update({
          where: { id: input.id },
          data: { isGuessed: true },
        });
        return updatedPokemon; 
      } catch (e) {
        throw e;
      }
    }),
});
