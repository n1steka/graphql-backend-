import { getJobs } from "./controllers/jobs.js";
import { getCompanyById } from "./controllers/company.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs()
  },
  Job: {
    date: (root) => root.createdAt.slice(0, 10) , // Use the correct end index for date format "yyyy-mm-dd"
    company : (root) => getCompanyById(root.companyId)
}
};
