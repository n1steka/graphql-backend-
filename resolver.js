import { getJobs } from "./controllers/jobs.js";
import { getCompanyById } from "./controllers/company.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs()
  },
  Job: {
    date: (root) => root.createdAt.slice(0, 10) , 
    company : (root) => getCompanyById(root.companyId)
}
};
