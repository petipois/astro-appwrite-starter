import { account } from './appwrite';

export async function getUserSession() {
  try {
    const session = await account.get(); // Retrieves current session info
    return session; // Return session data if logged in
  } catch {
    return null; // Return null if no active session
  }
}
