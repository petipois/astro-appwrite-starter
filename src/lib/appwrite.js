import { Client, Account, Databases, Storage } from "appwrite";
const projectID = import.meta.env.PUBLIC_ASTRO_APPWRITE_PROJECT_ID;
const endpoint = import.meta.env.PUBLIC_ASTRO_APPWRITE_ENDPOINT;
const client = new Client().setEndpoint(endpoint).setProject(projectID)
const account = new Account(client)
const db = new Databases(client)
const storage = new Storage(client)
// Initialize Appwrite Database
const databaseId = import.meta.env.PUBLIC_ASTRO_APPWRITE_DATABASE_ID; // Replace with your database ID
const collectionId = import.meta.env.PUBLIC_ASTRO_APPWRITE_COLLECTION_ID; // Replace with your notes collection ID
const storageID = import.meta.env.PUBLIC_ASTRO_APPWRITE_STORAGE_BUCKET;

export { account, db, storage, databaseId, collectionId, storageID }