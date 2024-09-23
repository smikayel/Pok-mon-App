import { pokemonRouter } from "./routers/pokemons";
import { router } from "./trpc";

export const appRouter = router({
  pokemons: pokemonRouter,
});

export type AppRouter = typeof appRouter;
