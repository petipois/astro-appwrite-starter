import { Client, Account, Databases, Storage } from "appwrite";
const projectID = import.meta.env.PUBLIC_ASTRO_APPWRITE_PROJECT_ID;
const endpoint = import.meta.env.PUBLIC_ASTRO_APPWRITE_ENDPOINT;
export const client = new Client().setEndpoint(endpoint).setProject(projectID)
export const account = new Account(client)
export const db = new Databases(client)
export const storage = new Storage(client)