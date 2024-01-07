import { Context } from "@/types";

export const resolvers = {
  Query: {
    getJobs: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.job.findMany();
    },
  },
};
