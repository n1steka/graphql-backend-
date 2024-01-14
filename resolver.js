import { getJobs, getjobyId, createJob } from "./controllers/jobs.js";
import { getCompanyById } from "./controllers/company.js";
import { GraphQLError } from "graphql";

export const resolvers = {
  Mutation: {
    createJob: (root, { title, description }) => {
      const companyId = "FjcJCHJALA4i";
      return createJob("FjcJCHJALA4i", title, description);
    },
  },
  Query: {
    jobs: () => getJobs(),
    job: (root, { id }) => {
      const job = getjobyId(id);
      if (!job) {
        errorHandler(`${id}-тай зар  олдсонгүй`);
      }
      return job;
    },
    company: async (root, { id }) => {
      const company = await getCompanyById(id);
      if (!company) {
        errorHandler(`${id}-тай company  олдсонгүй`);
      }
      return company;
    },
  },
  Job: {
    date: (root) => root.createdAt.slice(0, 10),
    company: (root) => getCompanyById(root.companyId),
  },
};

function errorHandler(message) {
  throw new GraphQLError(message, {
    extensions: { code: "BAD_USER_INPUT" },
  });
}
