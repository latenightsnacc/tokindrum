import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    // Configure one or more authentication providers
    providers:[
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Google({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.
        })
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
    // database: process.env.DATABASE_URL,
}
    

export default (req,res) => NextAuth(req, res, options);

