import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { account } from '../lib/appwrite';
export const server = {
    login: defineAction({
        input: z.object({
            email: z.string().email(),
            password: z.string().min(6),
        }),
        handler: async ({ email, password }) => {
            try {
                // Attempt to create a session (log in)
                const session = await account.createEmailPasswordSession(email, password);
                console.log("User logged in:", session);

                // Return a redirect response
                return {
                    redirect: "/dashboard",
                };
            } catch (error) {
                console.error("Login error:", error);
                return {
                    error: "Login failed. Please check your credentials.",
                };
            }
        }
    })
};