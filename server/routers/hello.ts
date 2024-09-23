import { publicProcedure, router } from "../trpc";

export const helloRouter = router({
  hello: publicProcedure.query(async () => {
    try {
    return {data : 'here'}
    } catch (e) {
      throw e;
    }
  }),
});
