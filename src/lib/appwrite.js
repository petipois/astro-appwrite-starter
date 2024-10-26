import { Client, Account, Databases, Storage } from "appwrite";
const projectID = import.meta.env.PUBLIC_ASTRO_APPWRITE_PROJECT_ID;
const endpoint = import.meta.env.PUBLIC_ASTRO_APPWRITE_ENDPOINT;
const client = new Client().setEndpoint(endpoint).setProject(projectID)
const account = new Account(client)
const db = new Databases(client)
const storage = new Storage(client)
export  {account, db, storage}