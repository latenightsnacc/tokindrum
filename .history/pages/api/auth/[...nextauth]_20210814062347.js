import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    // Configure one or more authentication providers
    providers:[
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // Passwordless / email sign in
        Providers.Email({
            server: process.env.MAIL_SERVER,
            from: 'NextAuth.js <no-reply@example.com>'
        }),
        // ... add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
})