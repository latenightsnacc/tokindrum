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
        // Providers.Email({
        //     server: {
        //         host: "",
        //         port: "",
        //         auth: {
        //             user: "",
        //             pass: ""
        //         },
        //     },
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
        // ... add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
})

export default (req,res) => NextAuth(req, res, options)