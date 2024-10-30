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
export const SESSION_COOKIE = "login-session";
// Session client, used to make requests on behalf of the logged in user
export function createSessionClient(request) {
    const client = new Client()
        .setEndpoint(import.meta.env.PUBLIC_ASTRO_APPWRITE_ENDPOINT)
        .setProject(import.meta.env.PUBLIC_ASTRO_APPWRITE_PROJECT_ID);

    // Get the session cookie from the request and set the session
    const cookies = parseCookies(request.headers.get("cookie") ?? "");
    const session = cookies.get(SESSION_COOKIE);
    if (!session) {
        throw new Error("Session cookie not found");
    }

    client.setSession(session);

    // Return the services you need
    return {
        get account() {
            return new Account(client);
        },
    };
}

// Helper function to parse cookies
function parseCookies(cookies) {
    const map = new Map();
    for (const cookie of cookies.split(";")) {
        const [name, value] = cookie.split("=");
        map.set(name.trim(), value ?? null);
    }
    return map;
}
export { client, account, db, storage, databaseId, collectionId, storageID }