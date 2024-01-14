import knex from "../lib/db.js";

export async function getJobs() {
  try {
    const jobs = await knex.table("job").select();
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
}

export async function getjobyId(id) {
  try {
    const job = await knex.table("job").first().where({ id });
    return job;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
}
