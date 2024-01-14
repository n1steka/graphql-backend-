import knex from "../lib/db.js";
import { customAlphabet } from "nanoid";

const chars = "1234567890ABCDEFGHIKLMNOPQRSTUVWZabcdefghiklmnopqrstubwz";
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

export async function createJob(companyId, title, description) {
  const newJob = {
    id: customAlphabet(chars, 12)(),
    companyId,
    title,
    description,
    createdAt: new Date().toISOString(),
  };
  await knex.table("job").insert(newJob);
  return newJob;
}
