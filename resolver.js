import { getJobs } from "./controllers/jobs.js";

export const resolvers = {
  Query: {
    jobs:  () => {
      try {
        const jobs =  getJobs();
        return jobs;
      } catch (error) {
        // Handle errors if necessary
        console.error("Error fetching jobs:", error);
        throw error; // You may want to handle this differently based on your needs
      }
    },
  },
};
